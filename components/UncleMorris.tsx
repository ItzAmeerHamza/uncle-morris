export function UncleMorris({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 560"
      className={className}
      role="img"
      aria-label="Uncle Morris pointing at you"
    >
      <ellipse cx="220" cy="538" rx="150" ry="16" fill="#111" opacity="0.2" />
      <path
        d="M70 250c18-8 48-18 92-22 70-6 128 8 168 38 8 22 14 70 14 118v140H78V330c0-32-4-58-8-80z"
        fill="#ffe14a"
        stroke="#111"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M148 338h144v168H148z"
        fill="#fff4c4"
        stroke="#111"
        strokeWidth="8"
      />
      <path
        d="M210 338v168"
        fill="none"
        stroke="#111"
        strokeWidth="6"
      />
      <path
        d="M78 250c-40 28-62 92-48 148 10 38 48 62 86 58"
        fill="#ffe14a"
        stroke="#111"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M318 268c62-8 118 18 132 78 10 44-8 92-58 108"
        fill="#ffe14a"
        stroke="#111"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M368 92c48-38 108-8 102 52-4 38-32 58-68 54 8 28 44 46 84 28"
        fill="#f3c39a"
        stroke="#111"
        strokeWidth="9"
        strokeLinejoin="round"
      />
      <circle cx="220" cy="168" r="108" fill="#f3c39a" stroke="#111" strokeWidth="10" />
      <path
        d="M122 150c12-78 70-112 118-112 62 0 112 46 118 112"
        fill="#2c241c"
        stroke="#111"
        strokeWidth="10"
      />
      <path d="M118 148c38-28 168-36 224 4" fill="#2c241c" />
      <path
        d="M132 158c22-18 48-22 70-8"
        fill="none"
        stroke="#111"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M238 150c24-16 52-18 76 2"
        fill="none"
        stroke="#111"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <ellipse cx="176" cy="176" rx="24" ry="22" fill="#fff" stroke="#111" strokeWidth="7" />
      <ellipse cx="264" cy="176" rx="24" ry="22" fill="#fff" stroke="#111" strokeWidth="7" />
      <circle cx="182" cy="180" r="10" fill="#111" />
      <circle cx="270" cy="180" r="10" fill="#111" />
      <path d="M214 188l16 26-32 2z" fill="#e29b6b" stroke="#111" strokeWidth="5" />
      <path
        d="M148 228c42 48 108 50 148 2 8 8-8 22-28 34-36 22-92 20-132-8-12-8-8-20 12-28z"
        fill="#3b2a1c"
        stroke="#111"
        strokeWidth="7"
      />
      <path
        d="M188 248c18 16 48 16 68-2"
        fill="none"
        stroke="#111"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="186"
        y="268"
        width="68"
        height="44"
        rx="16"
        fill="#f3c39a"
        stroke="#111"
        strokeWidth="8"
      />
      <circle cx="414" cy="118" r="8" fill="#111" />
    </svg>
  );
}

export function SpeechBubble({ children }: { children: string }) {
  return (
    <div className="speech-bubble">
      <span>{children}</span>
    </div>
  );
}
