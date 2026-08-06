import { useState } from "react";
import { Heart, Share2, ShoppingBag, CheckCircle, Store } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=400&h=300&fit=crop",
];

const colors = [
  { name: "OBSIDIAN GRAY", bg: "bg-gray-800" },
  { name: "PEARL WHITE", bg: "bg-gray-200 border border-gray-300" },
  { name: "OCEAN BLUE", bg: "bg-blue-600" },
];

const sizes = ["Standard", "Large"];

export default function ProductDetail() {
  const [activeImg, setActiveImg] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* LEFT */}
      <div className="h-full">
        <div className="relative rounded-xl overflow-hidden bg-white">
          <img
            src={images[activeImg]}
            className="w-full object-cover transition-transform hover:scale-105 duration-300"
            alt="product"
          />
          <button
            onClick={() => setWished(!wished)}
            className="absolute top-2.5 right-2.5 bg-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <Heart
              size={16}
              className={wished ? "fill-red-500 text-red-500" : "text-gray-400"}
            />
          </button>
          <button className="absolute top-12 right-2.5 bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <Share2 size={14} className="text-gray-400" />
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.replace("400&h=300", "80&h=80")}
              onClick={() => setActiveImg(i)}
              className={`w-14 h-14 object-cover rounded-lg cursor-pointer border-2 ${activeImg === i ? "border-blue-500" : "border-transparent"}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-3">
        <span className="bg-teal-100 text-teal-800 text-[11px] font-medium px-3 py-0.5 rounded-full w-fit">
          New Arrival
        </span>

        <div>
          <p className="font-semibold text-base">Aero-X Wireless Pro</p>
          <div className="flex items-center gap-2 text-xs mt-1">
            <span className="text-amber-400">★★★★</span>
            <span className="text-gray-300">★</span>
            <span className="font-medium">4.8</span>
            <span className="text-gray-400">(1.2k Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-blue-600 flex items-center gap-1">
              <CheckCircle size={11} /> Verified Vendor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">$299.00</span>
          <span className="line-through text-gray-400">$349.00</span>
          <span className="text-orange-700 font-medium">Save 15%</span>
        </div>

        {/* Color */}
        <div>
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1.5">
            Select Color:{" "}
            <span className="text-gray-800">{colors[activeColor].name}</span>
          </p>
          <div className="flex gap-2">
            {colors.map((c, i) => (
              <div
                key={i}
                onClick={() => setActiveColor(i)}
                className={`w-7 h-7 rounded-full cursor-pointer ${c.bg} ${activeColor === i ? "ring-2 ring-blue-400 ring-offset-2" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div>
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1.5">
            Headband Size:
          </p>
          <div className="flex gap-2">
            {sizes.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSize(i)}
                className={`px-4 py-1.5 rounded-lg text-xs border transition-all
                    ${activeSize === i ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 hover:border-blue-400"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Qty */}
        <div className="flex items-center gap-3">
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">
            Quantity:
          </p>
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 bg-white">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="text-gray-500 hover:text-black"
            >
              −
            </button>
            <span className="text-sm w-4 text-center">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="text-gray-500 hover:text-black"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-1.5">
            <ShoppingBag size={14} /> Add to Cart
          </button>
          <button className="flex-1 bg-[#b84000] hover:bg-[#a03800] text-white rounded-xl py-3 text-sm font-medium">
            Buy Now
          </button>
        </div>

        {/* Seller */}
        <div className="border border-gray-200 rounded-xl p-3">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <Store size={14} className="text-teal-700" />
              </div>
              <div>
                <p className="text-xs font-medium">Kinetic Official Store</p>
                <p className="text-[11px] text-blue-600 flex items-center gap-1">
                  <CheckCircle size={10} /> Verified Elite Seller
                </p>
              </div>
            </div>
            <a href="#" className="text-xs text-blue-600 font-medium">
              Visit Store
            </a>
          </div>
          <div className="flex border-t border-gray-100 pt-2">
            {[
              ["4.9/5", "Rating"],
              ["15k+", "Followers"],
              ["42", "Products"],
            ].map(([val, label]) => (
              <div
                key={label}
                className="flex-1 text-center border-r border-gray-100 last:border-0"
              >
                <p className="text-sm font-semibold">{val}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
