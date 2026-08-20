import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../features/orders/api/orderApi";
import ReloadRow from "../icons/ReloadRow";

export function OrderList() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "clientId", label: "Client" },
    { key: "status", label: "Status" },
    { key: "weight", label: "Weight (kg)" },
    { key: "destination", label: "Addres" },
  ];
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
  });
  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <div className="text-slate-400">Loading...</div>}
      {isError && (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-red-500">Loading error</p>
          <button
            className="bg-sky-900 hover:bg-sky-800 text-white flex items-center justify-center gap-1 p-2 rounded-2xl cursor-pointer"
            onClick={() => refetch()}
          >
            Retry
            <ReloadRow className="w-5 h-5" />
          </button>
        </div>
      )}
      {!data ||
        (data.length === 0 && <div className="text-slate-400">No orders</div>)}
      {data && data.length !== 0 && (
        <table className="bg-slate-400 ">
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
                {columns.map((col) => (
                  <td
                    key={`${order.id}-${col.key}`}
                    className="border boder-black border-collapse p-1"
                  >
                    {order[col.key as keyof typeof order]}
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
