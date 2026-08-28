import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../store/useUserStore"
import Cookies from "js-cookie"
import { api } from "../features/axios/instance";
import type { User } from "../features/users/types/user.schema";
import { useEffect } from "react";

export const useAuthInit = () => {
    const { login, setLoading } = useUserStore();
    const userId = Cookies.get("auth_user_id");
    const query = useQuery({
        queryKey: ['users', userId],
        queryFn: async () => {
            const { data } = await api.get<User>(`/users/${userId}`);
            return data;
        },
        enabled: !!userId,
        retry: false,
    });
    useEffect(() => {
        if (query.isLoading) setLoading(true);
        if (query.isSuccess && query.data) {
            setLoading(false)
            login(query.data)
        }
        if (query.isError) setLoading(false);
    }, [query.isSuccess, query.isError, query.data, login, setLoading, userId]);
    return query;
}