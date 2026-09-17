import { cn } from "../../lib/utils";

export default function LoginIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-all duration-300 group-hover:scale-125",
        className,
      )}
    >
      <path
        d="M 42.5,15 l 0,-2.5 a 5,5 0 0 0 -5,-5 l -27.5,0 a 5,5 0 0 0 -5,5 l 0,27.5 a 5,5 0 0 0 5,5 l 27.5,0 a 5,5 0 0 0 5,-5 l 0,-2.5   "
        stroke="#fff"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 55,23 l -20,0 l 0,-10 l -10,12.5 l 10,12.5 l 0,-10 l 20,0"
        className="fill-white group-hover:-translate-x-3 transition-all duration-300"
      />
    </svg>
  );
}
