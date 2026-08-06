// built in imports

// custom imports
import CheckoutStepper from "../components/layout/CheckoutStepper";
import Cart from "../components/layout/Cart";
import OrderSummary from "../components/layout/OrderSummary";
import PaymentMethod from "../components/layout/PaymentMethod";

function ShopPage() {
  return (
    <>
      <section className="bg-slate-50 px-6 py-10">
        <div>
          <CheckoutStepper />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <section className="col-span-2 space-y-5">
            <Cart />
            <PaymentMethod />
          </section>

          <section className="col-span-1">
            <OrderSummary />
          </section>
        </div>
      </section>
    </>
  );
}
export default ShopPage;
