import ProductCard from "@/components/ProductCard";
import { site } from "@/data/site";
import type { Product } from "@/data/products";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <section aria-labelledby="product-list-heading">
      <div className="mb-2.5 flex items-baseline justify-between sm:mb-3.5">
        <h2
          id="product-list-heading"
          className="text-[13px] font-semibold tracking-[-0.01em] text-ink sm:text-[15px]"
        >
          {site.listTitle}
        </h2>
        {products.length > 0 && (
          <span className="text-[13px] text-tertiary tabular-nums sm:text-[15px]">
            {products.length}개
          </span>
        )}
      </div>

      {products.length === 0 ? (
        <p className="rounded-[22px] bg-surface py-14 text-center text-[15px] text-tertiary ring-1 ring-black/[0.04]">
          {site.emptyMessage}
        </p>
      ) : (
        <ul className="flex flex-col gap-2.5 sm:gap-3.5">
          {products.map((product, index) => (
            <li key={`${index}-${product.url}`}>
              <ProductCard product={product} index={index} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
