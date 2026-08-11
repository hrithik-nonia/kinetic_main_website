export default function UserStatsBar({ statsData }) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
      {statsData.map(({ key, label, value }) => (
        <div
          key={key}
          className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center py-4 px-2"
        >
          <span className="text-xl font-bold text-blue-600">{label}</span>
          <span className="text-[11px] font-semibold tracking-widest text-blue-400 mt-1 uppercase">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}
