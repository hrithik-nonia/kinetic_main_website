const ratings = [
  { star: 5, pct: 85 },
  { star: 4, pct: 10 },
  { star: 3, pct: 3 },
  { star: 2, pct: 1 },
  { star: 1, pct: 1 },
];

const galleryImgs = [
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=160&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=160&fit=crop",
  "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=200&h=160&fit=crop",
];

const reviews = [
  {
    initials: "JD",
    name: "Jordan D.",
    stars: 5,
    date: "2 days ago",
    text: `"Unbelievable sound quality for the price. The noise cancellation is on par with the biggest brands in the industry. Highly recommended for daily commuters!"`,
  },
];

export default function CustomerFeedback() {
  return (
    <div>
      <p className="text-sm text-blue-600 font-medium mb-3">
        Customer Feedback
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-gray-50 rounded-2xl p-4">
        {/* LEFT: rating */}
        <div className="md:border-r md:border-gray-200 pr-5 md:col-span-1">
          <div className="text-center mb-4">
            <p className="text-5xl font-semibold leading-none">4.8</p>
            <div className="text-amber-400 text-lg my-1">
              ★★★★<span className="text-gray-300">★</span>
            </div>
            <p className="text-xs text-gray-400">Based on 1,248 reviews</p>
          </div>
          <div className="space-y-1.5">
            {ratings.map(({ star, pct }) => (
              <div
                key={star}
                className="flex items-center gap-2 text-xs text-gray-400"
              >
                <span className="w-2">{star}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-800 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-7 text-right">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2">
          <p className="text-[11px] font-semibold tracking-widest text-orange-800 mb-2">
            CUSTOMER GALLERY
          </p>
          <div className="flex gap-2.5 mb-4">
            {galleryImgs.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-24 h-20 object-cover rounded-xl cursor-pointer hover:opacity-85 transition-opacity"
              />
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-4 bg-white">
            {reviews.map((r) => (
              <div key={r.name}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white text-xs font-medium flex items-center justify-center flex-shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{r.name}</p>
                      <span className="text-amber-400 text-xs">
                        {"★".repeat(r.stars)}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
