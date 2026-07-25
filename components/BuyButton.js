"use client";

import { useState } from "react";

/*
  SHOPIFY CHECKOUT — connect before launch:
  1. In Shopify admin, create the product (use the free "Digital Downloads"
     app to attach the ebook PDF), then copy either:
     • the product page URL:
       https://YOURSTORE.myshopify.com/products/everyday-plate-blueprint
     • or a cart permalink for one-click checkout:
       https://YOURSTORE.myshopify.com/cart/VARIANT_ID:1
  2. Set it as NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL in .env.local (and in the
     Vercel project's environment variables), then redeploy.
*/
const CHECKOUT_URL = process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL || "";

export default function BuyButton({ label = "Buy now" }) {
  const [showNote, setShowNote] = useState(false);

  if (CHECKOUT_URL) {
    return (
      <a className="btn" href={CHECKOUT_URL}>
        {label}
      </a>
    );
  }

  return (
    <>
      <a
        className="btn"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowNote(true);
        }}
      >
        {label}
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
