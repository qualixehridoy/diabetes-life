import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon lib (auto installed via shadcn/ui or lucide-react)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-white/20 z-50">
      <nav className="max-w-[1200px] mx-auto flex  items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className=" flex justify-center">
          <img
            src="/logo.png"
            alt="Diabetes Campaign Logo"
            className="h-12 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#howitswork" className="hover:text-accent transition-colors">How It's Work</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#gallary" className="hover:text-accent transition-colors">Gallary</a></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-accent transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>


      </nav>



      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm shadow-md">
          <ul className="flex flex-col items-start pl-4 gap-4 py-4 text-secondary  font-medium">
            <li><a onClick={() => setIsOpen(false)} href="#howitswork" className="hover:text-accent transition">How It's Work</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#about" className="hover:text-accent transition">About</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#gallary" className="hover:text-accent transition">Gallary</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
