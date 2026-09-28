import Link from "next/link";
import { pages } from "@/lib/pages";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/pages";

const HUBS: Record<string, { title: string; body: string }> = {
  dscr: {
    title: "DSCR loans",
    body: "Investor financing that starts with property rent and expenses. Pick a local page for city-specific context.",
  },
  "bank-statement": {
    title: "Bank-statement loans",
    body: "Self-employed documentation paths. Local pages add market context; this hub is the national product page.",
  },
  jumbo: {
    title: "Jumbo loans",
    body: "Loan amounts that may sit above conforming limits. Pick a local page for city-specific context — this hub does not quote a rate.",
  },
};

export default async function ProductHub({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const hub = HUBS[product];
  const locals = pages.filter((page) => page.slug.product.startsWith(product));

  return (
    <div className="site">
      <header className="topbar">
        <Link className="logo" href="/">
          CALL UNCLE MORRIS
        </Link>
        <nav>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </nav>
      </header>
      <main className="content">
        <h1 className="page-h1">{hub?.title ?? "Home loans"}</h1>
        <p className="lede">{hub?.body ?? "Product hub."}</p>
        <div className="home-paths">
          {locals.map((page) => (
            <Link
              key={`${page.slug.city}-${page.slug.product}`}
              href={`/${page.slug.state}/${page.slug.county}/${page.slug.city}/${page.slug.product}`}
            >
              {page.h1}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
