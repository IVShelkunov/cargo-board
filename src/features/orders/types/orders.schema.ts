import { z } from "zod"
export const step1OrderSchema = z.object({
    clientId: z.string().min(1, 'Введите ID клиента!'),
    status: z.enum(['new', 'in_transit', 'delivered'])
});
export const step2OrderSchema = z.object({
    weight: z.coerce.number().min(1, 'Вес должен быть больше 0'),
    destination: z.string().min(3, 'Адрес слишком короткий')
});
export const createOrderSchema = step1OrderSchema.extend(step2OrderSchema.shape)
    .superRefine((values, ctx) => {
        if (values.weight > 5000) {
            if (values.status === 'delivered') {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Груз не может превышать 5000 кг созданный в статусе Delivered",
                    path: ['weight']
                });
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Тяжелый груз (более 5000 кг) не может быть создан сразу в статусе Delivered",
                    path: ['status']
                });
            }
        }
    })

export type CreateOrderDTO = z.infer<typeof createOrderSchema>;

export const orderSchema = createOrderSchema.extend({
    id: z.string()
});
export type Order = z.infer<typeof orderSchema>;