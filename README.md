## Intro

Jag valde att testa Next.js till att lösa uppgiften. Framförallt tyckte jag det hade ganska många intressanta features som skulle kunna vara relavant om man skulle bygga ett nytt projekt från grunden som t.ex. SSR/SG, image optimization, api routes och mycket annat. Till detta projekt var det dessutom smidigt att använda den tillhörande pipeline, Vercel, till deploy samt inbyggd data-fetching via getStaticProps.

Tillsammans med Next.js testade jag styled-components för att hålla css tillsammans med tillhörande komponent. Styled-components är inte heller något jag har testat mycket, så det var också lite trial and error.

Annars har jag försökt att dela upp appen i rimliga komponenter med mobile-first-css och dela ut logiken på samma.

## Stories

Från design-fliken testade jag att skapa en flex-box layout utan något framework som fungerade i både mobil, tablet och desktop-läge. Just till en uppgift i den här storleken kändes det onödigt att dra in ett verktyg som Material.ui eller liknande. Därför blev det bara styled-components till designbiten - vilket kanske syns på kort-designen.
Annars försökte jag att lägga till keyboard och screen-reader-functionality. Jag tycker nog det är lika bra att tänka på från början ifall man ska jobba med myndighetstjänster eller liknande nångång i framtiden.

I functionality-fliken fick jag ganska lätt free public url och CI/CD pipeline från Vercel upp och snurra. Dessutom verkade infinity scroll som en bra idé, när man såg mängden av data från api'en. Jag försökte först med ett npm-paket react-infinite-scroll, men jag fick inte ?_limit=16 att funka i fetch-metoden på api'en. Istället blev det en custom grej med en pagination hook och useEffect i komponenten vart den behövdes.
Jag försökte även lägga till två sort-funktioner - en till office/name och en till att visa data som den hämtades från api'en. Tyvärr verkar de bara triggas när man har rendered fler employees via scroll. Jag lyckades inte lista ut varför det var så.

Till slut från testing-fliken fungerade appen utan någon konfiguration i både Chrome, Firefox och Edge. Jag trodde också att det skulle funka i ie11 med Next.js, men det krävde lite mer konfiguration, så istället försökte jag sätta upp end-to-end testing med cypress. Det var inte heller ett verktyg jag hade testat innan, så det var också en liten utmaning på slutet.

## Start

Att få igång appen kräver bara ```npm install``` och sen ```npm start``` och gå till [http://localhost:4000](http://localhost:4000). Annars finns sidan live på: https://tretton37-eovqlsqo7-asger991.vercel.app/
