# Evelko – React-version

En fristående React- och Vite-version av Evelko-förslaget. Projektet innehåller sju sidor, samtliga bilder och logotyper samt de befintliga interaktionerna.

## Starta lokalt

Kräver Node.js 20.19+ eller 22.12+.

```bash
npm install
npm run dev
```

Öppna adressen som visas i terminalen.

## Bygg för publicering

```bash
npm run build
```

Den färdiga webbplatsen hamnar i `dist/`. Vid publicering behöver webbservern skicka sidvägar som `/om-oss/` till `dist/index.html`, så att React kan visa rätt sida. Alla bilder ligger lokalt i `public/assets/`.

Kontaktformuläret öppnar ett e-postutkast hos besökaren. Det skickar inte data till någon server. Länken på sidan för integritetspolicy går till Evelkos ordinarie webbplats.
# evelko
