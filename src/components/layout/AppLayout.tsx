import { Outlet } from "react-router-dom";
import { Logo } from "../icons/Logo";
import { useAuthInit } from "../../hooks/useAuthInit";
import { ActionButton } from "../ui/ActionButton";
import { useUserStore } from "../../store/useUserStore";
import LogoutIcon from "../icons/LogoutIcon";

export function AppLayout() {
  const { logout, isAuth } = useUserStore();
  useAuthInit();
  return (
    <div className="flex flex-col">
      <header className=" relative flex items-center justify-center gap-4  font-bold bg-sky-900 p-4">
        <h1 className="text-xl text-slate-200 tracking-[0.8em]">
          CARGO SYSTEM
        </h1>
        <Logo />
        {isAuth && (
          <div className="absolute right-4 ">
            <ActionButton disabled={false} type="button" action={logout}>
              LOGOUT
              <LogoutIcon className="w-6 h-6" />
            </ActionButton>
          </div>
        )}
      </header>
      <main className="flex flex-row items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
