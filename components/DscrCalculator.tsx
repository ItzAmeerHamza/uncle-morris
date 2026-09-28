"use client";

import { useMemo, useState } from "react";

type Props = {
  cityName: string;
  productShort: string;
};

export function DscrCalculator({ cityName, productShort }: Props) {
  const [price, setPrice] = useState(1100000);
  const [downPct, setDownPct] = useState(25);
  const [ratePct, setRatePct] = useState(7);
  const [rent, setRent] = useState(7500);
  const [taxInsPct, setTaxInsPct] = useState(1.4);

  const result = useMemo(() => {
    const loan = price * (1 - downPct / 100);
    const monthlyRate = ratePct / 100 / 12;
    const n = 360;
    const payment =
      monthlyRate === 0
        ? loan / n
        : (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    const taxIns = (price * (taxInsPct / 100)) / 12;
    const pitia = payment + taxIns;
    const dscr = pitia > 0 ? rent / pitia : 0;
    return { loan, payment, taxIns, pitia, dscr };
  }, [price, downPct, ratePct, rent, taxInsPct]);

  return (
    <section id="calculator" className="panel">
      <p className="kicker">Interactive tool</p>
      <h2>
        {productShort} calculator for {cityName}
      </h2>
      <p className="lede">
        Educational estimate only. Uses a 30-year amortization and a simple
        tax/insurance stand-in. This is not a quote, rate, or approval.
      </p>
      <div className="calc-grid">
        <label>
          Purchase price
          <input
            type="number"
            min={50000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
          />
        </label>
        <label>
          Down payment %
          <input
            type="number"
            min={0}
            max={90}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value) || 0)}
          />
        </label>
        <label>
          Example rate %
          <input
            type="number"
            min={0}
            step={0.125}
            value={ratePct}
            onChange={(e) => setRatePct(Number(e.target.value) || 0)}
          />
        </label>
        <label>
          Monthly rent
          <input
            type="number"
            min={0}
            value={rent}
            onChange={(e) => setRent(Number(e.target.value) || 0)}
          />
        </label>
        <label>
          Tax + insurance % / year
          <input
            type="number"
            min={0}
            step={0.1}
            value={taxInsPct}
            onChange={(e) => setTaxInsPct(Number(e.target.value) || 0)}
          />
        </label>
      </div>
      <div className="calc-result">
        <div>
          <span>Est. monthly PITIA</span>
          <strong>
            {result.pitia.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </strong>
        </div>
        <div>
          <span>Coverage ratio</span>
          <strong>{result.dscr.toFixed(2)}x</strong>
        </div>
      </div>
      <p className="fine">
        Example rate is a placeholder for the math, not an available price.
        Email these numbers in the form below if you want a licensed review.
      </p>
      <a className="btn btn-red" href="#lead-form">
        Check my {productShort} options
      </a>
    </section>
  );
}
