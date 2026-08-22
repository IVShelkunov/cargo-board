import type { CreateOrderDTO, Order } from "../types/orders.schema";
import { api } from "./instance";

export const getOrders = async (): Promise<Order[]> => {
    const response = await api.get<Order[]>('/orders');
    return response.data;
}
export const addOrders = async (data: CreateOrderDTO): Promise<Order> => {
    const newOrder = { ...data };
    const response = await api.post<Order>('/orders', newOrder);
    return response.data;
}