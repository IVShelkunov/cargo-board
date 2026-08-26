import {
  createOrderSchema,
  type CreateOrderDTO,
} from "../../features/orders/types/orders.schema";
import FormGroup from "../ui/FormGroup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrder } from "../../features/orders/api/orderApi";
import { ValidateMessage } from "../ui/ValidateMessage";
import { useModalStore } from "../../store/useModalStore";
import { useState } from "react";
import NextRow from "../icons/NextRow";
import BackRow from "../icons/BackRow";
import { ActionButton } from "../ui/ActionButton";
import CancelCross from "../icons/CancelCross";
import AddCross from "../icons/AddCross";

export function CreateOrderForm() {
  const { closeModal } = useModalStore();
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
  });
  const createMutate = useMutation({
    mutationFn: (orderData: CreateOrderDTO) => addOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      closeModal();
    },
  });
  const onSubmit: SubmitHandler<CreateOrderDTO> = async (
    orderData: CreateOrderDTO,
  ) => {
    try {
      await createMutate.mutateAsync(orderData);
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
  return (
    <form
      noValidate
      className="flex flex-col gap-4 bg-slate-400 p-5 rounded-2xl w-full max-w-md "
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 1 && (
        <FormGroup>
          <label htmlFor="clientId">Client:</label>
          <input type="text" id="clientId" {...register("clientId")} />
          {errors.clientId && (
            <ValidateMessage message={errors.clientId.message} />
          )}
          <label htmlFor="status">Order status:</label>
          <select id="status" {...register("status")}>
            <option value={"new"}>New</option>
            <option value={"in_transit"}>In transit</option>
            <option value={"delivered"}>Delivered</option>
          </select>
          {errors.status && <ValidateMessage message={errors.status.message} />}
          <ActionButton disabled={false} action={handleNext} type="button">
            NEXT
            <NextRow className="w-6 h-4" />
          </ActionButton>
        </FormGroup>
      )}
      {step === 2 && (
        <FormGroup>
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" {...register("weight")} />
          {errors.weight && <ValidateMessage message={errors.weight.message} />}
          <label htmlFor="destination">Address:</label>
          <input type="text" id="destination" {...register("destination")} />
          {errors.destination && (
            <ValidateMessage message={errors.destination.message} />
          )}
          <ActionButton
            disabled={false}
            type="button"
            action={() => setStep(1)}
          >
            <BackRow className="w-4 h-4" />
            BACK
          </ActionButton>
          <ActionButton disabled={createMutate.isPending} type="submit">
            {createMutate.isPending ? "SAVING..." : "CREATE ORDER"}
            <AddCross className="w-4 h-4" />
          </ActionButton>
          <ActionButton disabled={false} type="button" action={closeModal}>
            CANCEL
            <CancelCross className="w-5 h-5" />
          </ActionButton>
        </FormGroup>
      )}
    </form>
  );
}
