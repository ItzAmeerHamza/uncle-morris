export type SnapshotCard = {
  label: string;
  value: string;
  note: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LocalProductPage = {
  slug: {
    state: string;
    county: string;
    city: string;
    product: string;
  };
  productName: string;
  productShort: string;
  categoryLabel: string;
  cityName: string;
  stateName: string;
  countyName: string;
  theme: "dscr" | "bank-statement" | "first-time" | "jumbo";
  heroProblem: string;
  heroProblemLine2?: string;
  h1: string;
  valueProp: string;
  phoneDisplay: string;
  phoneHref: string;
  mascotSrc: string;
  heroBenefits: Array<{ icon: string; title: string; subtitle?: string }>;
  supportingPoints: string[];
  snapshot: SnapshotCard[];
  howItWorks: string[];
  localWhy: string;
  housing: string;
  tax: string;
  insurance: string;
  comparison: Array<{ name: string; fit: string }>;
  faqs: FaqItem[];
  nearby: Array<{ label: string; href: string }>;
  related: Array<{ label: string; href: string }>;
};

export const PHONE_DISPLAY = "888-900-5388";
export const PHONE_HREF = "tel:+18889005388";

export const pages: LocalProductPage[] = [
  {
    slug: {
      state: "california",
      county: "los-angeles",
      city: "encino",
      product: "dscr-loans",
    },
    productName: "DSCR loans",
    productShort: "DSCR",
    categoryLabel: "DSCR LOANS",
    cityName: "Encino",
    stateName: "California",
    countyName: "Los Angeles County",
    theme: "dscr",
    heroProblem: "THE BANK WANTS",
    heroProblemLine2: "YOUR TAX RETURNS?",
    h1: "DSCR Loans in Encino, California",
    valueProp:
      "Investment-property financing that starts with the property’s rent and expenses — not a W-2 story the bank already decided.",
    phoneDisplay: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    mascotSrc: "/mascot/01_pointing_man_with_bubble.webp",
    heroBenefits: [
      { icon: "/icons/22_multiple_houses.webp", title: "DSCR LOANS", subtitle: "1-4 UNITS" },
      { icon: "/icons/02_dollar_circle.webp", title: "INVESTOR", subtitle: "PROPERTY PATH" },
      { icon: "/icons/03_check_circle.webp", title: "PERSONAL", subtitle: "GUIDANCE" },
    ],
    supportingPoints: [
      "Qualification centered on property economics",
      "Purchase and eligible refinance scenarios",
      "A licensed pro reviews your actual numbers",
    ],
    snapshot: [
      {
        label: "Market context",
        value: "Higher-priced SFRs",
        note: "Prototype sample — not a live data feed",
      },
      {
        label: "Typical mix",
        value: "SFR + condo",
        note: "Encino buyers often straddle conforming vs jumbo",
      },
      {
        label: "Investor angle",
        value: "Rent vs payment",
        note: "DSCR asks whether the property can carry the loan",
      },
      {
        label: "Last updated",
        value: "Sep 2026",
        note: "Replace with sourced Airtable snapshot",
      },
    ],
    howItWorks: [
      "DSCR means debt-service coverage ratio: estimated monthly rent divided by estimated monthly housing payment (principal, interest, taxes, insurance, and association dues when they apply).",
      "Investor programs may use property cash flow as a primary qualification path instead of personal tax-return income. Exact guidelines depend on the product, occupancy, and the licensed originator’s overlay.",
      "This page does not quote a rate, lock, or approval. Uncle Morris collects a scenario; American RE Group reviews it with a licensed mortgage professional.",
    ],
    localWhy:
      "Encino buyers frequently compare condominiums, single-family homes, and higher-priced properties. That mix can create very different down-payment, conforming, jumbo, and reserve conversations on the same street. A DSCR path is one way investors look at whether the rent can reasonably support the financing — not a promise that every Encino rental qualifies.",
    housing:
      "Encino sits in the San Fernando Valley with a wide spread of property types and price points. Use the snapshot and calculator as orientation only. Live listing, rent, and tax figures must come from approved sources before this page is indexed.",
    tax: "Los Angeles County property tax, assessments, and any exemptions are location-specific. Do not treat a website estimate as a tax bill. A licensed review should use the actual tax line on the property you have in mind.",
    insurance:
      "Valley properties can raise different insurance and hazard questions than a coastal or hillside file. Insurance is not a flood determination and is not a quote. Bring the property address to the conversation.",
    comparison: [
      { name: "DSCR", fit: "1–4 unit investment property where rent is the main story" },
      { name: "Bank statement", fit: "Self-employed borrower whose tax returns understate cash flow" },
      { name: "Jumbo", fit: "Higher purchase prices that sit above conforming limits" },
      { name: "Cash-out", fit: "Existing owners who want to discuss equity — not a rate promise" },
    ],
    faqs: [
      {
        question: "What is a DSCR loan in Encino?",
        answer:
          "It is investor financing that looks at whether estimated rent can cover the estimated housing payment. Encino’s price range means the same product can look very different on a condo versus a higher-priced single-family rental.",
      },
      {
        question: "Do I still need tax returns?",
        answer:
          "Some investor programs emphasize property economics over personal tax-return income. Documentation still exists. Nothing here is a waiver of underwriting or a guarantee of approval.",
      },
      {
        question: "Can I use this for a primary home?",
        answer:
          "DSCR is generally an investment-property conversation. Owner-occupied purchases usually follow a different product path. Tell us occupancy in the form so the licensed team routes you correctly.",
      },
      {
        question: "Will this page show my Encino rate?",
        answer:
          "No. Specific rates, APRs, and payments are not invented on this page. Check your rate and options, then a licensed professional reviews the scenario.",
      },
      {
        question: "Who is the lender?",
        answer:
          "Call Uncle Morris is the consumer brand. Mortgage services are provided by American RE Group, the licensed entity. Licensing and NMLS details belong on every money page.",
      },
    ],
    nearby: [
      { label: "Tarzana DSCR", href: "/california/los-angeles/tarzana/dscr-loans" },
      { label: "Sherman Oaks DSCR", href: "/california/los-angeles/sherman-oaks/dscr-loans" },
      { label: "Woodland Hills DSCR", href: "/california/los-angeles/woodland-hills/dscr-loans" },
    ],
    related: [
      { label: "Encino bank-statement loans", href: "/california/los-angeles/encino/bank-statement-loans" },
      { label: "National DSCR hub", href: "/home-loans/dscr" },
      { label: "DSCR calculator", href: "#calculator" },
    ],
  },
  {
    slug: {
      state: "florida",
      county: "miami-dade",
      city: "miami",
      product: "bank-statement-loans",
    },
    productName: "Bank-statement loans",
    productShort: "Bank statement",
    categoryLabel: "12 MONTH",
    cityName: "Miami",
    stateName: "Florida",
    countyName: "Miami-Dade County",
    theme: "bank-statement",
    heroProblem: "BANK STATEMENT",
    heroProblemLine2: "LOAN",
    h1: "Bank-Statement Loans in Miami, Florida",
    valueProp:
      "Self-employed borrowers often have deposits that look nothing like last year’s AGI. This page explains the conversation — it does not invent an approval.",
    phoneDisplay: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    mascotSrc: "/mascot/01_pointing_man_with_bubble.webp",
    heroBenefits: [
      { icon: "/icons/18_bank_statement_dollar.webp", title: "12 MONTH", subtitle: "BANK STATEMENT" },
      { icon: "/icons/01_single_user.webp", title: "SELF-EMPLOYED", subtitle: "OK" },
      { icon: "/icons/03_check_circle.webp", title: "LICENSED", subtitle: "REVIEW" },
    ],
    supportingPoints: [
      "Built for self-employed cash-flow stories",
      "12- or 24-month statements where the program allows",
      "Licensed review, not a website decision",
    ],
    snapshot: [
      {
        label: "Borrower type",
        value: "Self-employed",
        note: "Prototype sample — not a live data feed",
      },
      {
        label: "Docs path",
        value: "Bank statements",
        note: "When an approved program uses deposits instead of tax returns",
      },
      {
        label: "Market",
        value: "Miami-Dade",
        note: "Condo, SFR, and second-home questions differ",
      },
      {
        label: "Last updated",
        value: "Sep 2026",
        note: "Replace with sourced Airtable snapshot",
      },
    ],
    howItWorks: [
      "Bank-statement programs may average eligible deposits over 12 or 24 months and apply a program-specific expense factor. That is educational language, not your underwriting result.",
      "Self-employed, 1099, and business-owner files are not one product. Availability depends on state, occupancy, and American RE Group’s current overlay.",
      "No rate, fee, or “easy approval” claim is made on this page.",
    ],
    localWhy:
      "Miami self-employed buyers often mix condo, single-family, and second-home plans. Those choices change documentation, insurance, and association questions. The local hook is the financing path — not restaurant lists.",
    housing:
      "Miami-Dade has a wide inventory mix. Treat this section as a placeholder until licensed local data is wired in.",
    tax: "Florida property tax and homestead rules are county-specific. Confirm on the actual property.",
    insurance:
      "Wind, flood, and condo master policies are common Miami file issues. This is educational context, not a hazard determination.",
    comparison: [
      { name: "Bank statement", fit: "Self-employed deposits that don’t match tax-return income" },
      { name: "DSCR", fit: "Investment property where rent is the qualifier" },
      { name: "P&L", fit: "When an approved P&L path is actually offered" },
      { name: "Conventional", fit: "W-2 or full-doc files that don’t need an alt-doc path" },
    ],
    faqs: [
      {
        question: "What is a bank-statement loan?",
        answer:
          "It is an alternative-documentation path some self-employed borrowers use when tax returns are not the full cash-flow picture. Eligibility is product- and state-specific.",
      },
      {
        question: "Is this available in Florida?",
        answer:
          "Only if American RE Group and the originator are authorized for the product and the property state. The page routing layer must not claim nationwide coverage.",
      },
      {
        question: "Will the site calculate my qualifying income?",
        answer:
          "A rough educational estimator can show how deposits are discussed. Final income is determined by a licensed professional using the actual statements.",
      },
      {
        question: "Do I still need tax returns?",
        answer:
          "Sometimes yes, sometimes a different package. Do not assume “no tax returns” from advertising language. Ask on the call.",
      },
      {
        question: "Who do I call?",
        answer:
          "Call Uncle Morris is the consumer brand. American RE Group is the licensed mortgage entity.",
      },
    ],
    nearby: [
      { label: "Miami DSCR", href: "/florida/miami-dade/miami/dscr-loans" },
    ],
    related: [
      { label: "National bank-statement hub", href: "/home-loans/bank-statement" },
      { label: "Check my options", href: "#lead-form" },
    ],
  },
  {
    slug: {
      state: "california",
      county: "los-angeles",
      city: "encino",
      product: "jumbo-loans",
    },
    productName: "Jumbo loans",
    productShort: "Jumbo",
    categoryLabel: "JUMBO LOANS",
    cityName: "Encino",
    stateName: "California",
    countyName: "Los Angeles County",
    theme: "jumbo",
    heroProblem: "JUMBO LOANS",
    h1: "Jumbo Loans in Encino, California",
    valueProp:
      "Higher Encino purchase prices can sit above conforming limits. This page is the jumbo conversation — not a rate, not a lock, and not a promise that every file is jumbo.",
    phoneDisplay: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    mascotSrc: "/mascot/01_pointing_man_with_bubble.webp",
    heroBenefits: [
      { icon: "/icons/23_house_dollar.webp", title: "UP TO", subtitle: "$5 MILLION+" },
      { icon: "/icons/05_percent_circle.webp", title: "PRICING", subtitle: "REVIEW" },
      { icon: "/icons/01_single_user.webp", title: "EXPERT", subtitle: "GUIDANCE" },
    ],
    supportingPoints: [
      "Purchase prices that may exceed conforming limits",
      "Licensed review of reserves, occupancy, and documentation",
      "Same Uncle Morris, different file size",
    ],
    snapshot: [
      {
        label: "Market context",
        value: "Higher-priced SFRs",
        note: "Prototype sample — not a live data feed",
      },
      {
        label: "Typical mix",
        value: "Jumbo vs conforming",
        note: "Encino prices often straddle the limit conversation",
      },
      {
        label: "File focus",
        value: "Reserves + docs",
        note: "Jumbo is a size path, not a shortcut",
      },
      {
        label: "Last updated",
        value: "Sep 2026",
        note: "Replace with sourced Airtable snapshot",
      },
    ],
    howItWorks: [
      "Jumbo generally means the loan amount is above the conforming limit that applies to that property and occupancy. Limits change and are not quoted as a live figure on this page.",
      "A larger loan amount can change reserve, documentation, and pricing conversations. None of that is a rate or an approval.",
      "Call Uncle Morris collects the scenario. American RE Group reviews it with a licensed mortgage professional.",
    ],
    localWhy:
      "Encino’s price spread means two houses on nearby streets can be a conforming file and a jumbo file. The local hook is that size conversation — not a guaranteed max loan amount.",
    housing:
      "Use the snapshot as orientation only. Live listing and tax figures must come from approved sources before this page is indexed.",
    tax: "Los Angeles County property tax, assessments, and any exemptions are location-specific. Do not treat a website estimate as a tax bill.",
    insurance:
      "Higher-value properties can raise different insurance questions. This is educational context, not a quote.",
    comparison: [
      { name: "Jumbo", fit: "Loan amount above the applicable conforming limit" },
      { name: "DSCR", fit: "Investment property where rent is the main story" },
      { name: "Bank statement", fit: "Self-employed cash flow that doesn’t match tax returns" },
      { name: "Cash-out", fit: "Existing owners who want to discuss equity — not a rate promise" },
    ],
    faqs: [
      {
        question: "What is a jumbo loan in Encino?",
        answer:
          "It is a loan amount above the conforming limit that applies to that property. Encino prices often make this a real question. The limit is not invented on this page.",
      },
      {
        question: "Do you go up to $5 million?",
        answer:
          "Jumbo and super-jumbo conversations happen in this price band. Availability depends on the product, occupancy, and the licensed originator’s overlay — not a website maximum.",
      },
      {
        question: "Will this page show my jumbo rate?",
        answer:
          "No. Specific rates, APRs, and payments are not advertised here. Check your options, then a licensed professional reviews the scenario.",
      },
      {
        question: "Who is the lender?",
        answer:
          "Call Uncle Morris is the consumer brand. Mortgage services are provided by American RE Group, the licensed entity.",
      },
    ],
    nearby: [
      { label: "Encino DSCR", href: "/california/los-angeles/encino/dscr-loans" },
      { label: "Tarzana jumbo", href: "/california/los-angeles/tarzana/jumbo-loans" },
    ],
    related: [
      { label: "National jumbo hub", href: "/home-loans/jumbo" },
      { label: "Encino bank-statement loans", href: "/california/los-angeles/encino/bank-statement-loans" },
    ],
  },
];

export function findPage(
  state: string,
  county: string,
  city: string,
  product: string,
) {
  return pages.find(
    (page) =>
      page.slug.state === state &&
      page.slug.county === county &&
      page.slug.city === city &&
      page.slug.product === product,
  );
}

export function pagePath(page: LocalProductPage) {
  const { state, county, city, product } = page.slug;
  return `/${state}/${county}/${city}/${product}`;
}
