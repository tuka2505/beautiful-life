import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="pt-7 pb-6 sm:pt-16 sm:pb-10">
      <p className="text-[13px] font-semibold tracking-[-0.01em] text-secondary sm:text-[15px]">
        {site.eyebrow}
      </p>
      <h1 className="mt-2 text-[32px] leading-[1.18] font-bold tracking-[-0.035em] text-ink min-[400px]:text-[34px] sm:text-[48px]">
        {site.headlineLead}{" "}
        <span className="block text-accent">{site.headlineAccent}</span>
      </h1>
      <p className="mt-2.5 text-[16px] leading-normal tracking-[-0.015em] text-secondary sm:mt-4 sm:text-[19px]">
        {site.subheadline}
      </p>
    </header>
  );
}
