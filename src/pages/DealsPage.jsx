// built in imports

// custom imports
import DealsBanner from "../components/layout/DealsBanner";
import FilterPills from "../components/layout/FilterPills";
import FlashDeals from "../components/layout/FlashDeals";
import NewsletterBanner from "../components/layout/NewsletterBannerForDealPage";

export default function DealPage() {
  return (
    <>
      <section className="bg-slate-50 p-6 space-y-10">
        {/* deals banner */}
        <section>
          <DealsBanner />
        </section>

        {/* tool bar */}
        <section>
          <FilterPills />
        </section>

        {/* deal products */}
        <section>
          <FlashDeals />
        </section>

        {/* a form for deal notification */}
        <section>
          <NewsletterBanner />
        </section>
      </section>
    </>
  );
}
