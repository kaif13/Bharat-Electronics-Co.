import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveIndex(0);
  }, [product]);

  if (!product) {
    return (
      <section className="bg-black px-4 py-20 text-white text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link to="/" className="mt-4 inline-block text-green-400">
          Back to Products
        </Link>
      </section>
    );
  }

  const images = product.images || [product.image];
  const activeImage = images[activeIndex];

  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          to="/"
          className="mb-6 inline-block text-sm text-stone-400 hover:text-white"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT: IMAGE */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={activeImage}
                alt={product.name}
                className="h-[300px] w-full object-contain sm:h-[450px]"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveIndex(i)}
                  className={`h-14 w-14 cursor-pointer rounded-lg object-cover border ${
                    i === activeIndex ? "border-white" : "border-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-5">
            {/* 🔥 BRAND + CATEGORY */}
            <p className="text-xs uppercase tracking-wider text-stone-400">
              {product.brand} • {product.category}
            </p>

            {/* TITLE */}
            <h1 className="text-2xl font-semibold sm:text-3xl">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm text-stone-300">{product.description}</p>

            {/* PRICE + TRUST */}
            <div className="space-y-2">
              <p className="text-lg font-semibold">{product.price}</p>

              <p className="text-green-400 text-sm">✔ In stock today</p>

              <p className="text-xs text-stone-400">
                Trusted local store in Varanasi
              </p>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/919999999999?text=Hi%20I%20want%20price%20and%20availability%20for%20${encodeURIComponent(
                product.name,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-black hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              Get Price & Availability
            </a>

            {/* TRUST STRIP */}
            <div className="text-xs text-stone-400 space-y-1">
              <p>✔ Instant WhatsApp response</p>
              <p>✔ No delivery wait</p>
              <p>✔ Visit shop & buy directly</p>
            </div>

            {/* FEATURES */}
            <div className="rounded-xl bg-white/5 p-4">
              <h2 className="text-sm font-semibold mb-3">Features</h2>

              <div className="grid grid-cols-2 gap-2">
                {product.features?.map((f) => (
                  <div
                    key={f}
                    className="text-xs bg-white/10 px-3 py-2 rounded-lg text-center"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div className="rounded-xl bg-white/5 p-4">
              <h2 className="text-sm font-semibold mb-3">Specifications</h2>

              <div className="space-y-2">
                {Object.entries(product.details || {}).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between text-sm bg-white/10 px-3 py-2 rounded-lg"
                  >
                    <span className="text-stone-300 capitalize">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
