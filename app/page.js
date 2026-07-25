import Image from "next/image";
import BuyButton from "../components/BuyButton";

const PARTS = [
  {
    num: "PART ONE",
    title: "Understanding Sustainable Fat Loss",
    text: "Realistic expectations, energy balance without obsession, portions without weighing, and the 4+1 blueprint itself.",
  },
  {
    num: "PART TWO",
    title: "A Supportive Food Environment",
    text: "The no-shame kitchen reset, smarter grocery shopping, 20-minute meal planning, and prep-once-eat-several-times routines.",
  },
  {
    num: "PART THREE",
    title: "The Recipe Library",
    text: "60 recipes across breakfasts, workday lunches, weeknight dinners, snacks & treats — plus restaurant, party, and travel playbooks.",
  },
  {
    num: "PART FOUR",
    title: "Movement, Strength & Recovery",
    text: "Daily movement that fits real life, beginner strength and mobility, and the sleep–stress–hydration foundations.",
  },
  {
    num: "PART FIVE",
    title: "The 30-Day Program",
    text: "A day-by-day implementation reset, progress tracking without obsession, troubleshooting, and the next-90-days maintenance roadmap.",
  },
  {
    num: "PART SIX",
    title: "Appendices & Reference Library",
    text: "Master food lists, substitution guide, four 7-day meal plans, movement library, printable workbook, and FAQ.",
  },
];

const FAQS = [
  {
    q: "What exactly do I get?",
    a: "A beautifully designed PDF ebook (730+ pages): 24 chapters, 60 recipes, the complete 30-day implementation program, 9 appendices, four 7-day meal plans, and printable workbook tools.",
  },
  {
    q: "How is it delivered?",
    a: "Instantly. After checkout you'll receive a secure download link on the confirmation page and by email, so you can start reading right away on any device.",
  },
  {
    q: "Can I read it on my phone or tablet?",
    a: "Yes — the PDF is readable on phones, tablets, e-readers that support PDF, and computers. The workbook pages are also designed to print cleanly if you prefer paper.",
  },
  {
    q: "Is this a diet with forbidden foods?",
    a: "No. The 4+1 framework works with your existing food culture, budget, and preferences — including restaurants, takeout, and celebrations. It teaches structure and skills, not restriction.",
  },
  {
    q: "Do you guarantee weight loss?",
    a: "No, and you should be skeptical of anyone who does. Results vary from person to person. The book is designed to help you build repeatable habits and a sustainable decision-making system over 30 days.",
  },
];

export default function Home() {
  return (
    <main>
      <nav>
        <div className="wrap">
          <a className="brand" href="#top">
            <span className="mark">EPB</span>
            <span>The Everyday Plate Blueprint</span>
          </a>
          <BuyButton label="Get the book — $29" />
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <div>
            <span className="eyebrow">A 30-Day Practical System</span>
            <h1>Build a system you can live with — not a plan you need to escape.</h1>
            <p className="lede">
              The Everyday Plate Blueprint teaches sustainable fat loss, better energy, and
              real-life eating without extremes — using a simple 4+1 plate framework that works on
              busy days, restaurant days, and low-motivation days.
            </p>
            <ul className="ticks">
              <li>24 chapters &amp; 9 practical appendices — 730+ designed pages</li>
              <li>60 flexible recipes with swap &amp; make-it-easier options</li>
              <li>The complete 30-day implementation program</li>
              <li>Printable workbook tools, meal plans &amp; progress trackers</li>
            </ul>
            <div className="price-row">
              <div className="price">
                $29 <small>one-time · instant download · PDF</small>
              </div>
              <BuyButton />
            </div>
          </div>
          <div className="coverwrap">
            <span className="badge">COMPLETE EDITION</span>
            <Image
              src="/images/cover.jpg"
              alt="The Everyday Plate Blueprint book cover"
              width={840}
              height={1088}
              priority
            />
          </div>
        </div>
      </header>

      <section>
        <div className="wrap center">
          <span className="eyebrow">The Core Framework</span>
          <h2>Every meal, four roles — plus one.</h2>
          <p className="sub">
            No forbidden foods and no weighing every bite. You learn to build any plate, bowl,
            wrap, soup, or takeout order around four flexible components, plus hydration.
          </p>
          <div className="chips">
            <div className="chip"><b>Protein</b><span>keeps you full</span></div>
            <div className="chip"><b>Produce</b><span>volume &amp; nutrients</span></div>
            <div className="chip"><b>Energy</b><span>fiber-rich carbs</span></div>
            <div className="chip"><b>Flavor / Fat</b><span>chosen on purpose</span></div>
            <div className="chip plus"><b>+ Hydration</b><span>the quiet fifth role</span></div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap center">
          <span className="eyebrow">What&rsquo;s Inside</span>
          <h2>Six parts. One repeatable method.</h2>
          <div className="parts">
            {PARTS.map((p) => (
              <div className="part" key={p.num}>
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div className="stat"><b>24</b><span>Chapters</span></div>
          <div className="stat"><b>60</b><span>Recipes</span></div>
          <div className="stat"><b>30</b><span>Day Program</span></div>
          <div className="stat"><b>9</b><span>Appendices</span></div>
          <div className="stat"><b>730+</b><span>Pages</span></div>
        </div>
      </section>

      <section>
        <div className="wrap center">
          <span className="eyebrow">Look Inside</span>
          <h2>Designed to be used, not just read.</h2>
          <p className="sub">
            Every chapter pairs plain-language teaching with tables, checklists, and fill-in tools
            you can actually apply the same day.
          </p>
          <div className="gallery">
            <figure className="shot">
              <Image src="/images/sample-chapter.jpg" alt="Chapter opener sample page" width={720} height={932} />
              <figcaption>Chapter openers</figcaption>
            </figure>
            <figure className="shot">
              <Image src="/images/sample-recipe.jpg" alt="Recipe sample page" width={720} height={932} />
              <figcaption>Recipe pages with swaps</figcaption>
            </figure>
            <figure className="shot">
              <Image src="/images/sample-workbook.jpg" alt="Workbook tool sample page" width={720} height={932} />
              <figcaption>Workbook tools</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Is It For You?</span>
            <h2>Written for real life.</h2>
          </div>
          <div className="audience">
            <div className="aud yes">
              <h3>This book is for you if…</h3>
              <ul>
                <li>You&rsquo;ve cycled between strict plans and frustrated restarts</li>
                <li>You want fat loss that survives busy weeks, travel, and family meals</li>
                <li>You&rsquo;d rather build food skills than count every calorie forever</li>
                <li>You want a concrete 30-day starting structure, not vague advice</li>
              </ul>
            </div>
            <div className="aud care">
              <h3>Check with a professional first if…</h3>
              <ul>
                <li>You are pregnant, breastfeeding, or under 18</li>
                <li>You manage a medical condition or take medication affecting appetite or weight</li>
                <li>You are recovering from surgery or illness</li>
                <li>You live with a current or previous eating disorder</li>
              </ul>
            </div>
          </div>
          <p className="disclaimer">
            <strong>Educational use only.</strong> This book provides general educational
            information for adults. It is not medical advice, a diagnosis, a treatment plan, or a
            substitute for individualized care from a qualified professional. It does not guarantee
            a particular amount of weight loss — results vary. The program is designed to help you
            build skills, routines, and a more sustainable decision-making system over 30 days.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked</h2>
          </div>
          <div className="faq-wrap">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2>Start your 30-day education — not a 30-day punishment.</h2>
          <p className="quote">&ldquo;The goal is to create habits you can repeat.&rdquo;</p>
          <BuyButton label="Get the book — $29" />
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            © 2026 [Author Name / Publishing Brand]. All rights reserved. · Educational use only —
            not medical advice.
          </div>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Refund Policy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
