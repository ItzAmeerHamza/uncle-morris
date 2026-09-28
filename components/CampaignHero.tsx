import Image from "next/image";
import type { CampaignHeroData } from "@/lib/campaign";

export function CampaignHero({ campaign }: { campaign: CampaignHeroData }) {
  return (
    <section className={`billboard theme-${campaign.theme}`} id="campaign-hero">
      <div className="billboard-stage">
        <div className="billboard-copy">
          {campaign.category ? (
            <p className="billboard-cat">{campaign.category}</p>
          ) : null}
          <p className="billboard-problem">
            {campaign.problemLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          {campaign.accentLine ? (
            <p
              className={
                campaign.theme === "first-time"
                  ? "billboard-accent"
                  : "billboard-accent brush"
              }
            >
              {campaign.accentLine}
            </p>
          ) : null}
          {campaign.showCall !== false ? (
            <p className="billboard-call">
              <span className="call-small">CALL</span>
              <span className="call-big">UNCLE MORRIS</span>
            </p>
          ) : null}
        </div>

        <div className="billboard-art">
          <Image
            src={campaign.mascotSrc}
            alt="Uncle Morris pointing toward you"
            width={1254}
            height={1254}
            className="mascot"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="icon-bar">
        {campaign.benefits.map((item) => (
          <div key={item.title} className="icon-item">
            <Image src={item.icon} alt="" width={72} height={72} unoptimized />
            <p>
              <strong>{item.title}</strong>
              {item.subtitle ? <span>{item.subtitle}</span> : null}
            </p>
          </div>
        ))}
        <a className="icon-phone" href={campaign.phoneHref}>
          <Image src="/icons/09_phone_handset.webp" alt="" width={72} height={72} unoptimized />
          <p>
            <strong>{campaign.phoneDisplay}</strong>
            <span>{campaign.siteUrl}</span>
          </p>
        </a>
      </div>
    </section>
  );
}
