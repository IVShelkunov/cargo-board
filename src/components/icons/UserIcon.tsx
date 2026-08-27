export default function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={25} cy={15} r={10} fill="#fff" />
      <circle cx={25} cy={50} r={20} fill="#fff" />
    </svg>
  );
}
