export default function ReloadRow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M45,15 l 0,25 a 5,5 0 0 1 -5,5 l -30,0 a 5,5 0 0 1 -5,-5 l 0,-30 a 5,5 0 0 1 5,-5 l 25,0 l 0,-5 l 10,7.5  l -10,7.5 l 0,-5 l -20,0 a 5,5 0 0 0 -5,5 l 0,20 a 5,5 0 0 0 5,5 l 20,0 a 5,5 0 0 0 5,-5 l 0,-15 Z"
        fill="#fff"
      />
    </svg>
  );
}
