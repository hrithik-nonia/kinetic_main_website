// built in imports
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

// custom imports
import SideCard from "../common/SideCard";
import StarRating from "../common/StarRating";

const tabs = ["Best Sellers", "New Arrivals"];

const featuredProduct = {
  badge: "Trending",
  name: "AeroX Pro Drone",
  reviews: 428,
  rating: 5,
  description:
    "Master the skies with our flagship cinematic drone featuring 8K video and AI tracking.",
  price: "$1,299.00",
  colors: ["#1a1a2e", "#9ca3af"],
  image:
    "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&h=700&fit=crop",
};

const sideProducts = [
  {
    id: 1,
    name: "Zen Mist Diffuser",
    rating: 4.9,
    reviews: "1.2k",
    price: "$59.00",
    image:
      "https://images.unsplash.com/photo-1608181831718-c9e4f7e3b5e4?w=400&h=220&fit=crop",
  },
  {
    id: 2,
    name: "Cloud Comfort Blanket",
    rating: 4.8,
    reviews: "890",
    price: "$145.00",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=220&fit=crop",
  },
];

export default function TrendingNow() {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  return (
    <div className=" bg-slate-50 py-5">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
          <div className="flex items-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "text-indigo-600 underline underline-offset-4 decoration-2"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured card — spans 2 cols */}
          <div className="col-span-2 bg-indigo-50 rounded-3xl overflow-hidden flex relative min-h-[520px]">
            {/* Trending badge */}
            <span className="absolute top-4 left-4 z-10 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {featuredProduct.badge}
            </span>

            {/* Product image — left half */}
            <div className="w-1/2 relative">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Details — right half */}
            <div className="w-1/2 flex flex-col justify-center gap-4 p-7">
              {/* Stars */}
              <StarRating
                rating={featuredProduct.rating}
                reviews={featuredProduct.reviews}
              />

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {featuredProduct.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {featuredProduct.description
                  .split("AI tracking")
                  .map((part, i) =>
                    i === 0 ? (
                      <span key={i}>
                        {part}
                        {i === 0 && (
                          <span className="text-indigo-500 font-medium">
                            AI tracking
                          </span>
                        )}
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )}
              </p>

              {/* Price */}
              <p className="text-xl font-bold text-indigo-600">
                {featuredProduct.price}
              </p>

              {/* Color swatches */}
              <div className="flex items-center gap-2">
                {featuredProduct.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedColor === i
                        ? "border-indigo-500 scale-110"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => {
                  setAdded(true);
                  setTimeout(() => setAdded(false), 1500);
                }}
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                <ShoppingCart size={16} />
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>
            </div>
          </div>

          {/* Side products */}
          <div className="col-span-1 flex flex-col gap-4">
            {sideProducts.map((product) => (
              <SideCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
