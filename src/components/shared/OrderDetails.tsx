import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useOrderStore } from "../../store/useOrderStore";
import { deleteOrder, getOrderById } from "../../features/orders/api/orderApi";
import { ErrorMessage } from "../ui/ErrorMessage";
import { useModalStore } from "../../store/useModalStore";
import { ActionButton } from "../ui/ActionButton";
import { EditPan } from "../icons/EditPan";
import DeleteCart from "../icons/DeleteCart";
import { useUserStore } from "../../store/useUserStore";

export function OrderDetail() {
  const { user } = useUserStore();
  const queryClient = useQueryClient();
  const { selectedOrderId, setSelectedOrderId } = useOrderStore();
  const { openModal } = useModalStore();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["orders", selectedOrderId],
    queryFn: () => getOrderById(selectedOrderId!),
    enabled: !!selectedOrderId,
  });
  const deleteOrderMutation = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
  const handleDeleteOrder = async (id: string) => {
    try {
      await deleteOrderMutation.mutateAsync(id);
      setSelectedOrderId(null);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };
  return (
    <div className="border border-sky-900 rounded-2xl  min-w-1/3 p-4">
      {isError && <ErrorMessage action={refetch} />}
      {isLoading && <div>Loading</div>}
      {!selectedOrderId && <div>Select order</div>}
      {data && (
        <div className="flex flex-col gap-4 bg-slate-500 text-white p-4">
          <h3>
            <span className="text-yellow-200 font-bold">ORDER: </span>
            {data.id}
          </h3>
          <p>
            <span className="text-yellow-200 font-bold">CLIENT:</span>{" "}
            {data.clientId}
          </p>
          <div className="flex items-center justify-center gap-4">
            <ActionButton
              disabled={false}
              type="button"
              action={() => openModal(data)}
            >
              EDIT
              <EditPan className="w-5 h-5" />
            </ActionButton>
            {user && user.role === "admin" && (
              <ActionButton
                disabled={deleteOrderMutation.isPending}
                type="button"
                action={() => handleDeleteOrder(data.id)}
              >
                DELETE
                <DeleteCart className="w-6 h-6" />
              </ActionButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
