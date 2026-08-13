import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Rated", value: "rating" },
];

export default function SortBar({
  sort,
  onSortChange,
  total,
  currentPage,
  limit,
}) {
  const [open, setOpen] = useState(false);

  // showing X-Y of Z results
  const from = total === 0 ? 0 : (currentPage - 1) * limit + 1;
  const to = Math.min(currentPage * limit, total);

  const handleSelect = (option) => {
    onSortChange(option.value); // ✅ parent ko batao
    setOpen(false);
  };

  const currentLabel =
    sortOptions.find((o) => o.value === sort)?.label ?? "Relevance";

  return (
    <div className="relative flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-lg">
      {/* Showing results */}
      <span className="text-sm text-gray-500">
        Showing
        <strong>
          {from}–{to}
        </strong>
        of <strong>{total}</strong> results
      </span>

      {/* Sort dropdown */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-500">Sort by:</span>
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-1 font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {currentLabel}
          <ChevronDown
            size={15}
            className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute top-full left-auto right-16 mt-1 z-20 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-1 overflow-hidden">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  sort === option.value
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
