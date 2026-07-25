"use client";

import { useState } from "react";

/*
  SHOPIFY CHECKOUT — connect before launch:
  Set NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL in .env.local (and in the Vercel
  project's environment variables) to your Shopify product URL or a
  cart permalink (https://YOURSTORE.myshopify.com/cart/VARIANT_ID:1).
*/
const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL ||
  "https://q2ztvn-ku.myshopify.com/cart/46901966340295:1";

export default function BuyButton({
  children = "YES! I Want The Everyday Plate Blueprint For $29!",
  subtitle = "Instant Download · 730+ Pages · 30-Day Money-Back Guarantee",
}) {
  const [showNote, setShowNote] = useState(false);

  const handleClick = (e) => {
    if (!CHECKOUT_URL) {
      e.preventDefault();
      setShowNote(true);
    }
  };

  return (
    <>
      <a className="red-cta" href={CHECKOUT_URL || "#"} onClick={handleClick}>
        <span className="cta-arrow">➜</span>
        <span className="cta-copy">
          {children}
          {subtitle && <small>{subtitle}</small>}
        </span>
      </a>
      {showNote && (
        <div className="checkout-note">
          Checkout isn&rsquo;t connected yet — the Shopify product link will be
          added here before launch.
        </div>
      )}
    </>
  );
}
