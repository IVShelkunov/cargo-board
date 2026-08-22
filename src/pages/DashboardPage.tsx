import { CreateOrderForm } from "../components/shared/CreateOrderForm";
import { OrderList } from "../components/shared/OrderList";

export function DashboardPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center gap-4 text-base md:text-xl. p-5">
      <div className="flex flex-col ">
        <h2 className="text-center font-bold p-1 text-2xl">Dashboard</h2>
        <OrderList />
      </div>
      <CreateOrderForm />
    </main>
  );
}
