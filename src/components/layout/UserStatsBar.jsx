const stats = [
  { value: "42", label: "TOTAL ORDERS" },
  { value: "18", label: "WISHLIST ITEMS" },
  { value: "7", label: "PRODUCT REVIEWS" },
  { value: "1,250", label: "REWARD POINTS" },
];

export default function UserStatsBar() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center py-4 px-2"
        >
          <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
          <span className="text-[11px] font-semibold tracking-widest text-blue-400 mt-1 uppercase">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
