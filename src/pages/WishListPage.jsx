// built in imports

// custom imports
import FlashDeals from "../components/layout/FlashDeals";
import RecentlyViewed from "../components/layout/RecentlyViewed";

export default function WishListPage() {
  return (
    <>
      <section className="bg-slate-50 p-5 md:p-10 space-y-5">
        {/* liked products */}
        <div>
          <FlashDeals title="My Wishlist" />
        </div>

        {/* recent viewed */}
        <div>
          <RecentlyViewed />
        </div>
      </section>
    </>
  );
}
