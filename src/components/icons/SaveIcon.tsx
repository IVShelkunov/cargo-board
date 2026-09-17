import { cn } from "../../lib/utils";

export default function SaveIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-all duration-200 group-hover:scale-125 group-hover:-rotate-45",
        className,
      )}
    >
      <defs>
        <g id="disk">
          <path
            d="M -20,-20 l 30,0 l 10 10 l 0,30 l -40,0 Z "
            className="stroke-white fill-transparent"
          />
          <rect x={-10} y={-10} width={20} height={5} className="fill-white" />
          <circle cx={0} cy={5} r={5} className="fill-white" />
        </g>
      </defs>

      <use href="#disk" transform="translate(25,25)" />
    </svg>
  );
}
