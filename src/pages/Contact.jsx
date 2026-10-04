import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = [
      "Namn eller företag: " + (data.get("name") || ""),
      "E-postadress: " + (data.get("email") || ""),
      "Telefonnummer: " + (data.get("phone") || ""),
      "", "Beskrivning:", data.get("message") || ""
    ].join("\n");
    setStatus("Ett e-postutkast öppnas. Skicka det i ditt e-postprogram för att kontakta Evelko.");
    window.location.href = "mailto:kontakt@evelko.se?subject=" + encodeURIComponent("Förfrågan via Evelkos webbplats") + "&body=" + encodeURIComponent(body);
  }
  return <main id="main">
<section className="page-hero has-image"><img src="/assets/evelko-technician-plant-room-hero.webp" alt="Evelko-medarbetare i teknisk miljö" width="2000" height="877" /><div className="container"><p className="eyebrow">Evelko / 04</p><h1>Kontakta oss</h1><p>Behöver ni hjälp med tjänster inom el, VVS, ventilation eller styr & regler? Tveka inte på att höra av er till oss. Vi levererar tjänster till professionella fastighetsägare i hela Mälardalen.</p></div></section>
<section className="content-section"><div className="container contact-layout"><div className="contact-points"><p className="eyebrow">Direktkontakt</p><strong>Telefon</strong><a href="tel:+4618101400">018-10 14 00</a><strong>E-post</strong><a href="mailto:kontakt@evelko.se">kontakt@evelko.se</a><strong>Besök oss</strong><p>AB Evelko<br />Stålgatan 19<br />754 50 Uppsala</p><strong>Service & support</strong><p>Växeln är bemannad 07.00–16.00 vardagar.<br />Lunchstängt 12.00–13.00.</p></div>
  <form className="form" onSubmit={handleSubmit}><p className="eyebrow">Förfrågan</p><h2>Behöver du hjälp med fastighetsteknik?</h2><div className="field"><label htmlFor="name">Namn eller företag</label><input id="name" name="name" autoComplete="name" required /></div><div className="field"><label htmlFor="email">E-postadress</label><input id="email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="phone">Telefonnummer</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div><div className="field"><label htmlFor="message">Beskriv kort vad vi kan hjälpa dig med</label><textarea id="message" name="message" required></textarea></div><button className="button" type="submit">Skicka</button><p className="form-note">Formuläret öppnar ditt e-postprogram. Du slutför och skickar meddelandet där.</p><p className="form-status" role="status" aria-live="polite">{status}</p></form>
</div></section>
<section className="content-section light"><div className="container content-grid"><div><p className="eyebrow">Kvalitet & kompetens</p><h2>Professionell fastighetsteknik.</h2></div><div className="body"><p>Evelko är medlem i Installatörsföretagen (IN), elbranschens bransch- och arbetsgivarorganisation.</p><p>Evelko AB är företagscertifierat av Incert, vilket innebär att verksamheten uppfyller högt ställda krav på kvalitet, kompetens och efterlevnad av gällande standarder.</p></div></div></section>
</main>;
}
