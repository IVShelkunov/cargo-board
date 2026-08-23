import {
  createOrderSchema,
  type CreateOrderDTO,
} from "../../features/orders/types/orders.schema";
import FormGroup from "../ui/FormGroup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrders } from "../../features/orders/api/orderApi";
import { ValidateMessage } from "../ui/ValidateMessage";
import { useModalStore } from "../../store/useModalStore";

export function CreateOrderForm() {
  const { closeModal } = useModalStore();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CreateOrderDTO>({
    resolver: zodResolver(createOrderSchema) as any,
  });
  const createMutate = useMutation({
    mutationFn: (orderData: CreateOrderDTO) => addOrders(orderData),
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
  return (
    <form
      noValidate
      className="flex flex-col gap-4 bg-slate-400 p-4 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <label htmlFor="clientId">Client:</label>
        <input type="text" id="clientId" {...register("clientId")} />
        {errors.clientId && (
          <ValidateMessage message={errors.clientId.message} />
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" {...register("weight")} />
        {errors.weight && <ValidateMessage message={errors.weight.message} />}
      </FormGroup>
      <FormGroup>
        <label htmlFor="destination">Address</label>
        <input type="text" id="destination" {...register("destination")} />
        {errors.destination && (
          <ValidateMessage message={errors.destination.message} />
        )}
      </FormGroup>
      <label htmlFor="status">Order status</label>
      <select id="status" {...register("status")}>
        <option value={"new"}>New</option>
        <option value={"in_transit"}>In transit</option>
        <option value={"delivered"}>Delivered</option>
      </select>
      {errors.root && <ValidateMessage message={errors.root.message} />}
      <button type="submit" disabled={createMutate.isPending}>
        {createMutate.isPending ? "SAVING..." : "CREATE ORDER"}
      </button>
      <button
        type="button"
        onClick={closeModal}
        disabled={createMutate.isPending}
      >
        CANCEL
      </button>
    </form>
  );
}
