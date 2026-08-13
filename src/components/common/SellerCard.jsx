// built in imports
import { BadgeCheck, Users, Star } from "lucide-react";

// custom imports

function SellerCard({ seller }) {
  console.log(seller);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-md transition-shadow duration-200 w-full">
      {/* Logo + verified badge */}
      <div className="relative">
        <div
          className={`w-20 h-20 rounded-2xl ${seller.logoBg} flex items-center justify-center overflow-hidden border border-gray-100`}
        >
          <img
            src={seller.logo}
            alt={seller.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/* Verified tick */}
        {seller.is_verified ? (
          <span className="absolute -bottom-1.5 -right-1.5 bg-white rounded-full p-0.5 shadow">
            <BadgeCheck
              size={18}
              className="text-teal-500 fill-teal-500"
              style={{ color: "white" }}
            />
          </span>
        ) : (
          ""
        )}
      </div>

      {/* Name & category */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-gray-800">{seller.initials}</h3>
        <p className="text-xs text-indigo-500 font-medium mt-0.5">
          {seller.category}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100" />

      {/* Stats */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-sm font-bold text-gray-800">
            {seller.followers}
          </span>
          <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase flex items-center gap-1">
            <Users size={9} />
            Followers
          </span>
        </div>

        {/* Vertical divider */}
        <div className="w-px h-8 bg-gray-100" />

        <div className="flex flex-col items-center gap-0.5">
          <span className="text-sm font-bold text-gray-800">
            {seller.rating}
          </span>
          <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase flex items-center gap-1">
            <Star size={9} />
            Rating
          </span>
        </div>
      </div>

      {/* Visit Store */}
      <button className="text-sm text-indigo-500 font-semibold hover:text-indigo-700 hover:underline transition-colors mt-1">
        Visit Store
      </button>
    </div>
  );
}

export default SellerCard;
