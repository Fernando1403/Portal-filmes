export default function BtnAdicionar({ funcao, color, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-white text-sm mb-1">{label}</span>
      <button
        title={label}
        className={`group cursor-pointer rounded-full border-2 border-${color} text-${color} hover:bg-${color} hover:text-white transition duration-300 flex items-center justify-center w-12 h-12`}
        onClick={() => funcao()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          className="stroke-current fill-none group-hover:fill-current"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth={1.5}
          />
          <path d="M8 12H16" strokeWidth={1.5} />
          <path d="M12 16V8" strokeWidth={1.5} />
        </svg>
      </button>
    </div>
  );
}
