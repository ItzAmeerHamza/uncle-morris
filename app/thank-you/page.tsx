import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/pages";

export default function ThankYou() {
  return (
    <div className="site">
      <header className="topbar">
        <Link className="logo" href="/">
          CALL UNCLE MORRIS
        </Link>
      </header>
      <main className="thank-you panel">
        <p className="kicker">Got it</p>
        <h1 className="page-h1">UNCLE MORRIS IS ON IT.</h1>
        <p className="lede">
          A licensed mortgage professional at American RE Group will review the
          scenario you sent. This is not an approval.
        </p>
        <p>
          Next step:{" "}
          <a href={PHONE_HREF}>
            <strong>Call {PHONE_DISPLAY}</strong>
          </a>
        </p>
        <Link className="btn btn-red" href="/california/los-angeles/encino/dscr-loans">
          Back to Encino DSCR
        </Link>
      </main>
    </div>
  );
}
