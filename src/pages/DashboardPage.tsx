import { OrderList } from "../components/shared/OrderList";

export function DashboardPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 text-base md:text-xl">
      <h2 className="text-center font-bold p-1 text-2xl">Dashboard</h2>
      <OrderList />
    </main>
  );
}
