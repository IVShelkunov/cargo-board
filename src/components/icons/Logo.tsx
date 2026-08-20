export function Logo() {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <line
          id="line"
          x1={0}
          y1={0}
          x2={20}
          y2={-10}
          strokeDasharray={5}
          stroke="#FFF"
        />
      </defs>
      <circle cx={25} cy={25} r={10} stroke="#FFF" fill="none" />
      <circle cx={25} cy={25} r={5} stroke="#FFF" fill="#fff" />
      <circle cx={25} cy={25} r={15} stroke="#FFF" fill="none" />
      <circle cx={25} cy={25} r={20} stroke="#FFF" fill="none" />
    </svg>
  );
}
