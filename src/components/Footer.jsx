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

// === Social Links Data ===
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

  // === Live Clock ===
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // === Show Scroll-to-top ===
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden text-blue-900">
      {/* === Background Pattern === */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('./assets/FooterBackground.png')", // your pattern image here
        }}
      ></div>

      {/* === Background Color Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white opacity-95"></div>

      {/* === Content === */}
      <div className="relative max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10 z-10">
        {/* === Contact Section === */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-2xl font-bold text-blue-900 font-Hanken">
            Have Questions?
          </h2>

          <div className="flex items-center gap-3">
            <Phone className="text-blue-700" />
            <p className="text-lg">Call 800-232-4138</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-700" />
            <p className="text-lg">diabeteslifebd@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-blue-700" />
            <p className="text-lg">
              Open 24/7 •{" "}
              <span className="font-semibold text-blue-800">
                {currentTime}
              </span>
            </p>
          </div>
        </div>

        {/* === Social Links === */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="font-semibold mb-4 text-2xl text-blue-900">
            Follow Us
          </h3>
          <div className="flex gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110"
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="relative border-t border-blue-200 bg-blue-50/70 text-center py-4 text-sm text-blue-800 z-10">
        © {new Date().getFullYear()} Diabetes Life — All Rights Reserved.
      </div>

      {/* === Scroll-to-top Button === */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all z-999"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
