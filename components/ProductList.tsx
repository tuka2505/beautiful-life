import ProductCard from "@/components/ProductCard";
import { site } from "@/data/site";
import type { Product } from "@/data/products";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <section aria-labelledby="product-list-heading">
        <h2 id="product-list-heading" className="sr-only">
          추천 상품 목록
        </h2>
        <p className="rounded-[20px] border border-dashed border-line py-16 text-center text-[14px] text-muted">
          {site.emptyMessage}
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="product-list-heading">
      <h2 id="product-list-heading" className="sr-only">
        추천 상품 목록
      </h2>
      <ul className="flex flex-col gap-5 sm:gap-6">
        {products.map((product, index) => (
          <li key={`${index}-${product.url}`}>
            <ProductCard product={product} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
