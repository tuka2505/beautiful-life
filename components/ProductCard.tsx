import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${number}번 ${product.name} · 새 창에서 상품 페이지 열기`}
      className="group block rounded-[20px] border border-line bg-surface p-3 shadow-[0_1px_2px_rgba(23,22,19,0.04)] transition duration-200 ease-out hover:border-ink/15 hover:shadow-[0_10px_28px_rgba(23,22,19,0.08)] active:scale-[0.995] sm:hover:-translate-y-0.5"
    >
      <article>
        <div className="flex items-center gap-3 px-2 pt-1 pb-3">
          <span className="text-[13px] font-semibold tracking-[0.1em] text-ink tabular-nums">
            {number}
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-[14px] bg-canvas">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 92vw, 552px"
            priority={index < 2}
            className="object-cover transition-transform duration-300 ease-out sm:group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex items-start gap-3 px-2 pt-4 pb-1">
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] leading-snug font-semibold break-words text-ink">
              {product.name}
            </h3>
            <p className="mt-1.5 truncate text-[12.5px] text-muted">
              {product.url}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="size-[14px]"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 11.5 11.5 4.5" />
              <path d="M5.75 4.5h5.75v5.75" />
            </svg>
          </span>
        </div>
      </article>
    </a>
  );
}
