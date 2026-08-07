const orders = [
  {
    id: "ORD-9021",
    name: "Noise-Cancelling Headphones Pro",
    date: "Oct 24",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: "ORD-8854",
    name: "Smart Fitness Watch Series 4",
    date: "Oct 12",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
  },
  {
    id: "ORD-8110",
    name: "Minimalist Ceramic Mug Set",
    date: "Sep 28",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=100&h=100&fit=crop",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Recent Orders</h2>
        <button className="text-sm font-medium text-blue-500 hover:underline">
          View All
        </button>
      </div>

      {/* Orders list */}
      <div className="flex flex-col divide-y divide-gray-100">
        {orders.map((order) => (
          <div key={order.id} className="py-3 flex items-start gap-3">
            {/* Image */}
            <img
              src={order.image}
              alt={order.name}
              className="w-12 h-12 rounded-lg object-cover shrink-0 bg-gray-100"
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-gray-800 leading-tight">
                  {order.name}
                </p>
                <span className="text-xs text-gray-400 shrink-0">
                  {order.date}
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-0.5">#{order.id}</p>

              <div className="flex items-center justify-between mt-1.5">
                <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                  {order.status}
                </span>
                <button className="text-xs text-blue-500 font-medium hover:underline">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
