import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateOrderDTO } from "../../features/orders/types/orders.schema";
import FormGroup from "./FormGroup";
import { ValidateMessage } from "./ValidateMessage";

interface CargoFieldsProps {
  register: UseFormRegister<CreateOrderDTO>;
  errors: FieldErrors<CreateOrderDTO>;
}
export const CargoFields = ({ register, errors }: CargoFieldsProps) => {
  return (
    <FormGroup>
      <label htmlFor="weight">Weight:</label>
      <input type="number" id="weight" {...register("weight")} />
      {errors.weight && <ValidateMessage message={errors.weight.message} />}
      <label htmlFor="destination">Address:</label>
      <input type="text" id="destination" {...register("destination")} />
      {errors.destination && (
        <ValidateMessage message={errors.destination.message} />
      )}
    </FormGroup>
  );
};
