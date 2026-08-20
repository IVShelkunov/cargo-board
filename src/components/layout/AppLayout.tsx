import { Outlet } from "react-router-dom";
import { Logo } from "../icons/Logo";

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-center  font-bold bg-sky-900 p-4">
        <h1 className="text-xl text-slate-200 tracking-[0.8em]">
          CARGO SYSTEM
        </h1>
        <Logo />
      </header>
      <main className="flex flex-row items-center justify-center ">
        <Outlet />
      </main>
    </div>
  );
}
