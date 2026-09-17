import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="pt-6 pb-6 sm:pt-16 sm:pb-10">
      <p className="inline-flex items-center gap-1.5 rounded-full bg-accent/[0.08] px-2.5 py-1 text-[12.5px] font-semibold tracking-[-0.01em] text-accent sm:text-[14px]">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        {site.exclusiveBadge}
      </p>
      <h1 className="mt-3 text-[32px] leading-[1.18] font-bold tracking-[-0.035em] text-ink min-[400px]:text-[34px] sm:mt-4 sm:text-[48px]">
        {site.headlineLead}{" "}
        <span className="block text-sale">{site.headlineAccent}</span>
      </h1>
      <p className="mt-2.5 text-[16px] leading-normal tracking-[-0.015em] text-secondary sm:mt-4 sm:text-[19px]">
        {site.subheadline}
      </p>
    </header>
  );
}
