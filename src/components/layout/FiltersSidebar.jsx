import { useState } from "react";
import { Zap, Truck, Star } from "lucide-react";

const categories = ["Audio & Headphones", "Smart Home", "Computers"];

const shippingOptions = [
  { label: "Express", icon: Zap, iconColor: "text-yellow-500" },
  { label: "Standard", icon: Truck, iconColor: "text-blue-600" },
];

export default function FiltersSidebar() {
  const [selectedCategories, setSelectedCategories] = useState([
    "Audio & Headphones",
  ]);
  const [price, setPrice] = useState(400);
  const [rating, setRating] = useState(4);
  const [shipping, setShipping] = useState("Standard");

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setPrice(0);
    setRating(0);
    setShipping(null);
  };

  return (
    <div className=" bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-6 text-sm font-sans">
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
        {categories.map((cat) => {
          const checked = selectedCategories.includes(cat);
          return (
            <label
              key={cat}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div
                onClick={() => toggleCategory(cat)}
                className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                  checked
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300 group-hover:border-blue-400"
                }`}
              >
                {checked && (
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
                className={`text-sm ${checked ? "text-gray-900 font-medium" : "text-gray-600"}`}
              >
                {cat}
              </span>
            </label>
          );
        })}
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
          Price Range
        </span>
        <input
          type="range"
          min={0}
          max={2000}
          step={10}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-600 bg-gray-200"
          style={{
            background: `linear-gradient(to right, #2563eb ${(price / 2000) * 100}%, #e5e7eb ${(price / 2000) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>$0</span>
          <span className="text-blue-600 font-medium">
            ${price.toLocaleString()}
          </span>
          <span>$2000+</span>
        </div>
      </div>

      {/* Customer Rating */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
          Customer Rating
        </span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              aria-label={`${star} star`}
            >
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

      {/* Shipping Speed */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-800 text-xs uppercase tracking-wide">
          Shipping Speed
        </span>
        {shippingOptions.map(({ label, icon: Icon, iconColor }) => {
          const selected = shipping === label;
          return (
            <button
              key={label}
              onClick={() => setShipping(label)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg border transition-colors ${
                selected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon size={15} className={iconColor} />
                <span
                  className={`text-sm font-medium ${selected ? "text-blue-700" : "text-gray-700"}`}
                >
                  {label}
                </span>
              </div>
              {/* Radio dot */}
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selected ? "border-blue-600" : "border-gray-300"
                }`}
              >
                {selected && (
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
