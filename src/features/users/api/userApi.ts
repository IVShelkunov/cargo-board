import { api } from "../../axios/instance";
import type { LoginUserValues, User } from "../types/user.schema";

export const loginUser = async (loginData: LoginUserValues): Promise<User> => {
    const findUser = await api.get<User[]>('/users', { params: { email: loginData.email.toLocaleLowerCase(), password: loginData.password } });
    if (findUser.data.length === 0) {
        throw new Error("Неверный логин или пароль");
    }
    return findUser.data[0];
}