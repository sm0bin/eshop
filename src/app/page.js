import ProductsSection from "./_components/ProductsSection";
import CartSection from "./_components/CartSection";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-2 gap-2 m-2">
        <CartSection />
        <ProductsSection />
      </div>
    </main>
  );
}
