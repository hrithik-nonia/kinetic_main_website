// built in imports
import { useLocation } from "react-router-dom";

// custom imports
import HeroSection from "../components/layout/HeroSection";
import CuratedCollections from "../components/layout/CuratedCollections";
import FlashDeals from "../components/layout/FlashDeals";
import VerifiedSellers from "../components/layout/VerifiedSellers";
import TrendingNow from "../components/layout/TrendingNow";
import NewsletterBanner from "../components/layout/NewsletterBanner";

function HomePage() {
  const location = useLocation();
  return (
    <section>
      {/* hero section s1 */}
      <section>
        <HeroSection />
      </section>

      <section className=" px-6 py-10 flex flex-col gap-10">
        {/* gallery */}
        <section>
          <CuratedCollections />
        </section>

        {/* first product section */}
        <section>
          <FlashDeals key={location.pathname} />
        </section>

        {/* best sellers list */}
        <section>
          <VerifiedSellers />
        </section>

        {/* tranding products */}
        <section>
          <TrendingNow />
        </section>

        {/* register for notification for best deal */}
        <section>
          <NewsletterBanner />
        </section>
      </section>
    </section>
  );
}
export default HomePage;
