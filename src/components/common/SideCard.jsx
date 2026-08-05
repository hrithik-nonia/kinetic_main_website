// built in imports
import { useState } from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";

// custom imports

function SideCard({ product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          <Heart
            size={13}
            className={wished ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <h4 className="text-sm font-semibold text-gray-800">{product.name}</h4>
        <div className="flex items-center gap-1">
          <Star size={11} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-gray-700">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price + cart */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <span className="text-sm font-bold text-indigo-600">
            {product.price}
          </span>
          <button
            onClick={() => {
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
              added
                ? "bg-green-500 text-white"
                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SideCard;
