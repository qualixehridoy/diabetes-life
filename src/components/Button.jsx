import { useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroButton = ({ text = "Click Me", href = "#videos" }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      href={href}
      onMouseMove={handleMouseMove}
      className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white border border-primary rounded-[30px] cursor-pointer overflow-hidden group bg-primary transition-colors duration-300"
    >
      {/* Animated fill circle */}
      <span
        className="absolute w-0 h-0 rounded-full bg-[#FF7F50] transition-all duration-1000 ease-out group-hover:w-[1000px] group-hover:h-[1000px]"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 5,
        }}
      />

      {/* Text + Icon */}
      <span className="relative z-10 flex flex-row items-center gap-2 transition-all duration-300">
        {text}
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
};

export default HeroButton;
