import  { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon lib (auto installed via shadcn/ui or lucide-react)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full   z-50">
      <nav className="max-w-[1200px] mx-auto flex  items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className=" flex justify-center">
          <img src="/logo.png" alt="Diabetes Campaign Logo" className="h-12 w-auto" />
        </a>

        <ul className="hidden md:flex gap-8 text-secondary font-medium">
          <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#spread" className="hover:text-accent transition-colors">Spread Awareness</a></li>
          <li><a href="#videos" className="hover:text-accent transition-colors">Videos</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary hover:text-accent transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
       
        
      </nav>
      

     
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-black font-medium">
            <li><a onClick={() => setIsOpen(false)} href="#hero" className="hover:text-accent transition">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#spread" className="hover:text-accent transition">Spread Awareness</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#videos" className="hover:text-accent transition">Videos</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
