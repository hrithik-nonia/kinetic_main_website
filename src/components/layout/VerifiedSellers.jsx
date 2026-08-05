// built in imports

// custom imports
import SellerCard from "../common/SellerCard";
import { Sellers } from "../../utils/constant";

export default function VerifiedSellers() {
  return (
    <div>
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Verified Sellers
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Sellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </div>
  );
}
