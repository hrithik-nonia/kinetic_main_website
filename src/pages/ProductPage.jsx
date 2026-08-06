// built in imports

// custom imports
import Breadcrumb from "../components/common/Breadcrumb";
import ProductDetail from "../components/layout/ProductDetail";
import ProductTabs from "../components/layout/ProductTabs";
import CustomerFeedback from "../components/layout/CustomerFeedback";
import FlashDeals from "../components/layout/FlashDeals";

function ProductPage() {
  return (
    <>
      <section className="px-6 py-10 bg-slate-50 space-y-5">
        {/* bread crumb */}
        <div>
          <Breadcrumb />
        </div>

        <section className="space-y-15">
          {/* selected product */}
          <section>
            {/* product detail */}
            <ProductDetail />
          </section>

          {/* about product description */}
          <section>
            <ProductTabs />
          </section>

          {/* customer feedback */}
          <section>
            <CustomerFeedback />
          </section>

          {/* related products */}
          <section>
            <FlashDeals />
          </section>
        </section>
      </section>
    </>
  );
}
export default ProductPage;
