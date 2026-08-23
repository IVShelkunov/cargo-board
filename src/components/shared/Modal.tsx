import { useEffect } from "react";
import { useModalStore } from "../../store/useModalStore";
import { CreateOrderForm } from "./CreateOrderForm";

export default function Modal() {
  const { closeModal } = useModalStore();
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);
  return (
    <div
      onClick={closeModal}
      className=" fixed inset-0 z-50 w-full h-screen flex items-center justify-center bg-black/50 "
    >
      <div onClick={(e) => e.stopPropagation()}>
        <CreateOrderForm />
      </div>
    </div>
  );
}
