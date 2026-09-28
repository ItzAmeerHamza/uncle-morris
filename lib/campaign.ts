import type { LocalProductPage } from "@/lib/pages";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/pages";

export type HeroBenefit = {
  icon: string;
  title: string;
  subtitle?: string;
};

export type CampaignHeroData = {
  theme: "dscr" | "bank-statement" | "first-time" | "jumbo";
  category: string;
  problemLines: string[];
  accentLine?: string;
  showCall?: boolean;
  mascotSrc: string;
  benefits: HeroBenefit[];
  phoneDisplay: string;
  phoneHref: string;
  siteUrl: string;
};

export function campaignFromPage(page: LocalProductPage): CampaignHeroData {
  return {
    theme: page.theme,
    category: page.categoryLabel,
    problemLines: [page.heroProblem, page.heroProblemLine2].filter(
      (line): line is string => Boolean(line),
    ),
    accentLine:
      page.theme === "bank-statement"
        ? "NO TAX RETURNS? NO PROBLEM."
        : page.theme === "jumbo"
          ? "MORE HOUSE. SAME UNCLE MORRIS."
          : undefined,
    showCall: page.theme === "dscr" || page.theme === "first-time",
    mascotSrc: page.mascotSrc,
    benefits: page.heroBenefits,
    phoneDisplay: page.phoneDisplay,
    phoneHref: page.phoneHref,
    siteUrl: "CALLUNCLEMORRIS.COM",
  };
}

export const homeCampaign: CampaignHeroData = {
  theme: "first-time",
  category: "",
  problemLines: ["WHEN MOM & DAD"],
  accentLine: "SAY NO...",
  showCall: true,
  mascotSrc: "/mascot/01_pointing_man_with_bubble.png",
  benefits: [
    { icon: "/icons/20_house_checkmark.png", title: "FIRST-TIME", subtitle: "HOMEBUYER?" },
    { icon: "/icons/06_down_arrow_circle.png", title: "DOWN PAYMENT", subtitle: "OPTIONS" },
    { icon: "/icons/04_stopwatch.png", title: "PRE-APPROVAL", subtitle: "REVIEW" },
    { icon: "/icons/01_single_user.png", title: "PERSONAL", subtitle: "GUIDANCE" },
  ],
  phoneDisplay: PHONE_DISPLAY,
  phoneHref: PHONE_HREF,
  siteUrl: "UNCLEMORRISHOMELOANS.COM",
};
