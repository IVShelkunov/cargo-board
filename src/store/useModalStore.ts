import { create } from "zustand"
import type { Order } from "../features/orders/types/orders.schema";

interface ModalState {
    isOpen: boolean;
    orderToEdit: Order | null;
    openModal: (order?: Order) => void;
    closeModal: () => void;
}
export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    orderToEdit: null,
    openModal: (order) => {
        const isEvent = order && typeof order === 'object' && 'nativeEvent' in order;
        set({ isOpen: true, orderToEdit: isEvent ? null : (order || null) })
    },
    closeModal: () => set({ isOpen: false, orderToEdit: null }),
}));