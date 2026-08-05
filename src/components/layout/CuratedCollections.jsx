import { ArrowRight } from "lucide-react";

export default function CuratedCollections() {
  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Curated Collections
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Tailored selections for every aspect of your life.
          </p>
        </div>
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 mt-2"
        >
          View All Categories
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[520px]">
        {/* Electronics - large left card */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
          <img
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1200&auto=format&fit=crop"
            alt="Electronics"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-2xl font-semibold mb-1">
              Electronics
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              Precision engineering meets aesthetic design.
            </p>
            <button className="bg-white/90 hover:bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Browse Gear
            </button>
          </div>
        </div>

        {/* Right column: Fashion on top, Home/Beauty below */}
        <div className="grid md:grid-rows-2 grid-rows-1 gap-4 h-full">
          {/* Fashion - top right */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Fashion"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white text-xl font-semibold">Fashion</h3>
              <p className="text-gray-200 text-xs">Essential Wardrobe</p>
            </div>
          </div>

          {/* Bottom row: Home & Living + Health & Beauty */}
          <div className="md:grid grid-cols-2 gap-4 hidden ">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop"
                alt="Home & Living"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-sm font-semibold">
                  Home & Living
                </h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                alt="Health & Beauty"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-sm font-semibold">
                  Health & Beauty
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
