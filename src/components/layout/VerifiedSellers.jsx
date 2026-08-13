// built in imports
import { useContext } from "react";
import { UserContext } from "../../context/AppContext";

// custom imports
import SellerCard from "../common/SellerCard";

export default function VerifiedSellers() {
  // get seller data from context
  const { sellers, isSellerLoading } = useContext(UserContext);

  if (isSellerLoading) return <div>Loading...</div>;
  return (
    <div>
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Verified Sellers
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </div>
  );
}
