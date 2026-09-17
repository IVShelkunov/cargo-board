import { cn } from "../../lib/utils";

export function EditPan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-all duration-300 group-hover:scale-125",
        className,
      )}
    >
      <defs>
        <g id="pen">
          <path d="M 0,0 l 2.5,-10 l -5,0 Z" />
          <rect x={-2.5} y={-40.5} width={5} height={27.5} />
        </g>
      </defs>

      <path
        d="M 25,7.5  l -15,0 a 5,5 0 0 0 -5,5 l 0,27.5 a 5,5 0 0 0 5,5 l 27.5,0 a 5,5 0 0 0 5,-5 l 0,-15 "
        stroke="#fff"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <use
        href="#pen"
        transform="translate(15,35) rotate(45)"
        className="fill-white"
      />
    </svg>
  );
}
