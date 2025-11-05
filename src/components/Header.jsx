import { useState } from "react";

export default function Header() {
  const [alignment, setAlignment] = useState("left"); // 'left' | 'center' | 'right'

  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/*============= Header content ================*/}
      <nav
        className={`max-w-[1200px] mx-auto flex items-center gap-5 px-6 py-4 transition-all duration-500 ${alignmentClasses[alignment]}`}
      >
        {/* ================Logos================ */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Main company logo"
            className="h-14 w-auto object-contain"
          />
          <img
            src="/logo2.png"
            alt="Secondary brand logo"
            className="h-16 w-auto object-contain sm:block"
          />
        </a>
      </nav>

      {/*================ Controls (positioned below or top-right corner) =========================*/}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button
          onClick={() => setAlignment("center")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            alignment === "center"
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white/80 text-gray-700 border-gray-300 hover:bg-blue-50"
          }`}
        >
          Style 1
        </button>
        <button
          onClick={() => setAlignment("left")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            alignment === "left"
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white/80 text-gray-700 border-gray-300 hover:bg-blue-50"
          }`}
        >
          Style 2
        </button>
        <button
          onClick={() => setAlignment("right")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            alignment === "right"
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white/80 text-gray-700 border-gray-300 hover:bg-blue-50"
          }`}
        >
          Style 3
        </button>
      </div>
    </header>
  );
}
