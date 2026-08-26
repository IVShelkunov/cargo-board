import { useState } from "react";
import {
  createOrderSchema,
  type CreateOrderDTO,
} from "../../features/orders/types/orders.schema";
import { useModalStore } from "../../store/useModalStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientField } from "../ui/ClientFields";
import { CargoFields } from "../ui/CargoFields";
import { ActionButton } from "../ui/ActionButton";
import NextRow from "../icons/NextRow";
import CancelCross from "../icons/CancelCross";
import { addOrder, updateOrder } from "../../features/orders/api/orderApi";
import AddCross from "../icons/AddCross";
import BackRow from "../icons/BackRow";

export function OrderForm() {
  const { orderToEdit, closeModal } = useModalStore();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    trigger,
  } = useForm<CreateOrderDTO>({
    resolver: zodResolver(createOrderSchema) as any,
    defaultValues:
      orderToEdit && "id" in orderToEdit
        ? orderToEdit
        : {
            clientId: "",
            status: "new",
            weight: 0,
            destination: "",
          },
  });
  const orderMutate = useMutation({
    mutationFn: (orderData: CreateOrderDTO) =>
      orderToEdit
        ? updateOrder({ id: orderToEdit.id, update: orderData })
        : addOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      closeModal();
    },
  });
  const onSubmit: SubmitHandler<CreateOrderDTO> = async (
    orderData: CreateOrderDTO,
  ) => {
    try {
      await orderMutate.mutateAsync(orderData);
      reset();
    } catch (err) {
      if (err instanceof Error) {
        setError("root", { message: err.message });
      }
    }
  };

  const [step, setStep] = useState(1);
  const handleNext = async () => {
    const isStepValid = await trigger(["clientId", "status"]);
    if (isStepValid) setStep(2);
  };
  const isEditmode = !!orderToEdit;
  const showStep1 = isEditmode || step === 1;
  const showStep2 = isEditmode || step === 2;
  console.log(orderToEdit);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4 bg-slate-400 p-5 rounded-2xl w-full max-w-md "
    >
      {showStep1 && <ClientField register={register} errors={errors} />}
      {showStep2 && <CargoFields register={register} errors={errors} />}
      {!isEditmode && step === 1 && (
        <ActionButton disabled={false} action={handleNext} type="button">
          NEXT
          <NextRow className="w-6 h-4" />
        </ActionButton>
      )}
      {showStep2 && (
        <>
          <ActionButton disabled={orderMutate.isPending} type="submit">
            {isEditmode ? (
              <span>SAVE</span>
            ) : (
              <>
                CREATE ORDER
                <AddCross className="w-4 h-4" />
              </>
            )}
          </ActionButton>
        </>
      )}
      {showStep2 && !isEditmode && (
        <ActionButton disabled={false} type="button" action={() => setStep(1)}>
          <BackRow className="w-4 h-4" />
          BACK
        </ActionButton>
      )}
      <ActionButton disabled={false} type="button" action={closeModal}>
        CANCEL
        <CancelCross className="w-5 h-5" />
      </ActionButton>
    </form>
  );
}
