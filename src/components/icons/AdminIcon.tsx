export default function AdminIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={25} cy={15} r={10} fill="#fff" />
      <path d="M 20,50 l 5,-15 l -5,-5 a 20,20 0 0 0 -15,20" fill="#fff" />
      <path d="M 30,50 l -5,-15 l 5,-5 a 20,20 0 0 1 15,20" fill="#fff" />
    </svg>
  );
}
