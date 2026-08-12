import { Truck, Clock, CheckCircle2 } from "lucide-react";

export default function ShippingInfo() {
  const options = [
    {
      title: "Standard Delivery",
      time: "3 - 5 Business Days",
      cost: "Free on orders over $50",
      badge: "Most Popular",
    },
    {
      title: "Express Delivery",
      time: "1 - 2 Business Days",
      cost: "$5.99 Flat Rate",
      badge: "Fastest",
    },
    {
      title: "International Shipping",
      time: "7 - 14 Business Days",
      cost: "Calculated at Checkout",
      badge: "Worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Shipping & <span className="text-blue-600">Delivery Info</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Fast, reliable, and transparent shipping rates across the globe.
          </p>
        </div>

        {/* Shipping Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {opt.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{opt.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" /> {opt.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck size={16} className="text-blue-600" /> {opt.cost}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Shipping Policy */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Shipping Policies & Guidelines
          </h2>

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <p>
                <strong>Order Dispatch:</strong> All orders placed before 2:00
                PM EST are dispatched on the same business day.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <p>
                <strong>Tracking Information:</strong> Once dispatched, you will
                receive an SMS and email with a live tracking link.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <p>
                <strong>Customs & Duties:</strong> For international shipping,
                any applicable local customs fees are calculated transparently
                during checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
