import { create } from "zustand";
import type { User } from "../features/users/types/user.schema";
import Cookies from "js-cookie"

interface UserState {
    isAuth: boolean;
    isLoading: boolean;
    user: User | null;
    setLoading: (loading: boolean) => void;
    login: (user: User) => void;
    logout: () => void;
}
export const useUserStore = create<UserState>((set) => ({
    isAuth: false,
    user: null,
    isLoading: true,
    setLoading: (loading: boolean) => set({ isLoading: loading }),
    login: (user) => {
        Cookies.set("auth_user_id", user.id, { expires: 7 });
        set({ isAuth: true, user: user })
    },
    logout: () => {
        Cookies.remove("auth_user_id");
        set({ isAuth: false, user: null });
    }
}));