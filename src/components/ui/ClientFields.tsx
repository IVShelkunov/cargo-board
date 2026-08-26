import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateOrderDTO } from "../../features/orders/types/orders.schema";
import FormGroup from "./FormGroup";
import { ValidateMessage } from "./ValidateMessage";

interface ClientFieldsProps {
  register: UseFormRegister<CreateOrderDTO>;
  errors: FieldErrors<CreateOrderDTO>;
}
export const ClientField = ({ register, errors }: ClientFieldsProps) => {
  return (
    <FormGroup>
      <label htmlFor="clientId">Client:</label>
      <input type="text" id="clientId" {...register("clientId")} />
      {errors.clientId && <ValidateMessage message={errors.clientId.message} />}
      <label htmlFor="status">Order status:</label>
      <select id="status" {...register("status")}>
        <option value={"new"}>New</option>
        <option value={"in_transit"}>In transit</option>
        <option value={"delivered"}>Delivered</option>
      </select>
      {errors.status && <ValidateMessage message={errors.status.message} />}
    </FormGroup>
  );
};
