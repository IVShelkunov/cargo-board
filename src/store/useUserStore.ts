import { create } from "zustand";
import type { User } from "../features/users/types/user.schema";

interface UserState {
    isAuth: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}
export const useUserStore = create<UserState>((set) => ({
    isAuth: false,
    user: null,
    login: (user) => set({ isAuth: true, user: user }),
    logout: () => set({ isAuth: false, user: null })
}));