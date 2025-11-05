import { useState, useEffect } from "react";

export default function ThemeColorPicker() {
  const [colors, setColors] = useState({
    primary: "#081965",
    secondary: "#F2F2F2",
    accent: "#30918b",
  });

  // Apply color changes to CSS variables dynamically
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-4 flex flex-col gap-3 z-50">
      <h3 className="text-sm font-semibold text-gray-700 mb-1">
        🎨 Theme Colors
      </h3>

      {Object.keys(colors).map((key) => (
        <label
          key={key}
          className="flex items-center justify-between text-sm capitalize"
        >
          <span className="text-gray-600">{key}</span>
          <input
            type="color"
            value={colors[key]}
            onChange={(e) =>
              setColors((prev) => ({ ...prev, [key]: e.target.value }))
            }
            className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
          />
        </label>
      ))}

      <button
        onClick={() =>
          setColors({
            primary: "#081965",
            secondary: "#F2F2F2",
            accent: "#30918b",
          })
        }
        className="text-xs mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md transition"
      >
        Reset
      </button>
    </div>
  );
}
