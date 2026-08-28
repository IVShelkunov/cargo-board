export default function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 42.5,15 l 0,-2.5 a 5,5 0 0 0 -5,-5 l -27.5,0 a 5,5 0 0 0 -5,5 l 0,27.5 a 5,5 0 0 0 5,5 l 27.5,0 a 5,5 0 0 0 5,-5 l 0,-2.5   "
        stroke="#fff"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 20,23 l 0,5 l 20,0 l 0,5 l 10,-7.5 l -10,-7.5 l 0,5 l -20,0"
        fill="#fff"
      />
    </svg>
  );
}
