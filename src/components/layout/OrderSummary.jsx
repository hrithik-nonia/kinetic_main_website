import { useState } from "react";
import { ShieldCheck, Lock, Truck } from "lucide-react";

export default function OrderSummary() {
  const [promoCode, setPromoCode] = useState("KINETIC10");
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState(null);

  const subtotal = 426.0;
  const shipping = 0;
  const taxes = 34.08;
  const total = (subtotal + shipping + taxes - discount).toFixed(2);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "KINETIC10" && discount === 0) {
      const disc = (subtotal + taxes) * 0.1;
      setDiscount(disc);
      setPromoMsg({ text: "10% discount applied!", color: "text-green-600" });
    } else if (discount > 0) {
      setPromoMsg({ text: "Promo already applied.", color: "text-gray-500" });
    } else {
      setPromoMsg({ text: "Invalid promo code.", color: "text-red-500" });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow">
      <h2 className="text-base font-semibold mb-4">Order Summary</h2>

      {/* Line items */}
      <div className="space-y-2 pb-4 border-b border-gray-100 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="text-gray-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Estimated Taxes</span>
          <span className="text-gray-800">${taxes.toFixed(2)}</span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="py-4">
        <label className="text-xs text-gray-500 mb-1.5 block">Promo Code</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <button
            onClick={applyPromo}
            className="bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-200"
          >
            Apply
          </button>
        </div>
        {promoMsg && (
          <p className={`text-xs mt-1.5 ${promoMsg.color}`}>{promoMsg.text}</p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
        <span className="text-base font-semibold">Total</span>
        <span className="text-2xl font-semibold text-blue-600">${total}</span>
      </div>

      {/* CTA */}
      <button className="w-full bg-[#b84000] hover:bg-[#a03800] text-white font-medium py-3.5 rounded-xl text-sm transition-colors">
        Complete Purchase
      </button>

      <p className="text-[11px] text-gray-400 text-center mt-3 mb-4 leading-relaxed">
        By placing your order, you agree to our{" "}
        <a href="#" className="text-blue-500 underline">
          Terms of Service
        </a>
        .
      </p>

      {/* Trust badges */}
      <div className="border-t border-gray-100 pt-3 flex justify-center gap-5 flex-wrap">
        {[
          { icon: <ShieldCheck size={13} />, label: "Secure" },
          { icon: <Lock size={13} />, label: "SSL Encrypted" },
          { icon: <Truck size={13} />, label: "Tracked" },
        ].map(({ icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1 text-[11px] text-gray-400"
          >
            {icon} {label}
          </span>
        ))}
      </div>
    </div>
  );
}
