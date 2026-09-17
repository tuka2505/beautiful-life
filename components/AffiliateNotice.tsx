import { site } from "@/data/site";

export default function AffiliateNotice() {
  return (
    <footer className="mt-10 space-y-1.5 border-t border-hairline/70 pt-5 pb-10 sm:mt-14">
      <p className="text-[12px] leading-[1.6] tracking-[-0.005em] text-tertiary">
        {site.priceNotice}
      </p>
      <p className="text-[12px] leading-[1.6] tracking-[-0.005em] text-tertiary">
        {site.affiliateNotice}
      </p>
    </footer>
  );
}
