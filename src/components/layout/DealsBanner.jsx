import { useState, useEffect } from "react";

const TARGET_SECONDS = 12 * 3600 + 43 * 60 + 18; // initial time

export default function DealsBanner() {
  const [timeLeft, setTimeLeft] = useState(TARGET_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-gray-200 overflow-hidden bg-white">
      {/* LEFT */}
      <div className="px-8 py-7 flex flex-col justify-center">
        <p className="text-[11px] font-semibold text-blue-600 tracking-widest mb-2">
          LIMITED TIME EVENT
        </p>
        <h2 className="text-3xl font-bold mb-5 leading-tight">
          Today's Best Deals
        </h2>

        {/* Countdown */}
        <div className="flex items-center gap-2">
          {[
            { val: hrs, label: "HRS" },
            { val: mins, label: "MIN" },
            { val: secs, label: "SEC" },
          ].map(({ val, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="bg-gray-100 border border-gray-200 rounded-lg px-3.5 py-2 text-center min-w-[52px]">
                <p className="text-xl font-semibold leading-none">{val}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 tracking-wide">
                  {label}
                </p>
              </div>
              {i < 2 && (
                <span className="text-xl font-semibold text-gray-300 mb-3">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <button className="mt-5 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          Shop Now
        </button>
      </div>

      {/* RIGHT */}
      <div className="overflow-hidden max-h-70">
        <img
          src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=300&fit=crop"
          className="w-full h-full object-cover"
          alt="Deals"
        />
      </div>
    </div>
  );
}
