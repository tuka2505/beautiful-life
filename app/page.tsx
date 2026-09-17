import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import AffiliateNotice from "@/components/AffiliateNotice";
import { products } from "@/data/products";
import { validateProducts } from "@/data/validateProducts";

export default function Home() {
  validateProducts(products);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[640px] flex-col pt-[env(safe-area-inset-top)] pr-[max(1rem,env(safe-area-inset-right))] pb-[env(safe-area-inset-bottom)] pl-[max(1rem,env(safe-area-inset-left))] sm:px-8">
      <Header />
      <main className="flex-1">
        <ProductList products={products} />
      </main>
      <AffiliateNotice />
    </div>
  );
}
