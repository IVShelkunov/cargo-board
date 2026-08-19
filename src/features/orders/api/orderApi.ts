import type { Order } from "../types/orders.schema";
import { api } from "./instance";

export const getOrders = async (): Promise<Order[]> => {
    const response = await api.get<Order[]>('/orders');
    return response.data;
}