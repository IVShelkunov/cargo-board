import type { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
  className?: string;
}
export default function FormGroup({ children, className }: FormGroupProps) {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>;
}
