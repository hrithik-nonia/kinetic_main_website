// built in imports

// custom imports
import HeroSection from "../components/layout/HeroSection";
import CuratedCollections from "../components/layout/CuratedCollections";

function HomePage() {
  return (
    <section>
      {/* hero section s1 */}
      <section>
        <HeroSection />
      </section>

      <section className=" px-6 py-10">
        {/* gallery */}
        <section>
          <CuratedCollections />
        </section>

        {/* first product section */}
        <section></section>

        {/* best sellers list */}
        <section></section>

        {/* tranding products */}
        <section></section>

        {/* register for notification for best deal */}
        <section></section>
      </section>
    </section>
  );
}
export default HomePage;
