// built in imports

// custom imports
import TrustedSellersSection from "../components/layout/TrustedSellersSection";
import StatsBar from "../components/layout/StatsBar";
import VerifiedSellers from "../components/layout/VerifiedSellers";

export default function SellerPage() {
  return (
    <>
      <section className="space-y-15 bg-slate-50 px-6 py-10">
        {/* heading */}
        <div>
          <TrustedSellersSection />
        </div>

        {/* StatsBar */}
        <div>
          <StatsBar />
        </div>

        {/* sellers card */}
        <div>
          <VerifiedSellers />
        </div>
      </section>
    </>
  );
}
