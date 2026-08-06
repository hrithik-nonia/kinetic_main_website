// built in imports

// custom imports
import Breadcrumb from "../components/common/Breadcrumb";
import FiltersSidebar from "../components/layout/FiltersSidebar";
import SortBar from "../components/layout/SortBar";
import ProductCatelog from "../components/layout/ProductCatelog";

function FilterPage() {
  return (
    <section className="bg-slate-50 px-6 py-10">
      {/* heading */}
      <div>
        <Breadcrumb />
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-5">
        {/* side bar */}
        <div className="lg:col-span-1">
          <FiltersSidebar />
        </div>

        {/* product section */}
        <div className="lg:col-span-4">
          {/* filter tool bar */}
          <div>
            <SortBar />
          </div>

          {/* product card */}
          <div className="mt-5">
            <ProductCatelog />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FilterPage;
