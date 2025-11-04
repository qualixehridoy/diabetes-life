import { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:diabeteslifebd@gmail.com", label: "Email" },
];

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [showTop, setShowTop] = useState(false);

  // Live clock effect
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-[1000px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        {/* === Brand Section === */}
        <div className="flex flex-col items-start space-y-3 text-left">
          <h2 className="text-2xl font-bold font-Hanken">Have Questions?</h2>

          <div className="flex items-center gap-4 pt-6">
            <Phone />
            <p className="text-xl">Call 800-232-4138</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail />
            <p className="text-xl">diabeteslifebd@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Clock />
            <p className="text-xl">
              Open 24/7 • <span className="font-semibold">{currentTime}</span>
            </p>
          </div>
        </div>

        {/* === Social Links === */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-3 text-2xl text-center w-full">
            Follow Us
          </h3>
          <div className="flex gap-4 mx-auto">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transform hover:scale-110 transition-transform duration-200 hover:text-accent"
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-blue-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Diabetes Life — All Rights Reserved.
      </div>

      {/* === Scroll-to-top Button === */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-100 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
