import type { LocalProductPage } from "@/lib/pages";

export function StickyBar({ page }: { page: LocalProductPage }) {
  return (
    <div className="sticky-bar">
      <a href={page.phoneHref}>Call</a>
      <a href="#lead-form">Check rate</a>
      <a
        href={`sms:+18889005388?body=${encodeURIComponent(`Uncle Morris ${page.cityName} ${page.productShort}`)}`}
      >
        Text
      </a>
    </div>
  );
}
