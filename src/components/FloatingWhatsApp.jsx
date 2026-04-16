import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919936712393?text=Hi%20I%20want%20product%20details"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-base font-semibold text-black shadow-2xl hover:bg-green-600 active:scale-95 transition"
    >
      <FaWhatsapp size={22} />

      {/* Text */}
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;
