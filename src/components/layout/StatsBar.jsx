const stats = [
  { value: "5k+", label: "TOTAL SELLERS" },
  { value: "98%", label: "VERIFIED" },
  { value: "2M+", label: "PRODUCTS LISTED" },
  { value: "10M+", label: "ORDERS DELIVERED" },
];

export default function StatsBar() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center py-6 px-4 
              ${i !== stats.length - 1 ? "border-r border-slate-200" : ""}`}
          >
            <span className="text-2xl sm:text-3xl font-bold text-blue-600">
              {stat.value}
            </span>
            <span className="mt-1 text-[11px] font-semibold tracking-widest text-blue-400 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
