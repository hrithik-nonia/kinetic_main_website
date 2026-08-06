// built in imports
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Timer } from "lucide-react";

// custom imports
import ProductCard from "../common/ProductCard";
import { Products } from "../../utils/constant";
import UseCountdown from "../common/UseCountdown";
import ProductCardForFilterPage from "../common/ProductCardForFilterPage";
import { ProductDataForFilterPage } from "../../utils/constant";

export default function FlashDeals() {
  const [page, setPage] = useState(0);
  const visibleCount = 4;
  const [hours, minutes, seconds] = UseCountdown(4 * 3600 + 22 * 60 + 19);

  // for timer's conditional randering
  // apply condition randering between home page and new arival page
  const location = useLocation();
  const showHomeContent = location.pathname === "/";

  // Dono ke liye same pagination logic use karo
  const activeData = showHomeContent ? Products : ProductDataForFilterPage;
  const maxPage = Math.ceil(activeData.length / visibleCount) - 1;
  const visible = activeData.slice(
    page * visibleCount,
    page * visibleCount + visibleCount,
  );

  return (
    <>
      <div className="bg-slate-50 py-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 ">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              {showHomeContent ? "Flash Deals" : "Trending This Week"}
            </h2>
            {/* Timer badge */}
            {showHomeContent && (
              <div className="flex items-center gap-1.5 bg-amber-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                <Timer size={14} />
                <span>
                  {hours} : {minutes} : {seconds}
                </span>
              </div>
            )}
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-30 transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
              disabled={page === maxPage}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-30 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map((item) =>
            showHomeContent ? (
              <ProductCard key={item.id} product={item} />
            ) : (
              <ProductCardForFilterPage key={item.id} item={item} />
            ),
          )}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === page ? "bg-indigo-600 w-5" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
