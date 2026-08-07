const recentlyViewed = [
  {
    id: 1,
    name: "Orb Table Lamp",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=250&fit=crop",
  },
  {
    id: 2,
    name: "Thermal Flask",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=250&fit=crop",
  },
  {
    id: 3,
    name: "Leather Cardholder",
    price: 60.0,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=250&fit=crop",
  },
  {
    id: 4,
    name: "Premium Notebook",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=250&fit=crop",
  },
];

export default function RecentlyViewed() {
  return (
    <div className="bg-slate-50 py-6 px-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Recently Viewed
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {recentlyViewed.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-sm transition-shadow"
          >
            {/* Image */}
            <div className="bg-white p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="px-3 pb-3 pt-1">
              <p className="text-sm text-gray-700">{item.name}</p>
              <p className="text-sm font-semibold text-blue-600 mt-0.5">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
