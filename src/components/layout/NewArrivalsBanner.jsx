export default function NewArrivalsBanner() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row">
      {/* Left: Text content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          New Arrivals
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xs">
          Discover the newest products added this week. Curated selections for
          the modern lifestyle, focusing on quality and minimal design.
        </p>
        <button className="mt-6 w-fit px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors">
          Explore Collection
        </button>
      </div>

      {/* Right: Image */}
      <div className="w-full sm:w-[45%] h-56 sm:h-auto flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop"
          alt="New Arrivals"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
