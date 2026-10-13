import { useEffect, useState } from 'react';
import './MyDoormatLanding.css';

/** Provisional signup destination — replace with the live URL when ready. */
const SIGNUP_URL = 'https://app.mydoormat.com/signup';

const FEATURES = [
  {
    title: 'Properties & Units',
    body: 'Track every property and unit, and see at a glance which are vacant or occupied.',
    image: '/image/feature-design.jpg',
  },
  {
    title: 'Tenants, Applications & Leases',
    body: 'Manage tenants, review rental applications, and keep leases organized in one place.',
    image: '/image/product-detail.jpg',
  },
  {
    title: 'Payments',
    body: 'Tenants pay through the app so rent collection stays simple for everyone.',
    image: '/image/lifestyle-entryway.jpg',
  },
  {
    title: 'Maintenance & Hire a Pro',
    body: 'Handle maintenance requests and connect with registered service providers when you need help.',
    image: '/image/feature-durability.jpg',
  },
  {
    title: 'Messaging',
    body: 'Landlords and tenants stay in sync with built-in messaging.',
    image: '/image/how-it-works.jpg',
  },
  {
    title: 'AI listing agent',
    body: 'Generate posts for open units and communicate with interested tenants using an AI agent.',
    image: '/image/social-proof-1.jpg',
  },
  {
    title: 'Reports',
    body: 'View documents and metrics so you can understand how your portfolio is performing.',
    image: '/image/social-proof-2.jpg',
  },
] as const;

const STEPS = [
  {
    step: '01',
    title: 'Add your properties',
    body: 'Set up properties and units, then mark them vacant or occupied as they change.',
  },
  {
    step: '02',
    title: 'Bring tenants on board',
    body: 'Run applications, manage leases, and keep tenant details in one workspace.',
  },
  {
    step: '03',
    title: 'Run day-to-day operations',
    body: 'Collect payments, message tenants, hire pros, and check reports whenever you need them.',
  },
] as const;

const NAV = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Product', href: '#product' },
] as const;

const MyDoormatLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'MyDoormat';
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="md-landing">
      <a className="md-skip" href="#main">
        Skip to content
      </a>

      <header className={`md-header${scrolled ? ' md-header--scrolled' : ''}`}>
        <div className="md-header__inner">
          <a className="md-logo" href="#top" aria-label="MyDoormat home">
            <img
              src="/image/mydoormat-logo.svg"
              alt="MyDoormat"
              width={160}
              height={72}
            />
          </a>

          <nav className="md-nav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="md-header__actions">
            <a className="md-btn md-btn--primary" href={SIGNUP_URL}>
              Sign up
            </a>
            <button
              type="button"
              className="md-menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="md-mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="md-visually-hidden">Menu</span>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="md-mobile-nav"
            className="md-mobile-nav"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="md-btn md-btn--primary"
              href={SIGNUP_URL}
              onClick={() => setMenuOpen(false)}
            >
              Sign up
            </a>
          </nav>
        )}
      </header>

      <main id="main">
        <section id="top" className="md-hero" aria-label="Hero">
          <div className="md-hero__media" aria-hidden="true">
            <img
              src="/image/hero-lifestyle.jpg"
              alt=""
              className="md-hero__image"
            />
            <div className="md-hero__wash" />
          </div>

          <div className="md-hero__content">
            <img
              className="md-hero__brand"
              src="/image/mydoormat-logo-light.svg"
              alt="MyDoormat"
              width={220}
              height={100}
            />
            <h1 className="md-hero__headline">
              Property management that stays at the door.
            </h1>
            <p className="md-hero__support">
              MyDoormat helps landlords manage properties, tenants, payments,
              maintenance, and messaging — with reports and an AI agent for
              listing vacant units.
            </p>
            <div className="md-hero__cta">
              <a className="md-btn md-btn--primary md-btn--large" href={SIGNUP_URL}>
                Sign up
              </a>
              <a className="md-btn md-btn--ghost md-btn--large" href="#features">
                See features
              </a>
            </div>
          </div>
        </section>

        <section className="md-value" aria-labelledby="value-heading">
          <div className="md-container md-value__grid">
            <div>
              <p className="md-eyebrow">Built for landlords</p>
              <h2 id="value-heading">
                One place for the work behind every rental.
              </h2>
            </div>
            <p className="md-value__copy">
              From vacant units to signed leases, rent payments to maintenance
              calls, MyDoormat keeps property operations organized so you can
              focus on the doors that matter.
            </p>
          </div>
        </section>

        <section id="features" className="md-features" aria-labelledby="features-heading">
          <div className="md-container">
            <div className="md-section-intro">
              <p className="md-eyebrow">Features</p>
              <h2 id="features-heading">Everything on the mat.</h2>
              <p>
                The tools landlords use daily — properties, tenants, money,
                maintenance, messages, and reports — in a single app.
              </p>
            </div>

            <ul className="md-feature-list">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="md-feature">
                  <div className="md-feature__copy">
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                  <div className="md-feature__media">
                    <img src={feature.image} alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="md-steps" aria-labelledby="steps-heading">
          <div className="md-container">
            <div className="md-section-intro md-section-intro--light">
              <p className="md-eyebrow">How it works</p>
              <h2 id="steps-heading">Simple from vacant to occupied.</h2>
            </div>

            <ol className="md-step-list">
              {STEPS.map((item) => (
                <li key={item.step} className="md-step">
                  <span className="md-step__number" aria-hidden="true">
                    {item.step}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="product" className="md-showcase" aria-labelledby="showcase-heading">
          <div className="md-container md-showcase__layout">
            <div className="md-showcase__copy">
              <p className="md-eyebrow">Product</p>
              <h2 id="showcase-heading">
                Vacant or occupied — always visible.
              </h2>
              <p>
                See unit status clearly, collect rent in-app, message tenants,
                and pull reports when you need documents or metrics. When
                something breaks, connect with registered service providers.
                When a unit opens up, let the AI agent help you post and talk
                to interested tenants.
              </p>
              <a className="md-btn md-btn--primary" href={SIGNUP_URL}>
                Sign up
              </a>
            </div>
            <figure className="md-showcase__figure">
              <img
                src="/image/lifestyle-entryway.jpg"
                alt="MyDoormat property management context"
              />
            </figure>
          </div>
        </section>

        <section className="md-final-cta" aria-labelledby="final-cta-heading">
          <div className="md-container md-final-cta__inner">
            <img
              src="/image/mydoormat-mark.svg"
              alt=""
              width={56}
              height={56}
              className="md-final-cta__mark"
            />
            <h2 id="final-cta-heading">Ready to welcome tenants in?</h2>
            <p>
              Create your MyDoormat account and start managing properties from
              one place.
            </p>
            <a className="md-btn md-btn--primary md-btn--large" href={SIGNUP_URL}>
              Sign up
            </a>
          </div>
        </section>
      </main>

      <footer className="md-footer">
        <div className="md-container md-footer__inner">
          <a className="md-logo md-logo--footer" href="#top" aria-label="MyDoormat home">
            <img
              src="/image/mydoormat-logo-light.svg"
              alt="MyDoormat"
              width={140}
              height={64}
            />
          </a>
          <div className="md-footer__links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href={SIGNUP_URL}>Sign up</a>
          </div>
          <p className="md-footer__note">© {new Date().getFullYear()} MyDoormat</p>
        </div>
      </footer>
    </div>
  );
};

export default MyDoormatLanding;
