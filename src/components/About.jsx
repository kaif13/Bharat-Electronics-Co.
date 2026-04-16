function About() {
  return (
    <section
      id="about"
      className="bg-white/5 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Buy Electrical Products Without Confusion or Delay
          </h2>

          <p className="mt-3 text-sm text-stone-300 leading-7 sm:text-base">
            Visit our store in Varanasi or check product details online. Get
            instant answers on WhatsApp and choose the right products without
            wasting time.
          </p>
        </div>

        {/* Points */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold">Visit & Buy Instantly</h3>
            <p className="mt-2 text-sm text-stone-300">
              No delivery wait. Check products directly and purchase from the
              shop.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold">Instant WhatsApp Support</h3>
            <p className="mt-2 text-sm text-stone-300">
              Get product price, availability and quick help within minutes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold">Genuine Quality Products</h3>
            <p className="mt-2 text-sm text-stone-300">
              We provide trusted brands with reliable performance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold">Easy Product Comparison</h3>
            <p className="mt-2 text-sm text-stone-300">
              View clear details online before visiting the store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
