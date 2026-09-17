import Image from "next/image";
import type { Product } from "@/data/products";
import { site } from "@/data/site";

const ABOVE_THE_FOLD_COUNT = 4;
const priceFormatter = new Intl.NumberFormat("ko-KR");

type ProductCardProps = {
  product: Product;
  index: number;
};

function formatPrice(price: number) {
  return `${priceFormatter.format(price)}원`;
}

function getDiscountRate(originalPrice: number, salePrice: number) {
  return Math.floor((1 - salePrice / originalPrice) * 100);
}

function ProductName({ name, highlight }: Pick<Product, "name" | "highlight">) {
  const start = highlight ? name.indexOf(highlight) : -1;
  if (!highlight || start < 0) return name;

  return (
    <>
      {name.slice(0, start)}
      <strong className="font-bold whitespace-nowrap text-accent">
        {highlight}
      </strong>
      {name.slice(start + highlight.length)}
    </>
  );
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { name, highlight, image, url, originalPrice, salePrice } = product;
  const number = String(index + 1).padStart(2, "0");
  const isAboveTheFold = index < ABOVE_THE_FOLD_COUNT;
  const hasPrice = originalPrice !== undefined && salePrice !== undefined;
  const discountRate = hasPrice ? getDiscountRate(originalPrice, salePrice) : 0;

  const label = [
    `${number}번 ${name}`,
    hasPrice &&
      `${site.cardBadge} ${formatPrice(salePrice)}, 판매가 ${formatPrice(originalPrice)}에서 ${discountRate}% 할인`,
    "새 창에서 상품 페이지 열기",
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-3 rounded-[22px] bg-surface p-2.5 pr-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition-[transform,box-shadow,background-color] duration-200 ease-out select-none active:scale-[0.98] active:bg-[#fafafa] sm:gap-5 sm:p-3 sm:pr-5 sm:hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
    >
      <article className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-5">
        <div className="relative size-[84px] shrink-0 overflow-hidden rounded-[16px] bg-canvas min-[375px]:size-[96px] sm:size-[120px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 640px) 120px, 96px"
            loading={isAboveTheFold ? "eager" : "lazy"}
            fetchPriority={isAboveTheFold ? "high" : "auto"}
            className="object-cover transition-transform duration-300 ease-out sm:group-hover:scale-[1.04]"
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-[16px] ring-1 ring-black/[0.05] ring-inset"
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] leading-none font-semibold tracking-[0.02em] text-tertiary tabular-nums sm:text-[13px]">
              {number}
            </span>
            {hasPrice && (
              <span className="rounded-[5px] bg-accent/[0.08] px-1.5 py-[3px] text-[10.5px] leading-none font-semibold tracking-[-0.01em] text-accent sm:text-[11.5px]">
                {site.cardBadge}
              </span>
            )}
          </div>

          <h3 className="mt-1.5 line-clamp-2 text-[15.5px] leading-[1.32] font-semibold tracking-[-0.02em] break-words text-ink min-[375px]:text-[16px] sm:text-[18px]">
            <ProductName name={name} highlight={highlight} />
          </h3>

          {hasPrice && (
            <p className="mt-1 flex flex-wrap items-baseline gap-x-1.5 leading-tight">
              <span className="text-[16px] font-bold tracking-[-0.02em] text-sale tabular-nums sm:text-[19px]">
                {discountRate}%
              </span>
              <span className="text-[16px] font-bold tracking-[-0.02em] text-ink tabular-nums sm:text-[19px]">
                {formatPrice(salePrice)}
              </span>
              <del className="text-[12px] tracking-[-0.01em] text-tertiary tabular-nums sm:text-[13px]">
                {formatPrice(originalPrice)}
              </del>
            </p>
          )}

          <p className="mt-1 truncate text-[11.5px] tracking-[-0.005em] text-tertiary sm:text-[13px]">
            {url}
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
