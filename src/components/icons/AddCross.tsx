import { cn } from "../../lib/utils";

export default function AddCross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-all duration-300 group-hover:scale-125",
        className,
      )}
    >
      <rect x={20} y={5} width={10} height={40} className=" fill-amber-50" />
      <rect x={5} y={20} width={40} height={10} fill="#fff" />
    </svg>
  );
}
