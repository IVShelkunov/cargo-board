import { useQuery } from "@tanstack/react-query";
import AddCross from "../components/icons/AddCross";
import Modal from "../components/shared/Modal";
import { OrderList } from "../components/shared/OrderList";
import { ActionButton } from "../components/ui/ActionButton";
import { useModalStore } from "../store/useModalStore";
import { getOrders } from "../features/orders/api/orderApi";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { useDebounce } from "../hooks/useDebounce";
import { useState } from "react";
import { OrderDetail } from "../components/shared/OrderDetails";
import { AuthWidget } from "../components/ui/AuthWidget";

export function DashboardPage() {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounce(inputValue, 1000);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["orders", debouncedSearch],
    queryFn: () => getOrders(debouncedSearch),
  });

  const { isOpen, openModal } = useModalStore();
  return (
    <main className="relative min-w-full flex flex-col md:flex-row items-center justify-center gap-4 text-base md:text-xl p-5">
      <AuthWidget />
      {isOpen && <Modal />}
      <div className="flex flex-col gap-4">
        <h2 className="text-center p-1 text-2xl tracking-widest font-extrabold">
          DASHBOARD
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <ActionButton
            type="button"
            disabled={false}
            action={() => openModal()}
          >
            CREATE ORDER
            <AddCross className="w-4 h-4" />
          </ActionButton>
          <input
            type="text"
            placeholder="search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row  justify-center gap-4 ">
          {isLoading && <div className="text-slate-400">Loading...</div>}
          {isError && <ErrorMessage action={refetch} />}
          {!data ||
            (data.length === 0 && (
              <div className="text-slate-400 flex items-center justify-center ">
                <p>No orders</p>
              </div>
            ))}
          {data && data.length !== 0 && <OrderList orders={data} />}
          <OrderDetail />
        </div>
      </div>
    </main>
  );
}
