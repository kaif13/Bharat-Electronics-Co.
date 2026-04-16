import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white sm:px-6">
        {/* Logo */}
        <div>
          <p className="text-sm font-semibold sm:text-lg">
            Bharat Electrical Co.
          </p>
          <p className="text-xs text-stone-400">Sitapur • Trusted Store</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="#product" className="hover:text-white/80">
            Products
          </a>

          <a href="#about" className="hover:text-white/80">
            About
          </a>

          {/* PRIMARY CTA */}
          <a
            href="https://wa.me/919936712393?text=Hi%20I%20want%20product%20details"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col gap-1"
        >
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden border-t border-white/10 bg-black px-4 py-5 space-y-4">
          <a
            href="#products"
            onClick={() => setIsOpen(false)}
            className="block text-lg"
          >
            Products
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-lg"
          >
            About
          </a>

          {/* CTA inside mobile */}
          <a
            href="https://wa.me/919936712393?text=Hi%20I%20want%20product%20details"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-black font-semibold"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
