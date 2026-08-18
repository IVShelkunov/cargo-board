import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-center tracking-[0.8em] font-bold bg-sky-900 p-4">
        <h1 className="text-xl text-slate-200">CARGO SYSTEM</h1>
      </header>
      <main className="flex items-center justify-center ">
        <Outlet />
      </main>
    </div>
  );
}
