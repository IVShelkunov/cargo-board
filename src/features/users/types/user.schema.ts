import z, { string } from "zod";

export const loginUserSchema = z.object({
    email: z.email({ error: "Неверный формат почты" }),
    password: z.string().min(3, "Пароль должен быть не менее 3 символов")
});
export type LoginUserValues = z.infer<typeof loginUserSchema>;

export const UserSchema = loginUserSchema.extend({
    id: string(),
    name: string(),
    role: z.enum(['admin', 'user'])
});
export type User = z.infer<typeof UserSchema>;