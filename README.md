## Intro

Jag valde att testa Next.js till att lösa uppgiften. Fram för allt tyckte jag dom hade ganska många intressante features som skulle kunna vara relavant om man skulle bygga ett nytt projekt från grunden som båda SSR/SG, image optimization, api routes och mycket annat. Till detta projekt var det dessutom smidigt att använda den tillhörande pipeline, Vercel, till deploy samt inbygd data-fetching via getStaticProps. 

Tillsammans med Next.js testade jag styled-components för att hålla css tillsammans med tillhörande komponent. Styled-components är inte häller nått jag har testad mycket, så det var också lite trial and error.

Annars har jag försökt att dela upp appen i rimliga komponenter med mobile-first-css och dela ut logikken på samma.

## Stories

Från design-flicken testade jag att skapa ett flex-box layout utan nått framework som funkade i båda mobil, tablet och desktop-läge. Just till en uppgift i den här storlek kändes det onödigt att dra in ett verktyk som Material.ui eller liknande. Därför blev det bara styled-components til design biten - vilket kanske syns på kort-designen.
Annars försökte jag att lägga till keyboard och screen-reader-functionality. Jag tycker nog det är lika bra att tänka på från början ifall man ska jobba med myndighetstjänster eller liknande nångång i framtiden.

I functionality-flicken fick jag ganska lätt free public url och CI/CD pipeline från Vercel upp och snorre. Desseutom verkade infinity scroll som en bra idé, när man så mängden på data från api'en. Jag försökte först med ett npm-paket react-infinite-scroll, men jag fick inte ?_limit=16 att funka i fetch-metoden på api'en. Istället blev det nån custom grej med en pagination hook och useEffect i komponenten vart den behövdes.
Äntligen försökte jag att lägga till två sort-funktioner - en till office/name och en till att visa data som den hämtas från api'en. Tyvärr verkar dom bara triggas när man har renderet fler employees via scroll. Jag lyckades inte lista ut varför det var så.

Till slut från testing-flicken funkade appen utan nån konfiguration i båda Chrome, Firefox och Edge. Jag trodde också att det skulle funka i ie11 med Next.js, men det krävde lite mere konfiguration, så istället försökte jag att sätta upp end-to-end testing med cypress. Det var inte heller nått verktyg jag hade testat innan, så det var också en lite utmaning på slutet.

## Start

Att få igång appen kräver bara ```npm install och sen npm start``` och gå till [http://localhost:4000]. Annars finns sidan live på: https://tretton37-eovqlsqo7-asger991.vercel.app/