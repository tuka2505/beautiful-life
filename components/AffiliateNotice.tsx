import { site } from "@/data/site";

export default function AffiliateNotice() {
  return (
    <footer className="mt-14 border-t border-line pt-6 pb-12">
      <p className="text-[12px] leading-relaxed text-muted">
        {site.affiliateNotice}
      </p>
    </footer>
  );
}
