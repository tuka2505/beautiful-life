import { site } from "@/data/site";

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-2 border-b border-line py-5">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        <span className="text-[12px] font-semibold tracking-[0.22em] text-ink">
          {site.brand}
        </span>
      </div>

      <div className="pt-10 pb-9 sm:pt-14 sm:pb-12">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-accent">
          LINK IN BIO
        </p>
        <h1 className="mt-4 text-[30px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink sm:text-[38px]">
          오직 이 링크에서만{" "}
          <span className="relative whitespace-nowrap text-accent">
            최대할인
            <span
              className="absolute inset-x-0 -bottom-0.5 h-px bg-accent/35"
              aria-hidden="true"
            />
          </span>
          !
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {site.subheadline}
        </p>
      </div>
    </header>
  );
}
