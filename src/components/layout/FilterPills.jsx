import { useState } from "react";

const filters = [
  "Flash Sale",
  "Limited Time",
  "Clearance",
  "Weekend Offers",
  "Tech Gadgets",
  "Home Goods",
];

export default function FilterPills({ onChange }) {
  const [active, setActive] = useState("Flash Sale");

  const handleSelect = (filter) => {
    setActive(filter);
    onChange?.(filter); // parent ko bhi batao
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => handleSelect(f)}
          className={`px-4 py-2 rounded-full text-sm border transition-all
            ${
              active === f
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700"
            }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
