import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductGrid() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Fan",
    "Light",
    "Wire",
    "Switch",
    "Socket",
    "MCB",
    "Cooler",
  ];

  const filteredProducts =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="product"
      className="bg-black px-4 py-14 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Explore Products
          </h2>
        </div>

        {/* 🔥 Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border ${
                active === cat
                  ? "bg-white text-black"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
