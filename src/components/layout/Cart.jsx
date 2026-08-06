import { useState } from "react";
import { CheckCircle, Trash2 } from "lucide-react";

const initialItems = [
  {
    id: 1,
    name: "Matte Artisan Pour-Over Set",
    seller: "Artisan Studio",
    price: 85,
    qty: 1,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "SonicFlow Wireless Headphones",
    seller: "TechHub Global",
    price: 299,
    qty: 1,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop",
  },
  {
    id: 3,
    name: "Eco-Canvas Forest Tote",
    seller: "GreenLeaf Goods",
    price: 42,
    qty: 1,
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=80&h=80&fit=crop",
  },
];

export default function Cart() {
  const [items, setItems] = useState(initialItems);

  const changeQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow">
      <h2 className="text-xl font-semibold mb-4">Your Cart ({items.length})</h2>

      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 py-5">
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="font-medium text-[15px]">{item.name}</p>
              <p className="text-[12px] text-green-600 flex items-center gap-1 mt-0.5 mb-3">
                <CheckCircle size={12} /> Sold by {item.seller}
              </p>

              {/* Qty control */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-full w-fit px-3 py-1">
                <button
                  onClick={() => changeQty(item.id, -1)}
                  className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-black"
                >
                  −
                </button>
                <span className="text-sm w-4 text-center">{item.qty}</span>
                <button
                  onClick={() => changeQty(item.id, 1)}
                  className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-black"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price + Remove */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span className="text-blue-600 font-medium text-[15px]">
                ${(item.price * item.qty).toFixed(2)}
              </span>
              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center gap-1 text-red-500 text-[13px] hover:opacity-70"
              >
                <Trash2 size={13} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
