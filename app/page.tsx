import Image from "next/image";
import Link from "next/link";
import { CampaignHero } from "@/components/CampaignHero";
import { homeCampaign } from "@/lib/campaign";
import { pages, pagePath, PHONE_DISPLAY, PHONE_HREF } from "@/lib/pages";

export default function Home() {
  return (
    <div className="site">
      <header className="topbar">
        <Link className="logo" href="/">
          <Image
            src="/mascot/02_circle_badge_pointing_man_with_bubble.png"
            alt="Uncle Morris"
            width={72}
            height={72}
            unoptimized
          />
          CALL UNCLE MORRIS
        </Link>
        <nav>
          <a className="topbar-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </nav>
      </header>

      <CampaignHero campaign={homeCampaign} />

      <main className="home-body">
        <p className="kicker">Pick a starting point</p>
        <h2 className="page-h1">Same Uncle Morris. Different conversation.</h2>
        <p className="lede">
          One template, local pages, licensed review. Choose the path that
          matches the file — then check your options.
        </p>
        <div className="home-paths">
          {pages.map((page) => (
            <Link
              key={pagePath(page)}
              className={`path-card theme-${page.theme}`}
              href={pagePath(page)}
            >
              <span className="path-kicker">{page.categoryLabel}</span>
              <strong>{page.h1}</strong>
              <span>{page.valueProp}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
