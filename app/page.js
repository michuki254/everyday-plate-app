import Image from "next/image";
import BuyButton from "../components/BuyButton";

const chapters = [
  `The "Monday-morning trap" — why the scale can jump overnight (and the five things it's actually measuring besides fat)... - pg. 13`,
  `The three standards every eating habit must pass before it deserves a place in your life (most popular diets fail all three) - pg. 9`,
  `Fat loss and weight loss are NOT the same thing. Chase the wrong one and you lose muscle, energy, and your good mood - pg. 14`,
  `The 4+1 Plate — the dead-simple framework that turns ANY plate, bowl, wrap, soup, or takeout order into a meal that works for you - pg. 55`,
  `"Add before subtract": the energy-density move that lets you eat MORE volume while losing fat - pg. 38`,
  `The quiet calories hiding in your drinks, "tastes while cooking," and grazing — and the defined-eating-event fix - pg. 42`,
  `The One-Lever Rule: why changing three things beats changing twenty (with the case study to prove it) - pg. 47`,
  `How to get portions right WITHOUT weighing every bite — useful starting amounts you can eyeball anywhere - pg. 92`,
  `Hunger, fullness, appetite, and cravings decoded — how to tell what your body is actually asking for - pg. 130`,
  `"Plan for capacity, not character" — the full-day / reduced-day / minimum-care-day system that survives your worst weeks - pg. 180`,
  `The difficult-day menu you build BEFORE the difficult day (put it on your fridge, not buried in a workbook) - pg. 181`,
  `The no-shame kitchen reset — turn the food you already own into visible, low-effort meals - pg. 246`,
  `Meal planning in 20 minutes flat — the meal-component matrix that plans a week around real life, leftovers and all - pg. 296`,
  `Prep once, eat several times — plus the safe storage flow (cool, label, store, reheat) most home cooks get wrong - pg. 318`,
  `A freezer strategy — NOT a frozen mystery collection. The five-line label that rescues future dinners - pg. 320`,
  `The START Breakfast Builder: three reliable breakfasts made from foods you already buy - pg. 360`,
  `The restaurant, takeout, party, and travel playbook — enjoy every occasion without abandoning the plan - pg. 468`,
  `The beginner effort scale + a complete no-gym exercise library (sit-to-stand, hip hinge, band row, and more) - pg. 540`,
  `The complete day-by-day 30-Day Everyday Plate Reset — exactly what to do each day, including the days that go wrong - pg. 585`,
  `Tracking progress without obsession — three real-life dashboards, including one that never touches a scale - pg. 655`,
  `PLUS: four 7-day meal plans, a master substitution guide, 60 flexible recipes, and the full printable workbook - pgs. 670-734`,
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#" aria-label="The Everyday Plate Blueprint home">
          <span className="brand-mark">EPB</span>
          <span className="brand-name">The Everyday Plate Blueprint</span>
        </a>
        <a href="#offer">Support</a>
      </header>

      <section className="hero-section">
        <div className="hero-inner">
          <p className="hero-question">
            What If Losing Fat Didn&apos;t Mean Giving Up Real Life?
          </p>
          <h1>
            <u>New Book!</u> The Practical 30-Day System For Sustainable Fat
            Loss — Without Extremes.
          </h1>
          <p className="hero-subtitle">
            No forbidden foods. No weighing every bite. A simple 4+1 plate
            framework that works on busy days, restaurant days, and
            low-motivation days.
          </p>
          <div className="hero-grid">
            <div className="hero-book">
              <Image
                src="/images/cover.jpg"
                alt="The Everyday Plate Blueprint book cover"
                width={840}
                height={1088}
                priority
              />
            </div>
            <div className="hero-offer" id="lead-form">
              <p className="offer-title">
                Get The Complete Edition — Instant Download
              </p>
              <ul className="offer-ticks">
                <li>24 chapters &amp; 9 practical appendices — 730+ pages</li>
                <li>60 flexible recipes with swaps &amp; shortcuts</li>
                <li>The complete day-by-day 30-day program</li>
                <li>Printable workbook, meal plans &amp; trackers</li>
              </ul>
              <div className="offer-price">
                $29 <span>one-time · PDF · read on any device</span>
              </div>
              <BuyButton>YES! I Want The Everyday Plate Blueprint!</BuyButton>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-intro">
        <div className="roadmap-copy">
          <h2>
            If You&apos;ve &quot;Started Over&quot; More Than Twice, The
            Problem Was Never Your Willpower. It Was The Plan.
          </h2>
          <p>
            Most plans are built for a perfect week that doesn&apos;t exist.
            Then real life returns: you sleep badly, work gets demanding, your
            kids need you, there&apos;s a birthday dinner — and the program
            that promised control makes you feel like you&apos;ve{" "}
            <strong>lost control.</strong>
          </p>
          <p>
            The Everyday Plate Blueprint starts from a different assumption:
            you don&apos;t need more discipline. You need{" "}
            <strong>a clearer system</strong> — realistic expectations, useful
            food skills, and a plan that still works when life is busy.
          </p>
          <p>
            You are not beginning a 30-day punishment. You are beginning a
            30-day education — and by day 31 you&apos;ll know exactly which
            habits are worth keeping for good.
          </p>
          <a className="blue-ribbon" href="#lead-form">
            Get The Complete Edition — $29
          </a>
        </div>
      </section>

      <div className="urgency">◉ Launch Price — Save $10 Off The $39 List Price!</div>

      <section className="book-offer" id="offer">
        <div className="book-offer-grid">
          <div className="book-column">
            <h2>
              Introducing The Everyday Plate Blueprint — The Complete
              730+ Page System For Eating Well In The Real World
            </h2>
            <Image
              className="top-book-image"
              src="/images/cover.jpg"
              alt="The Everyday Plate Blueprint complete edition"
              width={400}
              height={518}
            />
          </div>
          <div className="reviews-column">
            <h3>Take A Look Inside The Book...</h3>
            <div className="peek-grid">
              <Image
                src="/images/sample-chapter.jpg"
                alt="Chapter opener sample page"
                width={340}
                height={440}
              />
              <Image
                src="/images/sample-recipe.jpg"
                alt="Recipe sample page with swaps and shortcuts"
                width={340}
                height={440}
              />
            </div>
          </div>
        </div>
        <BuyButton>
          YES! I Want My Copy Of &quot;The Everyday Plate Blueprint&quot; Now!
        </BuyButton>
      </section>

      <section className="inside-book">
        <div className="inside-wrap">
          <div>
            <h2>
              Inside This Book, Here Are A Few Of The Skills
              <br />
              You&apos;ll Own By Day 30...
            </h2>
            <ul className="chapter-list">
              {chapters.map((chapter) => (
                <li key={chapter}>
                  <span>✓</span>
                  {chapter}
                </li>
              ))}
            </ul>
          </div>
          <div className="collage-column">
            <Image
              className="page-collage"
              src="/images/sample-recipe.jpg"
              alt="Recipe page from the book"
              width={330}
              height={427}
            />
            <Image
              className="page-collage"
              src="/images/sample-workbook.jpg"
              alt="Workbook tool page from the book"
              width={330}
              height={427}
            />
            <Image
              className="page-collage"
              src="/images/sample-chapter.jpg"
              alt="Chapter opener page from the book"
              width={330}
              height={427}
            />
          </div>
        </div>
        <h3 className="covered">
          And that&apos;s NOT even close to everything inside this
          730+ page system...
        </h3>
        <BuyButton subtitle="I'm Ready To Start! Send Me My Copy Now!">
          Get &quot;The Everyday Plate Blueprint&quot; — Instant Download!
        </BuyButton>
      </section>

      <section className="next-steps">
        <h2>➜ Here&apos;s What To Do Next</h2>
        <div className="next-card">
          <div className="next-intro">
            <div>
              <p>
                The complete edition is <strong>$29</strong> — a one-time
                payment, delivered instantly as a beautifully designed PDF you
                can read on your phone, tablet, or computer, and print
                whenever you want the workbook on paper.
              </p>
              <p>Oh, and in case you&apos;re wondering...</p>
              <h3>There Is No Catch!</h3>
              <p>
                No &quot;free trial&quot; that quietly becomes a monthly
                charge. No coaching program upsell on the next page. No
                supplements. You pay $29 once, you get the entire system,
                and it&apos;s yours forever — including any future updates to
                this edition.
              </p>
            </div>
            <Image
              src="/images/cover.jpg"
              alt="The Everyday Plate Blueprint book"
              width={300}
              height={388}
            />
          </div>
          <h3 className="not-one">Why Is It Only $29?</h3>
          <div className="reasons-grid">
            <div>
              <p>Two honest reasons:</p>
              <ol>
                <li>
                  The advice industry makes its money by keeping you
                  dependent — meal plans you must renew, apps you must
                  subscribe to, rules you must be given. This book does the
                  opposite: it teaches you the skills once, properly, so you
                  don&apos;t need to keep paying anyone (including me).
                </li>
                <li>
                  The people who most need a calm, realistic approach to fat
                  loss are usually the ones burned out — emotionally and
                  financially — by everything they already tried. $29 keeps
                  this within reach.
                </li>
              </ol>
              <p>
                There are millions of people stuck in the restart cycle who
                just need a system that respects their real life.{" "}
                <strong>You might be one of them.</strong>
              </p>
            </div>
          </div>
        </div>
        <BuyButton subtitle="I'm Ready To Start! Send Me My Copy Now!">
          Get &quot;The Everyday Plate Blueprint&quot; For $29 Now!
        </BuyButton>
      </section>

      <section className="guarantee">
        <h2>◷ Try It For A Full 30 Days...</h2>
        <div className="guarantee-body">
          <p>Here&apos;s my &quot;You&apos;ve Gotta Be Crazy&quot; guarantee:</p>
          <p>
            Read the book. Run the 30-day program. If you don&apos;t honestly
            feel it&apos;s the most practical, most realistic guide to eating
            well you&apos;ve ever used, email me within 30 days and I&apos;ll
            refund every cent — <strong>and you keep the book anyway.</strong>
          </p>
          <p>
            No forms to fill in, no &quot;exit interview,&quot; no questions
            asked. Sound fair?
          </p>
          <h3 className="limited">
            One Honest Note: <u>The $29 Launch Price Won&apos;t Stay</u>
            <br />
            When the final edition ships, the price moves to $39.
          </h3>
          <p>
            Thanks for taking the time to read this page — I hope the next 30
            days change how you eat for the next 30 years.
          </p>
          <div className="author-signoff">
            <strong>[Author Name]</strong>
          </div>
          <p className="postscript">
            <strong>P.S.</strong> If you&apos;re one of those people (like me)
            who just skips to the end of the page, here&apos;s the deal:
            <br />
            <br />
            The Everyday Plate Blueprint is a 730+ page practical system — 24
            chapters, 60 flexible recipes, a day-by-day 30-day program, and a
            printable workbook — for a one-time $29.
            <br />
            <br />
            No subscription... no upsells... no forbidden-food rules. And
            it&apos;s covered by a 30-day keep-the-book money-back guarantee,
            so the only thing you can really lose is the restart cycle.
          </p>
        </div>
        <BuyButton subtitle="I'm Ready To Start! Send Me My Copy Now!">
          Get &quot;The Everyday Plate Blueprint&quot; For $29 Now!
        </BuyButton>
      </section>

      <footer>
        <p className="footer-brand">
          <span className="brand-mark">EPB</span> The Everyday Plate Blueprint
        </p>
        <p>
          © {new Date().getFullYear()} [Author Name / Publishing Brand]. All
          rights reserved.
        </p>
        <nav className="legal-links" aria-label="Legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Refund Policy</a>
        </nav>
        <p className="disclaimer">
          Educational information only. This book is not medical advice, a
          diagnosis, or a treatment plan, and it does not guarantee a
          particular amount of weight loss — results vary. Speak with a
          qualified professional before intentionally losing weight if you are
          pregnant or breastfeeding, under 18, managing a medical condition,
          taking medication that affects appetite or weight, or living with a
          current or previous eating disorder.
        </p>
      </footer>
    </main>
  );
}
