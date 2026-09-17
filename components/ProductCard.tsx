import Image from "next/image";
import type { Product } from "@/data/products";

const ABOVE_THE_FOLD_COUNT = 4;

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const isAboveTheFold = index < ABOVE_THE_FOLD_COUNT;

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${number}번 ${product.name} · 새 창에서 상품 페이지 열기`}
      className="group flex items-center gap-3.5 rounded-[22px] bg-surface p-2.5 pr-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition-[transform,box-shadow,background-color] duration-200 ease-out select-none active:scale-[0.98] active:bg-[#fafafa] sm:gap-5 sm:p-3 sm:pr-5 sm:hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
    >
      <article className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-5">
        <div className="relative size-[84px] shrink-0 overflow-hidden rounded-[16px] bg-canvas min-[375px]:size-[92px] sm:size-[112px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 112px, 92px"
            loading={isAboveTheFold ? "eager" : "lazy"}
            fetchPriority={isAboveTheFold ? "high" : "auto"}
            className="object-cover transition-transform duration-300 ease-out sm:group-hover:scale-[1.04]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[12px] leading-none font-semibold tracking-[0.02em] text-tertiary tabular-nums sm:text-[13px]">
            {number}
          </p>
          <h3 className="mt-1.5 line-clamp-2 text-[16px] leading-[1.32] font-semibold tracking-[-0.02em] break-words text-ink sm:text-[18px]">
            {product.name}
          </h3>
          <p className="mt-1 truncate text-[12px] tracking-[-0.005em] text-tertiary sm:text-[13px]">
            {product.url}
          </p>
        </div>
      </article>

      <svg
        aria-hidden="true"
        viewBox="0 0 8 14"
        fill="none"
        className="h-3.5 w-2 shrink-0 text-hairline transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-accent group-active:text-accent"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m1.5 1.5 5 5.5-5 5.5" />
      </svg>
    </a>
  );
}
