// built in imports
import { useState, useEffect, useContext } from "react";
import { Star } from "lucide-react";

// custom imports
import { UserContext } from "../../context/AppContext";

export default function FiltersSidebar({ onFilterChange, dbMaxPrice = 2000 }) {
  // context provider
  const { categories } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState(dbMaxPrice);
  const [rating, setRating] = useState(0);

  // peice range setter ka max value
  useEffect(() => {
    if (dbMaxPrice && price === 2000) {
      // ← sirf initial load pe
      // eslint-disable-next-line
      setPrice(dbMaxPrice);
    }
    // eslint-disable-next-line
  }, [dbMaxPrice]);

  const handleCategory = (cat) => {
    const newCat = selectedCategory === cat ? undefined : cat;
    setSelectedCategory(newCat);
    onFilterChange({ category: newCat });
  };

  const handlePrice = (val) => {
    setPrice(val);
    onFilterChange({ max_price: val });
  };

  const handleRating = (star) => {
    setRating(star);
    onFilterChange({ rating: star });
  };

  const clearAll = () => {
    setSelectedCategory(null);
    setPrice(dbMaxPrice);
    setRating(0);
    onFilterChange({
      // ✅ sab reset karo
      category: undefined,
      max_price: undefined,
      rating: undefined,
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-6 text-sm font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-gray-900 text-base">Filters</span>
        <button
          onClick={clearAll}
          className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
          Category
        </span>
        {categories.map((cat) => (
          <label
            key={cat.name}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div
              onClick={() => handleCategory(cat.name)}
              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                selectedCategory === cat.name
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-300 group-hover:border-blue-400"
              }`}
            >
              {selectedCategory === cat.name && (
                <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 fill-white">
                  <path
                    d="M1 4l3 3 5-6"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${selectedCategory === cat.name ? "text-gray-900 font-medium" : "text-gray-600"}`}
            >
              {cat.name}
            </span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
          Price Range
        </span>
        <input
          type="range"
          min={0}
          max={dbMaxPrice}
          step={10}
          value={price}
          onChange={(e) => handlePrice(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-600"
          style={{
            background: `linear-gradient(to right, #2563eb ${(price / dbMaxPrice) * 100}%, #e5e7eb ${(price / dbMaxPrice) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>₹0</span>
          <span className="text-blue-600 font-medium">
            ₹{price.toLocaleString()}
          </span>
          <span>₹{dbMaxPrice.toLocaleString()}+</span>
        </div>
      </div>

      {/* Customer Rating */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
          Customer Rating
        </span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => handleRating(star)}>
              <Star
                size={20}
                className={
                  star <= rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-200"
                }
              />
            </button>
          ))}
          <span className="text-gray-500 text-xs ml-1">& Up</span>
        </div>
      </div>
    </div>
  );
}
