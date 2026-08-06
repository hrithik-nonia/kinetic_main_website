import { useState } from "react";
import { CreditCard, Lock, Wallet } from "lucide-react";

const methods = [
  {
    id: "cc",
    label: "Credit Card",
    icon: <CreditCard size={22} />,
    color: "text-blue-500",
  },
  {
    id: "pp",
    label: "PayPal",
    icon: <Wallet size={22} />,
    color: "text-teal-600",
  },
  {
    id: "dw",
    label: "Digital Wallet",
    icon: <Wallet size={22} />,
    color: "text-orange-600",
  },
];

const inputCls =
  "w-full bg-gray-100 rounded-xl px-3.5 py-3 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400";

export default function PaymentMethod() {
  const [active, setActive] = useState("cc");
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const formatCard = (val) =>
    val
      .replace(/\D/g, "")
      .substring(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (val) => {
    const v = val.replace(/\D/g, "").substring(0, 4);
    return v.length >= 3 ? v.substring(0, 2) + "/" + v.substring(2) : v;
  };

  return (
    <div className=" bg-white rounded-2xl border border-gray-200 p-5 hover:shadow">
      <h2 className="text-base font-semibold mb-4">Payment Method</h2>

      {/* Method selector */}
      <div className="flex gap-2.5 mb-5">
        {methods.map(({ id, label, icon, color }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex-1 flex flex-col items-center gap-1.5 py-3.5 rounded-xl border text-[12px] font-medium transition-all
              ${
                active === id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 text-gray-500 hover:border-gray-400"
              }`}
          >
            <span className={active === id ? "text-blue-500" : color}>
              {icon}
            </span>
            {label}
          </button>
        ))}
      </div>

      {/* Credit Card Form */}
      {active === "cc" && (
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-1.5 block">
              Cardholder Name
            </label>
            <input
              className={inputCls}
              placeholder="John Doe"
              value={card.name}
              onChange={(e) => setCard({ ...card, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1.5 block">
              Card Number
            </label>
            <div className="relative">
              <Lock
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                className={`${inputCls} pl-9`}
                placeholder="0000 0000 0000 0000"
                value={card.number}
                onChange={(e) =>
                  setCard({ ...card, number: formatCard(e.target.value) })
                }
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1.5 block">
                Expiry Date
              </label>
              <input
                className={inputCls}
                placeholder="MM/YY"
                value={card.expiry}
                onChange={(e) =>
                  setCard({ ...card, expiry: formatExpiry(e.target.value) })
                }
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1.5 block">CVV</label>
              <input
                className={inputCls}
                placeholder="123"
                type="password"
                maxLength={4}
                value={card.cvv}
                onChange={(e) => setCard({ ...card, cvv: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {active === "pp" && (
        <div className="text-center py-6 text-gray-400 text-sm">
          You'll be redirected to PayPal to complete payment.
        </div>
      )}
      {active === "dw" && (
        <div className="text-center py-6 text-gray-400 text-sm">
          Use Apple Pay, Google Pay, or any saved wallet.
        </div>
      )}
    </div>
  );
}
