import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-center tracking-[0.8em] font-bold bg-sky-900 p-4">
        <h1 className="text-xl text-slate-200">CARGO SYSTEM</h1>
        <svg width={40} height={40} viewBox="0 0 40 40">
          <circle cx={20} cy={20} r={10} stroke="#FFF" fill="none" />
          <circle cx={20} cy={20} r={5} stroke="#FFF" fill="none" />
          <circle cx={20} cy={20} r={15} stroke="#FFF" fill="none" />
        </svg>
      </header>
      <main className="flex flex-row items-center justify-center ">
        <Outlet />
      </main>
    </div>
  );
}
