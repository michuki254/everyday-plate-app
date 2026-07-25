# Everyday Plate Blueprint — Sales Site (Next.js)

Landing page for selling *The Everyday Plate Blueprint* ($29, PDF).
Built with Next.js (App Router), no other dependencies.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Connect Shopify checkout (required before launch)
1. In Shopify admin, create the product at $29. Use the free **Digital Downloads**
   app to attach the ebook PDF — it emails buyers a secure download link and
   disables shipping.
2. Copy the product page URL (or a cart permalink
   `https://YOURSTORE.myshopify.com/cart/VARIANT_ID:1` for one-click checkout).
3. Set `NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL` in `.env.local` (locally) and in the
   Vercel project's Environment Variables (production), then redeploy.

Until the URL is set, buy buttons show a "checkout not connected" notice.

## Deploy to Vercel
Import the GitHub repo at vercel.com/new (framework auto-detected), or run
`vercel --prod` from this folder with the Vercel CLI.

## Before real sales — content checklist
- Replace `[Author Name / Publishing Brand]` in the book AND the site footer.
- Replace temporary stock photography in the book; confirm licence records.
- Complete dietitian/medical/legal review of the manuscript.
- Add real Privacy, Terms, Refund Policy, and Contact pages (footer links are
  placeholders; Shopify can host the policy pages).
