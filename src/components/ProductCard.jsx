import { useNavigate } from "react-router-dom";

function ProductCard({ product, index }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 hover:border-white/20 transition"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
        />

        {/* Badge */}
        {index < 2 && (
          <span className="absolute top-2 left-2 bg-green-500 text-black text-[10px] px-2 py-1 rounded-full font-semibold">
            Best Seller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-3 space-y-2">
        {/* <p className="text-[10px] uppercase tracking-wider text-stone-400">
          {product.category}
        </p> */}
        <p className="text-[10px] uppercase tracking-wider text-stone-400">
          {product.brand} • {product.category}
        </p>
        <h3 className="text-sm font-semibold text-white sm:text-base line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm font-semibold text-white">{product.price}</p>

        <p className="text-[11px] text-green-400">✔ In stock today</p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919936712393?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
            product.name,
          )}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-green-500 px-3 py-2 text-xs font-semibold text-black hover:bg-green-600 transition"
        >
          Get Price
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
