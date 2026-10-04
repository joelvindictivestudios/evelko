import React from 'react';
export default function Home() {
  return <main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media"><img src="/assets/evelko-hero-technician-pipes.jpg" alt="Evelko-tekniker arbetar med fastighetens rörinstallationer" width="2000" height="1123" fetchPriority="high" /></div>
      <div className="hero-shade"></div><div className="hero-grid"></div>
      <div className="container hero-content">
        <p className="eyebrow">Fastighetsteknik / Uppsala & Enköping</p>
        <h1 id="hero-title">All fastighetsteknik<br />samlad hos en partner</h1>
        <p className="lead">Evelko samlar el, VVS, ventilation samt styr och automation under ett tak. Vi hjälper fastighetsägare i Uppsala och Enköping med driftsäkra och energieffektiva tekniska lösningar genom hela fastighetens livscykel.</p>
        <div className="hero-actions"><a className="button" href="#systemen">Jag vill veta mer</a><a className="button button-outline" href="/vara-tjanster/">Våra tjänster</a></div>
        <div className="hero-foot"><div className="systems" aria-label="Våra teknikområden"><span>El</span><span>VVS</span><span>Ventilation</span><span>Styr & automation</span><span>Drift & skötsel</span></div><span className="scroll-mark">Utforska Evelko</span></div>
      </div>
    </section>

    <section className="section systems-section" id="systemen" aria-labelledby="systems-title">
      <div className="container">
        <p className="eyebrow reveal">01 / Fastighetens system</p>
        <div className="section-head reveal"><h2 id="systems-title">Fem discipliner.<br />En fungerande helhet.</h2><p>Hos Evelko samlar vi fastighetstekniska tjänster inom el, VVS, ventilation samt styr, regler och automation.</p></div>
        <div className="systems-grid">
          <div className="systems-visual" data-active="el" aria-hidden="true">
            <img src="/assets/evelko-technician-control-panel.webp" alt="" width="1280" height="557" loading="lazy" />
            <div className="visual-meta"><span>Evelko / systemöversikt</span><span>01 — 05</span></div>
            <svg className="schematic" viewBox="0 0 600 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path className="frame" d="M45 55H555V440H45Z M45 165H555 M45 285H555 M190 55V440 M398 55V440" />
              <path className="route" data-layer="el" d="M45 100H185V215H330V120H555" />
              <path className="route" data-layer="vvs" d="M45 365H165V255H445V385H555" />
              <path className="route" data-layer="ventilation" d="M45 145H300V90H485V275H555" />
              <path className="route" data-layer="styr" d="M80 430V315H285V195H515V80" />
              <path className="route" data-layer="drift" d="M45 245H130V75H520V420H365V300H45" />
              <circle className="node" data-layer="el" cx="330" cy="215" r="7" /><circle className="node" data-layer="vvs" cx="445" cy="255" r="7" /><circle className="node" data-layer="ventilation" cx="300" cy="90" r="7" /><circle className="node" data-layer="styr" cx="285" cy="195" r="7" /><circle className="node" data-layer="drift" cx="365" cy="300" r="7" />
            </svg>
            <p className="visual-title">El</p>
          </div>
          <div className="systems-list">
            <article className="system-step" data-system="el"><span className="index">01 / El</span><h3>El</h3><p>El är en av de centrala delarna i all fastighetsdrift. Våra elektriker arbetar med installation, service och felsökning.</p></article>
            <article className="system-step" data-system="vvs"><span className="index">02 / VVS</span><h3>VVS</h3><p>Vi tar hand om installationer, underhåll och reparationer av rörsystem för värme, vatten och sanitet.</p></article>
            <article className="system-step" data-system="ventilation"><span className="index">03 / Ventilation</span><h3>Ventilation</h3><p>Installation, mätning och service för ett hälsosamt inomhusklimat och optimal drift över tid.</p></article>
            <article className="system-step" data-system="styr"><span className="index">04 / Styr & automation</span><h3>Styr, regler och automation</h3><p>Smarta styr- och regelsystem ger kontroll över värme, ventilation, vatten och energiflöden.</p></article>
            <article className="system-step" data-system="drift"><span className="index">05 / Drift</span><h3>Drift & skötsel</h3><p>Löpande drift och förebyggande service hjälper tekniken att fungera pålitligt dag efter dag.</p><a className="text-link" href="/vara-tjanster/">Läs om alla tjänster</a></article>
          </div>
        </div>
      </div>
    </section>

    <section className="section converge" id="en-kontakt" aria-labelledby="converge-title">
      <div className="container"><p className="eyebrow reveal">02 / Ett samlat ansvar</p><div className="section-head reveal"><h2 id="converge-title">En kontakt,<br />flera discipliner.</h2><p>Vår styrka ligger i helhetsperspektivet. Vi ser hur systemen påverkar varandra och tar ansvar för lösningen som helhet.</p></div>
        <div className="converge-map" aria-label="Fem teknikområden samordnas av Evelko">
          <div className="converge-disciplines">
            <div className="converge-discipline"><span>01</span><strong>El</strong></div>
            <div className="converge-discipline"><span>02</span><strong>VVS</strong></div>
            <div className="converge-discipline"><span>03</span><strong>Ventilation</strong></div>
            <div className="converge-discipline"><span>04</span><strong>Styr & automation</strong></div>
            <div className="converge-discipline"><span>05</span><strong>Drift & skötsel</strong></div>
          </div>
          <div className="converge-partner"><span className="eyebrow">Samordnat hos en partner</span><img src="/assets/evelko-logo.png" alt="Evelko" width="1600" height="510" loading="lazy" /><p>Fastighetens teknik.<br />Ett samlat ansvar.</p></div>
        </div>
        <p className="converge-copy reveal">Vi arbetar med installation, service och underhåll av fastighetstekniska system och är med våra kunder genom hela livscykeln från rådgivning och projektering till färdig anläggning och löpande drift.</p>
      </div>
    </section>

    <section className="section lifecycle" aria-labelledby="life-title"><div className="container">
      <p className="eyebrow reveal">03 / Genom hela livscykeln</p><div className="section-head reveal"><h2 id="life-title">Från första tanke<br />till löpande drift.</h2><p>Oavsett om det gäller ett mindre serviceuppdrag eller ett större projekt tar vi ansvar för helheten.</p></div>
      <div className="timeline-line"></div><div className="timeline">
        <div className="timeline-item"><span className="index">01</span><strong>Rådgivning</strong></div><div className="timeline-item"><span className="index">02</span><strong>Projektering</strong></div><div className="timeline-item"><span className="index">03</span><strong>Installation</strong></div><div className="timeline-item"><span className="index">04</span><strong>Färdig anläggning</strong></div><div className="timeline-item"><span className="index">05</span><strong>Service</strong></div><div className="timeline-item"><span className="index">06</span><strong>Löpande drift</strong></div>
      </div>
    </div></section>

    <section className="editorial" aria-labelledby="editorial-title">
      <div className="editorial-copy"><p className="eyebrow">04 / Driftsäkerhet & energieffektivitet</p><h2 id="editorial-title">Teknik som arbetar tillsammans.</h2><p>Genom att se hur el, VVS, ventilation och styr påverkar varandra kan vi optimera både funktion och energianvändning redan från start.</p><a className="text-link" href="/om-oss/">Om Evelko</a></div>
      <div className="editorial-image"><img src="/assets/evelko-technician-network-rack.webp" alt="Tekniker vid installation i ett tekniskt utrymme" width="1280" height="854" loading="lazy" /><span className="caption eyebrow">Installation / Drift / Samordning</span></div>
    </section>

    <section className="sparc-note" aria-labelledby="sparc-title"><div className="container"><h2 id="sparc-title">En del av Sparc Group.</h2><p>Sedan 2024 är Evelko en del av Sparc Group och vi erbjuder idag ett rikstäckande helhetserbjudande inom installation, infrastruktur och säkerhet.</p><a className="text-link" href="/koncernen/">Om koncernen</a></div></section>

    <section className="trust" aria-labelledby="trust-title"><div className="container"><p className="eyebrow">Evelko / Kunder</p><h2 id="trust-title" style={{fontSize: 'clamp(1.8rem,3vw,3rem)', marginBottom: '0'}}>Här är ett urval av kunder</h2><div className="logo-strip"><img src="/assets/customer-uppsala-kommun.webp" alt="Uppsala kommun" loading="lazy" /><img src="/assets/customer-stena-fastigheter.webp" alt="Stena Fastigheter" loading="lazy" /><img src="/assets/customer-novier.webp" alt="Novier" loading="lazy" /></div></div></section>

    <section className="career-tease" aria-labelledby="career-title"><img src="/assets/evelko-colleague-office.webp" alt="Medarbetare på Evelkos arbetsplats" width="1280" height="636" loading="lazy" /><div className="container"><p className="eyebrow">05 / Jobba hos oss</p><h2 id="career-title">Det ska vara kul<br />att gå till jobbet.</h2><p>Vi tror på människor snarare än vad som står på ett CV. Kunskap, erfarenhet, inställning och nyfikenhet är viktigt för oss.</p><a className="button" href="/jobba-hos-oss/">Jobba hos oss</a></div></section>

    <section className="contact-cta" aria-labelledby="contact-title"><div className="container contact-cta-grid"><div><p className="eyebrow">06 / Kontakt</p><h2 id="contact-title">Behöver du hjälp med fastighetsteknik?</h2></div><a className="button" href="/kontakta-oss/">Kontakta oss</a></div></section>
  </main>;
}
