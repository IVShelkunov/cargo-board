import type { ReactNode } from "react";

interface ActionButtonProps {
  type: "submit" | "button";
  action?: () => void;
  children: ReactNode;
  disabled: boolean;
}
export function ActionButton({
  action,
  children,
  type,
  disabled,
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className="flex justify-center items-center gap-1"
      onClick={action}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
