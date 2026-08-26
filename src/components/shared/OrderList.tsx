import type { Order } from "../../features/orders/types/orders.schema";
import { useOrderStore } from "../../store/useOrderStore";

interface OrderListProps {
  orders: Order[];
}
export function OrderList({ orders }: OrderListProps) {
  const columns = [
    { key: "id", label: "ID" },
    { key: "clientId", label: "Client" },
    { key: "status", label: "Status" },
    { key: "weight", label: "Weight (kg)" },
    { key: "destination", label: "Addres" },
  ];
  const { setSelectedOrderId } = useOrderStore();
  return (
    <div className="flex flex-col items-center justify-center">
      <table className="bg-slate-400 ">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                className="border boder-black border-collapse p-1"
                key={col.key}
              >
                {col.label.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="hover:bg-slate-300 hover:cursor-pointer"
              onClick={() => setSelectedOrderId(order.id)}
            >
              {columns.map((col) => (
                <td
                  key={`${order.id}-${col.key}`}
                  className="border boder-black border-collapse p-1 wrap-break-word"
                >
                  {order[col.key as keyof typeof order]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
