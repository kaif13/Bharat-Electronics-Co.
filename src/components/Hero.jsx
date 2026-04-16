import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
      title: "Best Price Electrical Products in Varanasi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
      title: "Premium Fans, Lights & Wiring Solutions",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-5">
          {/* Tag */}
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Electrical Store • Sitapur
          </p>

          {/* Heading */}
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Affordable Electrical Products with{" "}
            <span className="text-white/70">Instant WhatsApp Support</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm text-stone-300 sm:text-base">
            Fans, coolers, wires & switches available at best prices. Get
            product details, availability and quick response directly on
            WhatsApp.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/919999999999?text=Hi%20I%20want%20product%20details"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-600 transition"
            >
              <FaWhatsapp size={18} />
              Get Price on WhatsApp
            </a>

            <a
              href="#products"
              className="flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Browse Products
            </a>
          </div>

          {/* 🔥 Trust Strip (STEP 10) */}
          <div className="pt-4 flex flex-col gap-2 text-sm text-stone-300 sm:flex-row sm:gap-6">
            <p>✔ No waiting for delivery</p>
            <p>✔ Instant shop availability</p>
            <p>✔ Direct WhatsApp support</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
