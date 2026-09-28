import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site">
      <header className="topbar">
        <Link className="logo" href="/">
          CALL UNCLE MORRIS
        </Link>
      </header>
      <main className="thank-you panel">
        <h1 className="page-h1">That page is not live yet.</h1>
        <p className="lede">
          Local × product URLs only publish when the record exists. Nearby links
          on the Encino page may 404 until those cities are added.
        </p>
        <Link className="btn btn-red" href="/california/los-angeles/encino/dscr-loans">
          Open Encino DSCR
        </Link>
      </main>
    </div>
  );
}
