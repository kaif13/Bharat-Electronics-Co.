import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919936712393?text=Hi%20I%20want%20product%20details"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-black shadow-2xl transition hover:bg-green-600 active:scale-95"
    >
      <FaWhatsapp size={30} aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsApp;
