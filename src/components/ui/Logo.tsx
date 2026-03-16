"use client";

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-10 h-10 group cursor-pointer">
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        {/* Parte Esquerda: O símbolo { / < */}
        <path
          d="M45 20L15 50L45 80"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 35L30 50L45 65"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />

        {/* Parte Direita: O L / > } */}
        <path
          d="M55 20V80H85"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="butt"
        />

        {/* O detalhe Electric Lime (Marca Registrada do Yuri) */}
        <rect 
          x="55" 
          y="20" 
          width="15" 
          height="5" 
          fill="#D4FF00" 
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}