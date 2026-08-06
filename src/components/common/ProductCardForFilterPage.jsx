// built in imports
import { Star, CheckCircle, ShoppingCart, Heart, CircleX } from "lucide-react";

// custom imports

export default function ProductCardForFilterPage({ item }) {
  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 duration-300 transition-discrete group">
        {/* image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
            alt="img"
            className="w-full md:h-64 object-cover duration-500 ease-in-out group-hover:scale-105 transition-transform hover:scale-105 "
          />

          <span className="bg-[#C44D06] text-white px-2 py-0.5 rounded-full text-[10px] absolute top-2 left-2">
            {item.badge1}
          </span>

          <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-[10px] absolute top-8 left-2">
            {item.badge2}
          </span>

          <span className="p-2 rounded-full bg-slate-50 absolute top-2 right-2 hidden group-hover:flex cursor-pointer">
            <Heart className="text-[#C44D06]" strokeWidth={1.5} size={15} />
          </span>
        </div>

        {/* text */}
        <div className="p-5 space-y-2">
          <div className="flex justify-between">
            <span
              className={`flex items-center gap-1 ${item.isBrandVerified ? "text-green-500" : "text-[#C44D06]"}`}
            >
              {item.isBrandVerified ? (
                <CheckCircle size={12} />
              ) : (
                <CircleX size={12} />
              )}
              <span className="text-[12px]">{item.brand}</span>
            </span>

            <span className="flex items-center gap-1">
              <Star size={12} className="text-[#B83E00] fill-[#B83E00]" />

              <span className="text-[12px] font-semibold">{item.rating}</span>
            </span>
          </div>

          <div className="font-[600] cursor-pointer">{item.title}</div>

          <div className="flex justify-between items-center">
            <div>
              <p className="line-through text-[12px] text-gray-600">
                ${item.originalPrice}
              </p>

              <p className="font-[600]">${item.currentPrice}</p>
            </div>

            <div className="rounded-lg p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <ShoppingCart strokeWidth={1.3} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
