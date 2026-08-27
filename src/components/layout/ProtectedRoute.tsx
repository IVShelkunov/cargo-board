import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";

export function ProtectedRoute() {
  const { isAuth } = useUserStore();
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
