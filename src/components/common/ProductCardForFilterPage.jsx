// built in imports
import {
  Star,
  CheckCircle,
  ShoppingCart,
  Heart,
  CircleX,
  Trash2,
} from "lucide-react";
import { useLocation } from "react-router-dom";

// custom imports

export default function ProductCardForFilterPage({ item }) {
  // delete icon shows only on wishlist page
  const location = useLocation();
  const showDeleteIcon = location.pathname === "/wishListPage";
  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 duration-300 transition-discrete group">
        {/* image */}
        <div className="relative group">
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-full md:h-64 object-cover duration-500 ease-in-out group-hover:scale-105 transition-transform hover:scale-105 "
          />

          <span className="bg-[#C44D06] text-white px-2 py-0.5 rounded-full text-[10px] absolute top-2 left-2">
            {item.pricing.discount_percent} % OFF
          </span>

          {item.pricing.is_on_sale ? (
            <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-[10px] absolute top-8 left-2">
              ON SALE
            </span>
          ) : (
            ""
          )}

          {/* wishlist and heart icon */}
          {showDeleteIcon ? (
            <span className="p-2 rounded-full bg-slate-50 absolute top-2 right-2 hidden group-hover:flex cursor-pointer">
              <Trash2 className="text-[#C44D06]" strokeWidth={1.5} size={15} />
            </span>
          ) : (
            <span className="p-2 rounded-full bg-slate-50 absolute top-2 right-2 hidden group-hover:flex cursor-pointer">
              <Heart className="text-[#C44D06]" strokeWidth={1.5} size={15} />
            </span>
          )}
        </div>

        {/* text */}
        <div className="p-5 space-y-2">
          <div className="flex justify-between">
            <span
              className={`flex items-center gap-1 ${item.inventory.stock > 0 ? "text-green-500" : "text-[#C44D06]"}`}
            >
              {item.inventory.stock > 0 ? (
                <CheckCircle size={12} />
              ) : (
                <CircleX size={12} />
              )}
              <span className="text-[12px]">{item.brand}</span>
            </span>

            <span className="flex items-center gap-1">
              <Star size={12} className="text-[#B83E00] fill-[#B83E00]" />

              <span className="text-[12px] font-semibold">
                {item.ratings.average}
              </span>
            </span>
          </div>

          <div className="font-[600] cursor-pointer">{item.name}</div>

          <div className="flex justify-between items-center">
            {item.pricing.is_on_sale ? (
              <div>
                <p className="line-through text-[12px] text-gray-600">
                  INR {item.pricing.original_price}
                </p>

                <div className="flex gap-2">
                  <p className="text-gray-600">{item.pricing.currency}</p>

                  <p className="font-[600]">{item.pricing.sale_price}</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <p className="text-gray-600">{item.pricing.currency}</p>

                <p className="font-[600]">{item.pricing.original_price}</p>
              </div>
            )}

            <div className="rounded-lg p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <ShoppingCart strokeWidth={1.3} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
