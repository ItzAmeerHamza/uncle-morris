import Link from "next/link";
import Image from "next/image";
import { CampaignHero } from "@/components/CampaignHero";
import { DscrCalculator } from "@/components/DscrCalculator";
import { FaqList } from "@/components/FaqList";
import { LeadForm } from "@/components/LeadForm";
import { StickyBar } from "@/components/StickyBar";
import { campaignFromPage } from "@/lib/campaign";
import type { LocalProductPage as PageData } from "@/lib/pages";

export function LocalProductPage({ page }: { page: PageData }) {
  return (
    <div className={`site theme-${page.theme}`}>
      <header className="topbar">
        <Link className="logo" href="/">
          <Image
            src="/mascot/02_circle_badge_pointing_man_with_bubble.webp"
            alt="Uncle Morris"
            width={72}
            height={72}
            unoptimized
          />
          CALL UNCLE MORRIS
        </Link>
        <nav>
          <Link href="/home-loans/dscr">Home loans</Link>
          <a className="topbar-phone" href={page.phoneHref}>
            {page.phoneDisplay}
          </a>
          <a className="btn btn-red btn-small" href="#lead-form">
            Check my rate
          </a>
        </nav>
      </header>

      <CampaignHero campaign={campaignFromPage(page)} />

      <div className="action-row">
        <a className="btn btn-red" href="#lead-form">
          Check my rate &amp; options
        </a>
        <a className="btn btn-outline" href="#lead-form">
          Get my loan game plan
        </a>
      </div>

      <div className="trust-strip">
        <span>Mortgage services by American RE Group</span>
        <span>NMLS Company ID [placeholder]</span>
        <span>Equal Housing Opportunity</span>
        <span>Not a commitment to lend</span>
      </div>

      <main className="content">
        <p className="breadcrumb">
          {page.stateName} / {page.countyName} / {page.cityName} /{" "}
          {page.productName}
        </p>
        <h2 className="page-h1">{page.h1}</h2>
        <p className="lede">{page.valueProp}</p>

        <section className="snapshot">
          <p className="kicker">Instant local snapshot</p>
          <div className="snap-grid">
            {page.snapshot.map((card) => (
              <article key={card.label} className="snap-card">
                <p>{card.label}</p>
                <strong>{card.value}</strong>
                <span>{card.note}</span>
              </article>
            ))}
          </div>
        </section>

        {page.theme === "dscr" ? (
          <DscrCalculator
            cityName={page.cityName}
            productShort={page.productShort}
          />
        ) : (
          <section id="calculator" className="panel">
            <p className="kicker">Interactive tool</p>
            <h2>Check options, not a website quote</h2>
            <p className="lede">
              Use the form to send a scenario. A licensed professional reviews
              the actual file — this page does not invent a rate or approval.
            </p>
            <a className="btn btn-red" href="#lead-form">
              Check my options
            </a>
          </section>
        )}

        <section className="panel">
          <p className="kicker">How this loan works</p>
          <h2>Plain-English {page.productShort}</h2>
          {page.howItWorks.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </section>

        <section className="panel">
          <p className="kicker">Why it may matter here</p>
          <h2>
            {page.productShort} in {page.cityName}
          </h2>
          <p>{page.localWhy}</p>
          <h3>Local housing</h3>
          <p>{page.housing}</p>
          <h3>Property tax</h3>
          <p>{page.tax}</p>
          <h3>Insurance &amp; hazard</h3>
          <p>{page.insurance}</p>
        </section>

        <section className="panel">
          <p className="kicker">Compare paths</p>
          <h2>Other conversations we can have</h2>
          <p className="lede">No fake “best loan.” These are different files.</p>
          <div className="compare">
            {page.comparison.map((row) => (
              <article key={row.name}>
                <h3>{row.name}</h3>
                <p>{row.fit}</p>
              </article>
            ))}
          </div>
        </section>

        <LeadForm page={page} />

        <section className="panel">
          <p className="kicker">Local FAQ</p>
          <h2>
            {page.cityName} {page.productShort} questions
          </h2>
          <FaqList faqs={page.faqs} />
        </section>

        <section className="link-row">
          <div>
            <h3>Nearby</h3>
            <ul>
              {page.nearby.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Related</h3>
            <ul>
              {page.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="disclosures">
          <p>
            Call Uncle Morris is a consumer brand. Mortgage origination is
            offered by American RE Group, Equal Housing Opportunity. NMLS
            Company ID and individual MLO IDs to be inserted from the approved
            identity table. This website is not a commitment to lend. Product
            availability varies by state and borrower/property scenario.
            “I FIND A WAY!” is a brand slogan, not a guarantee of approval,
            pricing, or closing timeline.
          </p>
          <p>
            Snapshot figures on this prototype are labeled sample data. Do not
            index this page until fact packets, claims, and licensing gates pass.
            Rates, APRs, points, fees, and closing times are not advertised here.
          </p>
        </section>
      </main>
      <StickyBar page={page} />
    </div>
  );
}
