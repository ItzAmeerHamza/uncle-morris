"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { LocalProductPage } from "@/lib/pages";
import { pagePath } from "@/lib/pages";

export function LeadForm({ page }: { page: LocalProductPage }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Could not send. Try calling instead.");
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSending(false);
    }
  }

  return (
    <section id="lead-form" className="panel lead-panel">
      <p className="kicker">Next step</p>
      <h2>Get my loan game plan</h2>
      <p className="lede">
        Short form. A licensed mortgage professional reviews the scenario. Not a
        credit pull on this page.
      </p>
      <form className="lead-form" onSubmit={onSubmit}>
        <input type="hidden" name="landing_page" value={pagePath(page)} />
        <input type="hidden" name="city" value={page.cityName} />
        <input type="hidden" name="loan_product" value={page.productShort} />
        <input type="hidden" name="state" value={page.stateName} />
        <label>
          What are you trying to do?
          <select name="intent" required defaultValue="investment-purchase">
            <option value="purchase">Buy a home</option>
            <option value="investment-purchase">Buy an investment property</option>
            <option value="refinance">Refinance</option>
            <option value="cash-out">Take cash out</option>
          </select>
        </label>
        <div className="two">
          <label>
            Estimated price / value
            <input name="property_value" type="number" min={0} placeholder="1100000" />
          </label>
          <label>
            Monthly rent (if investment)
            <input name="rent" type="number" min={0} placeholder="7500" />
          </label>
        </div>
        <div className="two">
          <label>
            First name
            <input name="first_name" required autoComplete="given-name" />
          </label>
          <label>
            Mobile phone
            <input name="phone" type="tel" required autoComplete="tel" />
          </label>
        </div>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="consent">
          <input type="checkbox" name="consent" value="yes" required />
          <span>
            I agree to be contacted by American RE Group / Call Uncle Morris at
            the number and email I provided, including by autodialed or
            prerecorded calls and texts. Consent is not required to buy. See
            privacy policy. Opt out anytime.
          </span>
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="btn btn-red" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Show me my options"}
        </button>
      </form>
    </section>
  );
}
