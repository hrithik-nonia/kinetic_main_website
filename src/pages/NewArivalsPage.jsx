// built in imports
import { useLocation } from "react-router-dom";

// custom imports
import NewArrivalsBanner from "../components/layout/NewArrivalsBanner";
import FlashDeals from "../components/layout/FlashDeals";

export default function NewArivalsPage() {
  const location = useLocation();
  return (
    <>
      <section className="bg-slate-50 p-6 space-y-10">
        {/* hero section */}
        <div>
          <NewArrivalsBanner />
        </div>

        {/* new product */}
        <div>
          <FlashDeals key={location.pathname} />
        </div>
      </section>
    </>
  );
}
