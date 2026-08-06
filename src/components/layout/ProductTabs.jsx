import { useState } from "react";
import { CheckCircle, Truck, Zap, RefreshCw } from "lucide-react";

const tabs = ["Description", "Specifications", "Shipping & Returns"];

const specs = [
  ["Driver Size", "40mm custom-built"],
  ["Battery Life", "40 hours (ANC on)"],
  ["Charging", "USB-C, fast charge (10 min = 3 hrs)"],
  ["Connectivity", "Bluetooth 5.3, multipoint"],
  ["Weight", "249g"],
  ["Noise Cancellation", "Hybrid Active ANC"],
];

export default function ProductTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab headers */}
      <div className="flex border-b border-gray-200 mb-5">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`mr-6 pb-2.5 text-sm border-b-2 transition-colors
              ${
                active === i
                  ? "border-blue-500 text-blue-600 font-medium"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Description */}
      {active === 0 && (
        <div className="flex gap-7 items-start flex-col md:flex-row ">
          <div className="flex-1">
            <p className="font-medium text-[15px] mb-3">
              Experience pure audio bliss.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              The Aero-X Wireless Pro redefined industry standards with hybrid
              active noise cancellation and spatial audio processing. Engineered
              with custom-built 40mm drivers, these headphones deliver pristine
              highs and deep, undistorted bass.
            </p>
            {[
              "40-hour battery life with fast charging",
              "Seamless multi-device switching",
              "Eco-friendly sustainable packaging",
            ].map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-sm text-blue-600 mt-2"
              >
                <CheckCircle
                  size={14}
                  className="text-teal-500 flex-shrink-0"
                />
                {f}
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 md:w-64 ">
            <img
              src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=260&fit=crop"
              className="w-full rounded-xl object-cover"
              alt="Woman with headphones"
            />
          </div>
        </div>
      )}

      {/* Specifications */}
      {active === 1 && (
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-100">
            {specs.map(([label, value]) => (
              <tr key={label}>
                <td className="py-2.5 text-gray-400 w-2/5">{label}</td>
                <td className="py-2.5 text-gray-800">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Shipping */}
      {active === 2 && (
        <div className="text-sm space-y-3">
          {[
            {
              icon: <Truck size={14} />,
              title: "Free standard shipping",
              desc: "delivered in 5–7 business days",
            },
            {
              icon: <Zap size={14} />,
              title: "Express shipping",
              desc: "2 business days for $9.99",
            },
            {
              icon: <RefreshCw size={14} />,
              title: "30-day returns",
              desc: "free returns on all orders",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-center gap-2 text-blue-600">
              <span className="text-teal-500">{icon}</span>
              <span className="font-medium text-gray-800">{title}</span>
              <span className="text-gray-400">— {desc}</span>
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-4">
            Items ship within 1 business day. Tracking info sent via email once
            dispatched.
          </p>
        </div>
      )}
    </div>
  );
}
