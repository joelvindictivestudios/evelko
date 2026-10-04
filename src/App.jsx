import React, { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import Group from './pages/Group.jsx';
import Privacy from './pages/Privacy.jsx';

const navigation = [
  ['/vara-tjanster/', 'Våra tjänster'],
  ['/om-oss/', 'Om oss'],
  ['/jobba-hos-oss/', 'Jobba hos oss'],
  ['/koncernen/', 'Koncernen'],
  ['/kontakta-oss/', 'Kontakta oss'],
];

const pages = {
  '/': [Home, 'All fastighetsteknik samlad hos en partner'],
  '/vara-tjanster/': [Services, 'Våra tjänster'],
  '/om-oss/': [About, 'Om oss'],
  '/jobba-hos-oss/': [Careers, 'Jobba hos oss'],
  '/kontakta-oss/': [Contact, 'Kontakta oss'],
  '/koncernen/': [Group, 'Koncernen'],
  '/integritetspolicy/': [Privacy, 'Integritetspolicy'],
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Evelko, till startsidan"><img src="/assets/evelko-logo.png" alt="Evelko" width="1600" height="510" /></a>
        <nav className="desktop-nav" aria-label="Huvudmeny">
          {navigation.map(([href, label]) => <a key={href} className={href === '/kontakta-oss/' ? 'nav-cta' : undefined} href={href}>{label}</a>)}
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>Meny</button>
      </div>
      <nav className="mobile-menu" id="mobile-menu" aria-label="Mobilmeny">
        {navigation.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer"><div className="container">
      <div className="footer-top"><div>
        <a className="brand" href="/" aria-label="Evelko, till startsidan"><img src="/assets/evelko-logo.png" alt="Evelko" width="1600" height="510" loading="lazy" /></a>
        <p>All fastighetsteknik samlad hos en partner. Uppsala, Enköping och Mälardalen.</p>
      </div><nav className="footer-links" aria-label="Sidfot">
        {navigation.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <a href="/integritetspolicy/">Integritetspolicy</a>
      </nav></div>
      <div className="footer-bottom"><span>© AB Evelko · Org.nr 556974-9137</span><span>Stålgatan 19, 754 50 Uppsala · <a href="tel:+4618101400">018-10 14 00</a> · <a href="mailto:kontakt@evelko.se">kontakt@evelko.se</a></span></div>
    </div></footer>
  );
}

function usePageEffects(path) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealed = document.querySelectorAll('.reveal,.converge-map,.timeline-line');
    const revealObserver = 'IntersectionObserver' in window && !reducedMotion.matches
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 })
      : null;
    revealed.forEach((element) => revealObserver ? revealObserver.observe(element) : element.classList.add('is-visible'));

    const visual = document.querySelector('.systems-visual');
    const steps = [...document.querySelectorAll('.system-step')];
    const visualTitle = document.querySelector('.visual-title');
    const setSystem = (step) => {
      if (!visual || !step) return;
      visual.dataset.active = step.dataset.system;
      if (visualTitle) visualTitle.textContent = step.querySelector('h3')?.textContent || '';
      steps.forEach((item) => item.classList.toggle('active', item === step));
    };
    const stepObserver = visual && steps.length && 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible[0]) setSystem(visible[0].target);
        }, { rootMargin: '-30% 0px -35% 0px', threshold: [0, 0.1, 0.25, 0.5] })
      : null;
    if (steps.length) setSystem(steps[0]);
    steps.forEach((step) => stepObserver?.observe(step));
    const hoverHandlers = steps.map((step) => {
      const handler = () => setSystem(step);
      step.addEventListener('mouseenter', handler);
      return [step, handler];
    });

    const heroMedia = document.querySelector('.hero-media');
    let scheduled = false;
    const onScroll = () => {
      if (!heroMedia || reducedMotion.matches || scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        heroMedia.style.transform = `translateY(${Math.min(window.scrollY * 0.16, 110)}px)`;
        scheduled = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      revealObserver?.disconnect();
      stepObserver?.disconnect();
      hoverHandlers.forEach(([step, handler]) => step.removeEventListener('mouseenter', handler));
      window.removeEventListener('scroll', onScroll);
    };
  }, [path]);
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/*$/, '/') || '/';
  const [Page, title] = pages[pathname] || pages['/'];
  usePageEffects(pathname);

  useEffect(() => {
    document.title = `Evelko — ${title}`;
  }, [title]);

  return <>
    <a className="skip" href="#main">Hoppa till innehåll</a>
    <Header />
    <Page />
    <Footer />
  </>;
}
