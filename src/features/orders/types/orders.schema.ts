import { z } from "zod"
export const createOrderSchema = z.object({
    clientId: z.string(),
    status: z.enum(['new', 'in_transit', 'delivered']),
    weight: z.coerce.number().min(1, 'Вес должен быть больше 0'),
    destination: z.string().min(3, 'Адрес слишком короткий')
});

export type CreateOrderDTO = z.infer<typeof createOrderSchema>;

export const orderSchema = createOrderSchema.extend({
    id: z.string()
});
export type Order = z.infer<typeof orderSchema>;