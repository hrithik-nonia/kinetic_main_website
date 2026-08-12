import { useState } from "react";
import { DollarSign, Share2, Award } from "lucide-react";

export default function AffiliateProgram() {
  const [sales, setSales] = useState(50);
  const estimatedEarnings = Math.round(sales * 75 * 0.08); // avg order $75 at 8% commission

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
          <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            EARN UP TO 10% COMMISSION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Join the Kinetic Affiliate Partner Network
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
            Promote products you love and earn steady passive income on every
            successful referral.
          </p>
        </div>

        {/* Earnings Calculator */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Estimate Your Monthly Earnings
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-semibold text-gray-700">
              <span>Estimated Sales Per Month: {sales} orders</span>
              <span className="text-blue-600 font-bold text-lg">
                ${estimatedEarnings} / mo
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              value={sales}
              onChange={(e) => setSales(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: Share2,
              title: "Custom Link Generator",
              desc: "Create unique referral links for any product instantly.",
            },
            {
              icon: DollarSign,
              title: "30-Day Cookie Window",
              desc: "Get paid even if the user buys 30 days after clicking.",
            },
            {
              icon: Award,
              title: "Dedicated Partner Support",
              desc: "Get marketing banners and 1-on-1 assistance.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3"
            >
              <b.icon className="text-blue-600" size={28} />
              <h4 className="font-bold text-gray-900">{b.title}</h4>
              <p className="text-xs text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
