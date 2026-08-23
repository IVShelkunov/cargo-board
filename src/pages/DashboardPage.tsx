import Modal from "../components/shared/Modal";
import { OrderList } from "../components/shared/OrderList";
import { useModalStore } from "../store/useModalStore";

export function DashboardPage() {
  const { isOpen, openModal } = useModalStore();
  return (
    <main className="flex flex-col md:flex-row items-center justify-center gap-4 text-base md:text-xl. p-5">
      {isOpen && <Modal />}
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-bold p-1 text-2xl">Dashboard</h2>
        <button onClick={openModal}>CREATE ORDER</button>
        <OrderList />
      </div>
    </main>
  );
}
