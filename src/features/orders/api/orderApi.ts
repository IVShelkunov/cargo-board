import type { CreateOrderDTO, Order } from "../types/orders.schema";
import { api } from "../../axios/instance";

export const getOrders = async (search?: string): Promise<Order[]> => {
    const params = search ? { "destination:startsWith": search } : {};
    const response = await api.get<Order[]>('/orders', { params });
    return response.data;
}
export const getOrderById = async (id: string): Promise<Order> => {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
}
export const addOrder = async (data: CreateOrderDTO): Promise<Order> => {
    const newOrder = { ...data };
    const response = await api.post<Order>('/orders', newOrder);
    return response.data;
}
export const updateOrder = async (data: { id: string, update: Partial<CreateOrderDTO> }): Promise<Order> => {
    const { id, update } = data;
    const response = await api.patch<Order>(`/orders/${id}`, update);
    return response.data;
}
export const deleteOrder = async (id: string) => {
    const response = await api.delete(`/orders/${id}`);
    return response;
}