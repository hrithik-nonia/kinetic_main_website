import { useState } from "react";
import { ChevronDown, LayoutGrid, List } from "lucide-react";

const sortOptions = [
  "Relevance",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
  "Best Rated",
];

export default function SortBar({ onViewChange }) {
  const [sort, setSort] = useState("Relevance");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("grid");

  const handleSelect = (option) => {
    setSort(option);
    setOpen(false);
  };

  const handleView = (v) => {
    setView(v);
    onViewChange?.(v);
  };

  return (
    <div className="relative flex items-center justify-between w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg">
      {/* Sort dropdown */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-500">Sort by:</span>
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-1 font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {sort}
          <ChevronDown
            size={15}
            className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute top-full left-4 mt-1 z-20 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-1 overflow-hidden">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  sort === option
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* View toggle */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleView("grid")}
          aria-label="Grid view"
          className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
            view === "grid"
              ? "bg-blue-600 text-white"
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`}
        >
          <LayoutGrid size={16} />
        </button>
        <button
          onClick={() => handleView("list")}
          aria-label="List view"
          className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
            view === "list"
              ? "bg-blue-600 text-white"
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`}
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}
