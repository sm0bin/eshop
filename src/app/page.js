import Image from "next/image";
import ProductsSection from "./_components/ProductsSection";
import CartSection from "./_components/CartSection";

export default function Home() {
  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/location", label: "Location" },
    { href: "/invoices", label: "POS Invoices" },
    { href: "/settings", label: "Settings" },
  ];

  const navLinksMarkup = navLinks.map(({ href, label }) => {
    return (
      <li key={href}>
        <a href={href}>{label}</a>
      </li>
    );
  });

  return (
    <main className="">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="grid grid-cols-2">
            <CartSection />
            <ProductsSection />
          </div>
          <h1>Home</h1>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <figure className="w-full min-h-28">
              <Image src="/shop-local.svg" className="mx-auto mt-8" alt="logo" width={100} height={100} />
            </figure>
            {navLinksMarkup}
          </ul>
        </div>
      </div>
    </main>
  );
}
