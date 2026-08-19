import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../features/orders/api/orderApi";

export function OrderList() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "clientId", label: "Клиент" },
    { key: "status", label: "Статус" },
    { key: "weight", label: "Вес (кг)" },
    { key: "destination", label: "Адрес" },
  ];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
  });
  console.log(data);
  return (
    <div className="flex items-center justify-center">
      {isLoading && <div className="text-slate-400">Loading...</div>}
      {isError && <div className="text-red-800">Data loading error</div>}
      {data && (
        <table className="bg-slate-400">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  className="border boder-black border-collapse p-1"
                  key={col.key}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                {Object.values(order).map((val) => (
                  <td
                    key={`${order.id}-${val}`}
                    className="border boder-black border-collapse p-1"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
