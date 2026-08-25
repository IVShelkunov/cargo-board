import type { CreateOrderDTO, Order } from "../types/orders.schema";
import { api } from "./instance";

export const getOrders = async (search?: string): Promise<Order[]> => {
    const params = search ? { "destination:startsWith": search } : {};
    console.log(params)
    const response = await api.get<Order[]>('/orders', { params });
    return response.data;
}
export const addOrders = async (data: CreateOrderDTO): Promise<Order> => {
    const newOrder = { ...data };
    const response = await api.post<Order>('/orders', newOrder);
    return response.data;
}