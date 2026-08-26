export function EditPan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 25,7.5  l -15,0 a 5,5 0 0 0 -5,5 l 0,27.5 a 5,5 0 0 0 5,5 l 27.5,0 a 5,5 0 0 0 5,-5 l 0,-15 "
        stroke="#fff"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <line x1={25} y1={25} x2={45} y2={5} stroke="#fff" strokeWidth={6} />
      <path d="M 20,25 l 5,5 l -10,5 Z" fill="#fff" />
    </svg>
  );
}
