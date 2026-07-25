"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const storageKey = "everyday-plate-exit-offer-seen";
const oneDay = 24 * 60 * 60 * 1000;

export default function ExitIntentOffer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastSeen = Number(localStorage.getItem(storageKey) || 0);
    if (Date.now() - lastSeen < oneDay) return;

    let armed = false;
    let shown = false;
    let lastScrollY = window.scrollY;

    const reveal = () => {
      if (shown) return;
      shown = true;
      localStorage.setItem(storageKey, String(Date.now()));
      setOpen(true);
    };

    const onMouseOut = (event) => {
      if (event.clientY <= 8 && !event.relatedTarget) reveal();
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > window.innerHeight * 0.55) armed = true;
      if (armed && lastScrollY - currentY > 90 && currentY < window.innerHeight * 0.35) reveal();
      lastScrollY = currentY;
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="exit-offer-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
    >
      <section
        className="exit-offer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-offer-title"
      >
        <button
          className="exit-offer-close"
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close offer"
        >
          ×
        </button>
        <div className="exit-offer-image">
          <Image
            src="/images/cover.jpg"
            alt="The Everyday Plate Blueprint book cover"
            width={340}
            height={440}
          />
        </div>
        <div className="exit-offer-copy">
          <p className="exit-offer-kicker">WAIT! BEFORE YOU GO...</p>
          <h2 id="exit-offer-title">
            Still Deciding? The 30-Day Guarantee Means You Can Decide Later.
          </h2>
          <p>
            Get the complete 730+ page system for $29 — read it, run the
            program, and if it isn&apos;t for you, get every cent back and keep
            the book anyway.
          </p>
          <a href="#lead-form" onClick={() => setOpen(false)}>
            Yes! I Want The Blueprint For $29
          </a>
          <button
            className="exit-offer-decline"
            type="button"
            onClick={() => setOpen(false)}
          >
            No thanks, I&apos;ll keep starting over
          </button>
        </div>
      </section>
    </div>
  );
}
