import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import { LoadSpinner } from "../ui/LoadSpiner";

export function ProtectedRoute() {
  const { isAuth, isLoading } = useUserStore();
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <LoadSpinner />
      </div>
    );
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
