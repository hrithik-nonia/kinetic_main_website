// built in imports
import { useState } from "react";
import { Heart } from "lucide-react";
// custom imports

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // ✅ nested structure se values
  const image = product.images?.thumbnail;
  const discount = product.pricing?.discount_percent;
  const salePrice = product.pricing?.sale_price;
  const originalPrice = product.pricing?.original_price;

  console.log(product);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Image area */}
      <div className="relative bg-gray-50">
        <img
          src={image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {/* Discount badge */}
        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>
        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          <Heart
            size={15}
            className={wished ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 leading-tight">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-indigo-600 font-bold text-sm">
            ₹{salePrice?.toFixed(2)}
          </span>
          <span className="text-gray-400 text-xs line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          className={`mt-2 w-full py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            added
              ? "bg-green-500 text-white"
              : "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
