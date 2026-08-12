import { ExternalLink, Store } from "lucide-react";
import { SELLER_APP_URL } from "../utils/constant";

export default function SellerCenter() {
  return (
    <div className="min-h-[70vh] bg-gray-50 font-sans flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 text-center max-w-md w-full shadow-lg space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
          <Store size={32} />
        </div>

        {/* Heading & Desc */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Kinetic Seller Portal
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Manage your store, products, and orders on our dedicated seller
            platform.
          </p>
        </div>

        {/* External Redirect Button */}
        <a
          href={SELLER_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl w-full transition-all shadow-md shadow-blue-200 text-sm"
        >
          Go to Seller Website <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
