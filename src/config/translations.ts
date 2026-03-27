// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATIONS — PL / EN / DE
// ─────────────────────────────────────────────────────────────────────────────

import type { Locale } from "@/context/LanguageContext";

const translations = {
  // ── Navigation ─────────────────────────────────────────────────────────────
  "nav.smaki": { pl: "Smaki", en: "Flavors", de: "Sorten" },
  "nav.oNas": { pl: "O Nas", en: "About Us", de: "Über Uns" },
  "nav.sklep": { pl: "Sklep", en: "Shop", de: "Shop" },
  "nav.zamowTeraz": { pl: "Zamów teraz", en: "Order Now", de: "Jetzt bestellen" },
  "nav.koszyk": { pl: "Koszyk", en: "Cart", de: "Warenkorb" },
  "nav.konto": { pl: "Konto", en: "Account", de: "Konto" },

  // ── Hero ───────────────────────────────────────────────────────────────────
  "hero.badge": { pl: "Domowe Lody Rzemieślnicze", en: "Artisan Homemade Ice Cream", de: "Handgemachtes Eis" },
  "hero.badgeDesktop": { pl: "Domowe Lody Rzemieślnicze · Michów", en: "Artisan Homemade Ice Cream · Michów", de: "Handgemachtes Eis · Michów" },
  "hero.title.line1": { pl: "Domowe", en: "Homemade", de: "Hausgemachtes" },
  "hero.title.line2": { pl: "lody gałkowe.", en: "scooped ice cream.", de: "Kugeleis." },
  "hero.title.line3": { pl: "Bez pośpiechu.", en: "No rush.", de: "Ohne Eile." },
  "hero.descriptionMobile": {
    pl: "Każda gałka to efekt godzin pracy. Naturalne składniki, zero skrótów.",
    en: "Every scoop is the result of hours of work. Natural ingredients, no shortcuts.",
    de: "Jede Kugel ist das Ergebnis stundenlanger Arbeit. Natürliche Zutaten, keine Abkürzungen.",
  },
  "hero.descriptionDesktop": {
    pl: "Każda gałka to efekt godzin pracy. Lokalne składniki, zero skrótów — tylko czysty smak.",
    en: "Every scoop is the result of hours of work. Local ingredients, no shortcuts — just pure flavor.",
    de: "Jede Kugel ist das Ergebnis stundenlanger Arbeit. Lokale Zutaten, keine Abkürzungen — nur purer Geschmack.",
  },
  "hero.ctaPrimary": { pl: "Odkryj Smaki", en: "Discover Flavors", de: "Sorten entdecken" },
  "hero.ctaSecondary": { pl: "Nasza Historia", en: "Our Story", de: "Unsere Geschichte" },
  "hero.scrollIndicator": { pl: "Przewiń", en: "Scroll", de: "Scrollen" },
  "hero.imageAlt": {
    pl: "Prawdziwe domowe lody rzemieślnicze z farmy w Michowie",
    en: "Real artisan homemade ice cream from the farm in Michów",
    de: "Echtes handgemachtes Eis vom Bauernhof in Michów",
  },

  // ── Flavors Section ────────────────────────────────────────────────────────
  "flavors.banner": {
    pl: "A teraz... spróbuj naszych mistrzowskich smaków!",
    en: "And now... try our masterful flavors!",
    de: "Und jetzt... probieren Sie unsere meisterhaften Sorten!",
  },
  "flavors.heading": {
    pl: "Mistrzowska Kolekcja Smaków",
    en: "Master Flavor Collection",
    de: "Meisterhafte Sortenkollektion",
  },
  "flavors.subheading": {
    pl: "Wyjątkowe kombinacje, które pokochasz.",
    en: "Unique combinations you will love.",
    de: "Einzigartige Kombinationen, die Sie lieben werden.",
  },
  "flavors.addToCart": { pl: "Dodaj do koszyka", en: "Add to Cart", de: "In den Warenkorb" },

  // ── Flavor names & tags ────────────────────────────────────────────────────
  "flavor.slonyKarmel.name": { pl: "Słony Karmel z Himalajów", en: "Himalayan Salted Caramel", de: "Himalaya-Salzkaramell" },
  "flavor.slonyKarmel.tag": { pl: "Delikatny", en: "Delicate", de: "Zart" },
  "flavor.pistacja.name": { pl: "Sycylijska Pistacja", en: "Sicilian Pistachio", de: "Sizilianische Pistazie" },
  "flavor.pistacja.tag": { pl: "Półpłynna konsystencja", en: "Semi-liquid texture", de: "Halbflüssige Konsistenz" },
  "flavor.paloneMaslo.name": { pl: "Palone Masło z Orzechami", en: "Brown Butter with Nuts", de: "Braune Butter mit Nüssen" },
  "flavor.paloneMaslo.tag": { pl: "Chrupiące kawałki", en: "Crunchy pieces", de: "Knusprige Stücke" },
  "flavor.czekolada.name": { pl: "Wegańska Ciemna Czekolada", en: "Vegan Dark Chocolate", de: "Vegane Zartbitterschokolade" },
  "flavor.czekolada.tag": { pl: "Bogaty smak", en: "Rich flavor", de: "Reichhaltiger Geschmack" },
  "flavor.malina.name": { pl: "Malina z Naszej Farmy", en: "Farm Raspberry", de: "Himbeere vom Bauernhof" },
  "flavor.malina.tag": { pl: "Sezonowy", en: "Seasonal", de: "Saisonal" },
  "flavor.wanilia.name": { pl: "Wanilia Bourbon", en: "Bourbon Vanilla", de: "Bourbon-Vanille" },
  "flavor.wanilia.tag": { pl: "Klasyczny", en: "Classic", de: "Klassisch" },

  // ── Menu Items (full descriptions) ─────────────────────────────────────────
  "menu.slonyKarmel.desc": {
    pl: "Delikatny karmel z nutą soli himalajskiej. Idealne połączenie słodkiego i słonego.",
    en: "Delicate caramel with a hint of Himalayan salt. The perfect blend of sweet and salty.",
    de: "Zartes Karamell mit einem Hauch Himalayasalz. Die perfekte Mischung aus süß und salzig.",
  },
  "menu.slonyKarmel.longDesc": {
    pl: "Nasz Słony Karmel to hołd złożony kontrastom — delikatna, kremowa baza karmelowa spotyka się z różową solą prosto z Himalajów. Każda gałka jest ręcznie mieszana przez kilka godzin, aż osiągnie idealną, jedwabistą konsystencję. Smak jest głęboki, z nutami toffi i lekkim posmakiem soli, który sprawia, że chcesz więcej.",
    en: "Our Salted Caramel is a tribute to contrasts — a delicate, creamy caramel base meets pink salt straight from the Himalayas. Each scoop is hand-mixed for hours until it achieves the perfect silky texture. The taste is deep, with toffee notes and a light salty finish that leaves you wanting more.",
    de: "Unser Salzkaramell ist eine Hommage an Kontraste — eine zarte, cremige Karamellbasis trifft auf rosa Salz direkt aus dem Himalaya. Jede Kugel wird stundenlang von Hand gemischt, bis sie die perfekte seidige Konsistenz erreicht. Der Geschmack ist tiefgründig, mit Toffee-Noten und einem leichten salzigen Abgang.",
  },
  "menu.pistacja.desc": {
    pl: "Prawdziwe pistacje z Sycylii. Półpłynna konsystencja, intensywny smak orzechów.",
    en: "Real pistachios from Sicily. Semi-liquid texture, intense nutty flavor.",
    de: "Echte Pistazien aus Sizilien. Halbflüssige Konsistenz, intensiver Nussgeschmack.",
  },
  "menu.pistacja.longDesc": {
    pl: "Pistacje importujemy bezpośrednio z Bronte na Sycylii — regionu słynącego z najlepszych pistacji na świecie. Pasta pistacjowa jest mielona na kamiennych żarnach, co zachowuje pełnię aromatu. Rezultat? Intensywnie zielone lody o bogatym, orzechowym smaku z naturalną słodyczą.",
    en: "We import our pistachios directly from Bronte in Sicily — a region famous for the world's best pistachios. The pistachio paste is ground on stone mills, preserving the full aroma. The result? Intensely green ice cream with a rich, nutty flavor and natural sweetness.",
    de: "Wir importieren unsere Pistazien direkt aus Bronte auf Sizilien — einer Region, die für die besten Pistazien der Welt bekannt ist. Die Pistazienpaste wird auf Steinmühlen gemahlen, was das volle Aroma bewahrt. Das Ergebnis? Intensiv grünes Eis mit reichhaltigem, nussigem Geschmack und natürlicher Süße.",
  },
  "menu.paloneMaslo.desc": {
    pl: "Chrupiące kawałki orzechów w kremowym palanym maśle. Bogaty, karmelowy smak.",
    en: "Crunchy nut pieces in creamy brown butter. Rich, caramel flavor.",
    de: "Knusprige Nussstücke in cremiger brauner Butter. Reichhaltiger Karamellgeschmack.",
  },
  "menu.paloneMaslo.longDesc": {
    pl: "Masło palujemy powoli na małym ogniu, aż nabierze głębokiego, orzechowego aromatu. Do kremowej bazy dodajemy chrupiące kawałki prażonych orzechów laskowych i migdałów. Efekt — lody o złożonym smaku, które rozpływają się w ustach, zostawiając karmelowy finisz.",
    en: "We slowly brown the butter over low heat until it develops a deep, nutty aroma. To the creamy base, we add crunchy pieces of roasted hazelnuts and almonds. The result — ice cream with a complex flavor that melts in your mouth, leaving a caramel finish.",
    de: "Wir bräunen die Butter langsam bei niedriger Hitze, bis sie ein tiefes, nussiges Aroma entwickelt. Zur cremigen Basis fügen wir knusprige Stücke gerösteter Haselnüsse und Mandeln hinzu. Das Ergebnis — Eis mit komplexem Geschmack, das auf der Zunge zergeht und ein Karamell-Finish hinterlässt.",
  },
  "menu.czekolada.desc": {
    pl: "Bogaty smak ciemnej czekolady bez produktów mlecznych. 100% wegańskie.",
    en: "Rich dark chocolate flavor without dairy. 100% vegan.",
    de: "Reichhaltiger Zartbitterschokoladengeschmack ohne Milchprodukte. 100% vegan.",
  },
  "menu.czekolada.longDesc": {
    pl: "Używamy czekolady 72% kakao z Ekwadoru, którą łączymy z kremowym mlekiem kokosowym. Rezultat to intensywnie czekoladowe lody, które zachwycą zarówno wegan, jak i tradycyjnych smakoszy. Bez kompromisów — pełen, głęboki smak kakao.",
    en: "We use 72% cocoa chocolate from Ecuador, combined with creamy coconut milk. The result is intensely chocolaty ice cream that will delight both vegans and traditional food lovers. No compromises — full, deep cocoa flavor.",
    de: "Wir verwenden 72% Kakao-Schokolade aus Ecuador, kombiniert mit cremiger Kokosmilch. Das Ergebnis ist intensiv schokoladiges Eis, das sowohl Veganer als auch traditionelle Genießer begeistert. Ohne Kompromisse — voller, tiefer Kakaogeschmack.",
  },
  "menu.malina.desc": {
    pl: "Sezonowe maliny z naszego sadu. Świeże, naturalne, pełne smaku.",
    en: "Seasonal raspberries from our orchard. Fresh, natural, full of flavor.",
    de: "Saisonale Himbeeren aus unserem Obstgarten. Frisch, natürlich, voller Geschmack.",
  },
  "menu.malina.longDesc": {
    pl: "Maliny zbieramy ręcznie z naszego sadu w sezonie — od czerwca do września. Owoce przerabiamy tego samego dnia, żeby zachować maksimum świeżości. Lekko kwaskowe, z wyrazistym malinowym aromatem i delikatną słodyczą. Dostępne tylko w sezonie!",
    en: "We hand-pick raspberries from our orchard in season — from June to September. We process the fruit the same day to preserve maximum freshness. Slightly tart, with a distinct raspberry aroma and gentle sweetness. Available only in season!",
    de: "Wir pflücken die Himbeeren in der Saison von Hand in unserem Obstgarten — von Juni bis September. Wir verarbeiten die Früchte am selben Tag, um maximale Frische zu bewahren. Leicht säuerlich, mit ausgeprägtem Himbeeraroma und sanfter Süße. Nur in der Saison erhältlich!",
  },
  "menu.wanilia.desc": {
    pl: "Klasyczna wanilia bourbon z Madagaskaru. Kremowa, aromatyczna, ponadczasowa.",
    en: "Classic bourbon vanilla from Madagascar. Creamy, aromatic, timeless.",
    de: "Klassische Bourbon-Vanille aus Madagaskar. Cremig, aromatisch, zeitlos.",
  },
  "menu.wanilia.longDesc": {
    pl: "Laski wanilii bourbon sprowadzamy z Madagaskaru — każda jest ręcznie krojona i macerowana w naszej bazie przez 24 godziny. Widoczne czarne ziarenka to dowód na prawdziwą wanilię. Smak jest ciepły, kremowy, z kwiatowymi nutami — klasyk, który nigdy nie zawodzi.",
    en: "We source bourbon vanilla pods from Madagascar — each is hand-cut and macerated in our base for 24 hours. The visible black specks are proof of real vanilla. The taste is warm, creamy, with floral notes — a classic that never fails.",
    de: "Wir beziehen Bourbon-Vanilleschoten aus Madagaskar — jede wird von Hand geschnitten und 24 Stunden in unserer Basis mazeriert. Die sichtbaren schwarzen Punkte sind der Beweis für echte Vanille. Der Geschmack ist warm, cremig, mit blumigen Noten — ein Klassiker, der nie enttäuscht.",
  },
  "menu.truskawka.name": { pl: "Truskawka Polna", en: "Wild Strawberry", de: "Wilde Erdbeere" },
  "menu.truskawka.desc": {
    pl: "Dojrzałe truskawki z lokalnych pól. Słodkie, soczyste, sezonowe.",
    en: "Ripe strawberries from local fields. Sweet, juicy, seasonal.",
    de: "Reife Erdbeeren von lokalen Feldern. Süß, saftig, saisonal.",
  },
  "menu.truskawka.longDesc": {
    pl: "Truskawki polne to mniejsze, ale znacznie bardziej aromatyczne odmiany, które zbieramy z lokalnych pól. Ich intensywny, słodki smak z lekką kwaskowością tworzy lody, które smakują jak lato w najczystszej postaci. Sezonowa edycja limitowana.",
    en: "Wild strawberries are smaller but much more aromatic varieties that we pick from local fields. Their intense, sweet flavor with a slight tartness creates ice cream that tastes like summer in its purest form. Limited seasonal edition.",
    de: "Wilde Erdbeeren sind kleinere, aber viel aromatischere Sorten, die wir von lokalen Feldern ernten. Ihr intensiver, süßer Geschmack mit leichter Säure ergibt Eis, das wie Sommer in reinster Form schmeckt. Limitierte Saisonedition.",
  },
  "menu.mango.name": { pl: "Mango Alphonso", en: "Alphonso Mango", de: "Alphonso-Mango" },
  "menu.mango.desc": {
    pl: "Egzotyczne mango z Indii. Słodkie, kremowe, tropikalne.",
    en: "Exotic mango from India. Sweet, creamy, tropical.",
    de: "Exotische Mango aus Indien. Süß, cremig, tropisch.",
  },
  "menu.mango.longDesc": {
    pl: "Mango Alphonso to król wśród odmian mango — słynne z niezwykle intensywnego aromatu i kremowej konsystencji. Importujemy dojrzałe owoce z regionu Ratnagiri w Indiach. Lody mają jaskrawy, żółty kolor i tropikalny smak, który przenosi Cię prosto na plażę.",
    en: "Alphonso Mango is the king of mango varieties — famous for its incredibly intense aroma and creamy texture. We import ripe fruits from the Ratnagiri region in India. The ice cream has a bright yellow color and tropical flavor that transports you straight to the beach.",
    de: "Alphonso-Mango ist der König unter den Mangosorten — berühmt für sein unglaublich intensives Aroma und cremige Konsistenz. Wir importieren reife Früchte aus der Region Ratnagiri in Indien. Das Eis hat eine leuchtend gelbe Farbe und einen tropischen Geschmack, der Sie direkt an den Strand versetzt.",
  },

  // ── Ingredients ────────────────────────────────────────────────────────────
  "ingredient.mlekoPelne": { pl: "Mleko pełne", en: "Whole milk", de: "Vollmilch" },
  "ingredient.smietanka": { pl: "Śmietanka 36%", en: "36% cream", de: "36% Sahne" },
  "ingredient.cukierTrzcinowy": { pl: "Cukier trzcinowy", en: "Cane sugar", de: "Rohrzucker" },
  "ingredient.karamelDomowy": { pl: "Karmel domowy", en: "Homemade caramel", de: "Hausgemachtes Karamell" },
  "ingredient.solHimalajska": { pl: "Sól himalajska", en: "Himalayan salt", de: "Himalayasalz" },
  "ingredient.zoltkajaj": { pl: "Żółtka jaj", en: "Egg yolks", de: "Eigelb" },
  "ingredient.pastaPistacjowa": { pl: "Pasta pistacjowa z Bronte", en: "Bronte pistachio paste", de: "Pistazienpaste aus Bronte" },
  "ingredient.cukier": { pl: "Cukier", en: "Sugar", de: "Zucker" },
  "ingredient.masloIrlandzkie": { pl: "Masło irlandzkie", en: "Irish butter", de: "Irische Butter" },
  "ingredient.orzechy": { pl: "Orzechy laskowe", en: "Hazelnuts", de: "Haselnüsse" },
  "ingredient.migdaly": { pl: "Migdały", en: "Almonds", de: "Mandeln" },
  "ingredient.wanilia": { pl: "Wanilia", en: "Vanilla", de: "Vanille" },
  "ingredient.mlekoKokosowe": { pl: "Mleko kokosowe", en: "Coconut milk", de: "Kokosmilch" },
  "ingredient.czekolada72": { pl: "Czekolada 72% kakao", en: "72% cocoa chocolate", de: "72% Kakao-Schokolade" },
  "ingredient.cukierKokosowy": { pl: "Cukier kokosowy", en: "Coconut sugar", de: "Kokoszucker" },
  "ingredient.kakao": { pl: "Kakao", en: "Cocoa", de: "Kakao" },
  "ingredient.maliny": { pl: "Maliny świeże (40%)", en: "Fresh raspberries (40%)", de: "Frische Himbeeren (40%)" },
  "ingredient.sokCytryny": { pl: "Sok z cytryny", en: "Lemon juice", de: "Zitronensaft" },
  "ingredient.waniliaBourbon": { pl: "Wanilia bourbon z Madagaskaru", en: "Bourbon vanilla from Madagascar", de: "Bourbon-Vanille aus Madagaskar" },
  "ingredient.truskawki": { pl: "Truskawki polne (45%)", en: "Wild strawberries (45%)", de: "Wilde Erdbeeren (45%)" },
  "ingredient.pulpaMango": { pl: "Pulpa mango Alphonso (35%)", en: "Alphonso mango pulp (35%)", de: "Alphonso-Mangopulpe (35%)" },
  "ingredient.sokLimonki": { pl: "Sok z limonki", en: "Lime juice", de: "Limettensaft" },

  // ── Process Section ────────────────────────────────────────────────────────
  "process.badge": { pl: "Droga od Pola do Wafelka", en: "From Field to Cone", de: "Vom Feld zur Waffel" },
  "process.heading": { pl: "Nasz przepis jest prosty: Natura.", en: "Our recipe is simple: Nature.", de: "Unser Rezept ist einfach: Natur." },
  "process.step1.title": { pl: "Mleko z Michowa", en: "Milk from Michów", de: "Milch aus Michów" },
  "process.step1.desc": {
    pl: "Nie używamy proszku. Nasze lody powstają na bazie świeżego mleka i śmietanki z lokalnego gospodarstwa.",
    en: "We don't use powder. Our ice cream is made from fresh milk and cream from a local farm.",
    de: "Wir verwenden kein Pulver. Unser Eis wird aus frischer Milch und Sahne vom lokalen Bauernhof hergestellt.",
  },
  "process.step2.title": { pl: "Owoce z naszej Farmy", en: "Fruit from Our Farm", de: "Obst von unserem Bauernhof" },
  "process.step2.desc": {
    pl: "Truskawki, maliny i porzeczki zbieramy sami. Wiemy, co jecie, bo sami to wyhodowaliśmy.",
    en: "We pick strawberries, raspberries, and currants ourselves. We know what you eat because we grew it ourselves.",
    de: "Wir pflücken Erdbeeren, Himbeeren und Johannisbeeren selbst. Wir wissen, was Sie essen, denn wir haben es selbst angebaut.",
  },
  "process.step3.title": { pl: "Tradycyjna produkcja", en: "Traditional Production", de: "Traditionelle Herstellung" },
  "process.step3.desc": {
    pl: "Kręcimy lody małymi partiami, dbając o to, by każda gałka była idealnie kremowa.",
    en: "We churn ice cream in small batches, ensuring every scoop is perfectly creamy.",
    de: "Wir rühren Eis in kleinen Chargen, damit jede Kugel perfekt cremig ist.",
  },

  // ── About Section ──────────────────────────────────────────────────────────
  "about.badge": { pl: "O nas", en: "About Us", de: "Über Uns" },
  "about.heading.line1": { pl: "Ice Cream –", en: "Ice Cream –", de: "Ice Cream –" },
  "about.heading.line2": { pl: "Rodzinna Pasja z Michowa", en: "Family Passion from Michów", de: "Familienleidenschaft aus Michów" },
  "about.p1": {
    pl: "Nasza przygoda zaczęła się na gospodarstwie. Chcieliśmy stworzyć deser, który smakuje tak, jak owoce zerwane prosto z krzaka i świeże mleko u babci.",
    en: "Our adventure started on the farm. We wanted to create a dessert that tastes like fruit picked straight from the bush and fresh milk at grandma's.",
    de: "Unser Abenteuer begann auf dem Bauernhof. Wir wollten ein Dessert kreieren, das wie frisch gepflückte Früchte und frische Milch bei Oma schmeckt.",
  },
  "about.p2": {
    pl: "Dziś dzielimy się tym smakiem z Wami. Ice Cream to nie tylko biznes, to nasz sposób na pokazanie, że prawdziwe jedzenie nie potrzebuje ulepszaczy.",
    en: "Today we share this taste with you. Ice Cream is not just a business, it's our way of showing that real food doesn't need enhancers.",
    de: "Heute teilen wir diesen Geschmack mit Ihnen. Ice Cream ist nicht nur ein Geschäft, es ist unsere Art zu zeigen, dass echtes Essen keine Zusätze braucht.",
  },
  "about.p3": {
    pl: "Zapraszamy do naszego świata, gdzie czas płynie wolniej, a lody smakują słońcem.",
    en: "Welcome to our world, where time flows slower and ice cream tastes like sunshine.",
    de: "Willkommen in unserer Welt, wo die Zeit langsamer vergeht und Eis nach Sonnenschein schmeckt.",
  },
  "about.ctaVisit": { pl: "Odwiedź nas", en: "Visit Us", de: "Besuchen Sie uns" },
  "about.ctaProcess": { pl: "Jak powstają", en: "How We Make It", de: "Wie wir es machen" },
  "about.imageAlt": {
    pl: "Trzy gałki lodów w rożkach — pistacjowe, truskawkowe, śmietankowe",
    en: "Three scoops of ice cream in cones — pistachio, strawberry, cream",
    de: "Drei Eiskugeln in Waffeln — Pistazie, Erdbeere, Sahne",
  },
  "about.since": { pl: "od", en: "since", de: "seit" },

  // ── Shop Section ───────────────────────────────────────────────────────────
  "shop.heading.line1": { pl: "Smakluj", en: "Savor", de: "Genießen" },
  "shop.heading.line2": { pl: "Radość", en: "the Joy", de: "Sie die" },
  "shop.heading.line3": { pl: "Domu.", en: "of Home.", de: "Freude." },
  "shop.orderNow": { pl: "Zamów teraz", en: "Order Now", de: "Jetzt bestellen" },
  "shop.popularBuckets": { pl: "Najpopularniejsze kubełki", en: "Most Popular Tubs", de: "Beliebteste Becher" },
  "shop.takeHome": { pl: "Weź do domu", en: "Take Home", de: "Für Zuhause" },
  "shop.seeFullMenu": { pl: "Zobacz całe menu", en: "See Full Menu", de: "Ganzes Menü ansehen" },

  // ── B2B Section ────────────────────────────────────────────────────────────
  "b2b.badge": { pl: "Współpraca", en: "Partnership", de: "Partnerschaft" },
  "b2b.heading": { pl: "Serwuj Ice Cream w swoim lokalu!", en: "Serve Ice Cream in your venue!", de: "Servieren Sie Ice Cream in Ihrem Lokal!" },
  "b2b.subheading": {
    pl: "Szukasz produktu, który wyróżni Cię na tle konkurencji?",
    en: "Looking for a product that will set you apart from the competition?",
    de: "Suchen Sie ein Produkt, das Sie von der Konkurrenz abhebt?",
  },
  "b2b.benefit1.title": { pl: "Czysta Etykieta", en: "Clean Label", de: "Sauberes Etikett" },
  "b2b.benefit1.desc": {
    pl: "Produkt 100% naturalny, bez sztucznych aromatów.",
    en: "100% natural product, no artificial flavors.",
    de: "100% natürliches Produkt, ohne künstliche Aromen.",
  },
  "b2b.benefit2.title": { pl: "Lokalność", en: "Locality", de: "Regionalität" },
  "b2b.benefit2.desc": {
    pl: "Przyciągnij klientów, którzy cenią produkty prosto od rolnika.",
    en: "Attract customers who value products straight from the farmer.",
    de: "Ziehen Sie Kunden an, die Produkte direkt vom Bauern schätzen.",
  },
  "b2b.benefit3.title": { pl: "Wsparcie", en: "Support", de: "Unterstützung" },
  "b2b.benefit3.desc": {
    pl: "Dostarczamy lody zawsze świeże i na czas.",
    en: "We deliver ice cream always fresh and on time.",
    de: "Wir liefern Eis immer frisch und pünktlich.",
  },
  "b2b.downloadOffer": { pl: "Pobierz ofertę dla partnerów", en: "Download Partner Offer", de: "Partnerangebot herunterladen" },
  "b2b.askCooperation": { pl: "Zapytaj o współpracę", en: "Ask About Partnership", de: "Partnerschaft anfragen" },

  // ── FAQ Section ────────────────────────────────────────────────────────────
  "faq.badge": { pl: "Najczęstsze pytania", en: "Frequently Asked Questions", de: "Häufig gestellte Fragen" },
  "faq.heading": { pl: "Masz pytanie? Mamy odpowiedź.", en: "Have a question? We have the answer.", de: "Haben Sie eine Frage? Wir haben die Antwort." },
  "faq.q1": {
    pl: "Czy Wasze lody są bezglutenowe?",
    en: "Are your ice creams gluten-free?",
    de: "Ist Ihr Eis glutenfrei?",
  },
  "faq.a1": {
    pl: "Większość naszych smaków owocowych (sorbetów) oraz lody mleczne są naturalnie bezglutenowe. O szczegóły zawsze możesz zapytać naszą obsługę!",
    en: "Most of our fruit flavors (sorbets) and milk ice creams are naturally gluten-free. You can always ask our staff for details!",
    de: "Die meisten unserer Fruchtsorten (Sorbets) und Milcheissorten sind von Natur aus glutenfrei. Fragen Sie unser Personal für Details!",
  },
  "faq.q2": {
    pl: "Gdzie mogę kupić lody w większym opakowaniu?",
    en: "Where can I buy ice cream in larger packaging?",
    de: "Wo kann ich Eis in größeren Verpackungen kaufen?",
  },
  "faq.a2": {
    pl: "Prowadzimy sprzedaż na wynos w naszych punktach – pakujemy lody w specjalne termoboxy, abyś mógł cieszyć się nimi w domu.",
    en: "We sell takeaway at our locations – we pack ice cream in special thermal boxes so you can enjoy them at home.",
    de: "Wir verkaufen zum Mitnehmen in unseren Filialen – wir verpacken Eis in spezielle Thermoboxen, damit Sie es zu Hause genießen können.",
  },
  "faq.q3": {
    pl: "Czy robicie lody na zamówienie (np. na wesela)?",
    en: "Do you make custom ice cream (e.g., for weddings)?",
    de: "Machen Sie Eis auf Bestellung (z.B. für Hochzeiten)?",
  },
  "faq.a3": {
    pl: "Tak! Obsługujemy imprezy okolicznościowe. Skontaktuj się z nami, aby ustalić szczegóły.",
    en: "Yes! We cater special events. Contact us to arrange the details.",
    de: "Ja! Wir betreuen besondere Veranstaltungen. Kontaktieren Sie uns für die Details.",
  },
  "faq.notFound": { pl: "Nie znalazłeś odpowiedzi na swoje pytanie?", en: "Didn't find the answer to your question?", de: "Keine Antwort auf Ihre Frage gefunden?" },
  "faq.contactUs": { pl: "Skontaktuj się z nami", en: "Contact Us", de: "Kontaktieren Sie uns" },

  // ── Order Section ──────────────────────────────────────────────────────────
  "order.badge": { pl: "Jak zamawiać", en: "How to Order", de: "So bestellen Sie" },
  "order.heading": { pl: "Proste jak", en: "Simple as", de: "Einfach wie" },
  "order.headingEm": { pl: "smak wanilii", en: "vanilla flavor", de: "Vanillegeschmack" },
  "order.step1.title": { pl: "Wybierz smaki", en: "Choose Flavors", de: "Sorten wählen" },
  "order.step1.desc": {
    pl: "Przeglądaj nasze menu i wybierz ulubione smaki spośród ponad 40 propozycji.",
    en: "Browse our menu and choose your favorite flavors from over 40 options.",
    de: "Durchstöbern Sie unser Menü und wählen Sie Ihre Lieblingssorten aus über 40 Optionen.",
  },
  "order.step2.title": { pl: "Skontaktuj się", en: "Contact Us", de: "Kontaktieren Sie uns" },
  "order.step2.desc": {
    pl: "Zadzwoń lub napisz do nas. Odpowiadamy w ciągu godziny w godzinach otwarcia.",
    en: "Call or write to us. We respond within an hour during opening hours.",
    de: "Rufen Sie uns an oder schreiben Sie uns. Wir antworten innerhalb einer Stunde während der Öffnungszeiten.",
  },
  "order.step3.title": { pl: "Odbierz zamówienie", en: "Pick Up Your Order", de: "Bestellung abholen" },
  "order.step3.desc": {
    pl: "Odbierz świeże lody w naszej lodziarni lub zamów dostawę na swój event.",
    en: "Pick up fresh ice cream from our parlor or order delivery for your event.",
    de: "Holen Sie frisches Eis aus unserer Eisdiele ab oder bestellen Sie Lieferung für Ihr Event.",
  },
  "order.callNow": { pl: "Zadzwoń teraz", en: "Call Now", de: "Jetzt anrufen" },
  "order.writeUs": { pl: "Napisz do nas", en: "Write to Us", de: "Schreiben Sie uns" },

  // ── Contact Section ────────────────────────────────────────────────────────
  "contact.heading": { pl: "Masz ochotę na prawdziwe lody?", en: "Craving real ice cream?", de: "Lust auf echtes Eis?" },
  "contact.subheading": { pl: "Czekamy na Was codziennie od 11:00 do 20:00", en: "We're open daily from 11:00 to 20:00", de: "Wir sind täglich von 11:00 bis 20:00 geöffnet" },
  "contact.visitUs": { pl: "Odwiedź nas →", en: "Visit Us →", de: "Besuchen Sie uns →" },
  "contact.whereToFind": { pl: "Gdzie nas", en: "Where to", de: "Wo Sie uns" },
  "contact.whereToFindEm": { pl: "znajdziesz?", en: "find us?", de: "finden?" },
  "contact.seeAllBranches": { pl: "Zobacz wszystkie filie", en: "See All Branches", de: "Alle Filialen ansehen" },
  "contact.openingHours": { pl: "Godziny otwarcia", en: "Opening Hours", de: "Öffnungszeiten" },
  "contact.daily": { pl: "Codziennie", en: "Daily", de: "Täglich" },
  "contact.phone": { pl: "Telefon", en: "Phone", de: "Telefon" },
  "contact.email": { pl: "E-mail", en: "Email", de: "E-Mail" },
  "contact.address": { pl: "Lodziarnia Icemania", en: "Icemania Parlor", de: "Eisdiele Icemania" },
  "contact.getDirections": { pl: "Jak dojechać?", en: "Get Directions", de: "Wegbeschreibung" },
  "contact.ourLocations": { pl: "Nasze lokalizacje", en: "Our Locations", de: "Unsere Standorte" },
  "contact.close": { pl: "Zamknij", en: "Close", de: "Schließen" },

  // ── Footer ─────────────────────────────────────────────────────────────────
  "footer.tagline": { pl: "Made with care in Kraków", en: "Made with care in Kraków", de: "Mit Liebe in Kraków gemacht" },
  "footer.desc": {
    pl: "Prawdziwe lody. Bez pośpiechu. Rzemieślniczo od 2022.",
    en: "Real ice cream. No rush. Artisan since 2022.",
    de: "Echtes Eis. Ohne Eile. Handwerklich seit 2022.",
  },
  "footer.aboutUs": { pl: "O nas", en: "About Us", de: "Über Uns" },
  "footer.ourStory": { pl: "Nasza historia", en: "Our Story", de: "Unsere Geschichte" },
  "footer.howToOrder": { pl: "Jak zamawiać", en: "How to Order", de: "So bestellen Sie" },
  "footer.shop": { pl: "Sklep", en: "Shop", de: "Shop" },
  "footer.allRights": { pl: "Wszelkie prawa zastrzeżone.", en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
  "footer.madeWith": { pl: "i naturalnych składników", en: "and natural ingredients", de: "und natürlicher Zutaten" },

  // ── Menu Page ──────────────────────────────────────────────────────────────
  "menuPage.backHome": { pl: "Powrót do strony głównej", en: "Back to Homepage", de: "Zurück zur Startseite" },
  "menuPage.title": { pl: "Pełne Menu", en: "Full Menu", de: "Vollständiges Menü" },
  "menuPage.subtitle1": {
    pl: "Odkryj wszystkie nasze mistrzowskie smaki.",
    en: "Discover all our masterful flavors.",
    de: "Entdecken Sie alle unsere meisterhaften Sorten.",
  },
  "menuPage.subtitle2": {
    pl: "Każda gałka to efekt godzin pracy i pasji.",
    en: "Every scoop is the result of hours of work and passion.",
    de: "Jede Kugel ist das Ergebnis stundenlanger Arbeit und Leidenschaft.",
  },
  "menuPage.readyToOrder": { pl: "Gotowy na zamówienie?", en: "Ready to Order?", de: "Bereit zu bestellen?" },
  "menuPage.readyToOrderDesc": {
    pl: "Skontaktuj się z nami, aby złożyć zamówienie lub odwiedzić naszą pracownię.",
    en: "Contact us to place an order or visit our workshop.",
    de: "Kontaktieren Sie uns, um eine Bestellung aufzugeben oder unsere Werkstatt zu besuchen.",
  },
  "menuPage.contactUs": { pl: "Skontaktuj się z nami", en: "Contact Us", de: "Kontaktieren Sie uns" },
  "menuPage.addToCart": { pl: "Dodaj do koszyka", en: "Add to Cart", de: "In den Warenkorb" },
  "menuPage.artisanIceCream": { pl: "Lody rzemieślnicze", en: "Artisan Ice Cream", de: "Handgemachtes Eis" },
  "menuPage.ingredients": { pl: "Skład", en: "Ingredients", de: "Zutaten" },
  "menuPage.back": { pl: "Powrót", en: "Back", de: "Zurück" },

  // ── Cart Page ──────────────────────────────────────────────────────────────
  "cart.continueShopping": { pl: "Kontynuuj zakupy", en: "Continue Shopping", de: "Weiter einkaufen" },
  "cart.title": { pl: "Twój Koszyk", en: "Your Cart", de: "Ihr Warenkorb" },
  "cart.empty": { pl: "Twój koszyk jest pusty", en: "Your cart is empty", de: "Ihr Warenkorb ist leer" },
  "cart.seeMenu": { pl: "Zobacz menu", en: "See Menu", de: "Menü ansehen" },
  "cart.perUnit": { pl: "/ szt.", en: "/ each", de: "/ Stück" },
  "cart.remove": { pl: "Usuń", en: "Remove", de: "Entfernen" },
  "cart.summary": { pl: "Podsumowanie", en: "Summary", de: "Zusammenfassung" },
  "cart.products": { pl: "Produkty", en: "Products", de: "Produkte" },
  "cart.shipping": { pl: "Dostawa", en: "Shipping", de: "Versand" },
  "cart.total": { pl: "Razem", en: "Total", de: "Gesamt" },
  "cart.checkout": { pl: "Przejdź do płatności", en: "Proceed to Checkout", de: "Zur Kasse" },
  "cart.addMore": { pl: "Dodaj więcej produktów", en: "Add More Products", de: "Weitere Produkte hinzufügen" },

  // ── Account Page ───────────────────────────────────────────────────────────
  "account.orders": { pl: "Zamówienia", en: "Orders", de: "Bestellungen" },
  "account.archive": { pl: "Archiwum", en: "Archive", de: "Archiv" },
  "account.myAccount": { pl: "Moje konto", en: "My Account", de: "Mein Konto" },

  // ── Mobile Bottom Nav ──────────────────────────────────────────────────────
  "bottomNav.home": { pl: "Home", en: "Home", de: "Home" },
  "bottomNav.flavors": { pl: "Smaki", en: "Flavors", de: "Sorten" },
  "bottomNav.menu": { pl: "Menu", en: "Menu", de: "Menü" },
  "bottomNav.cart": { pl: "Koszyk", en: "Cart", de: "Warenkorb" },
  "bottomNav.account": { pl: "Konto", en: "Account", de: "Konto" },

  // ── Language Switcher ──────────────────────────────────────────────────────
  "lang.pl": { pl: "Polski", en: "Polish", de: "Polnisch" },
  "lang.en": { pl: "English", en: "English", de: "Englisch" },
  "lang.de": { pl: "Deutsch", en: "Deutsch", de: "Deutsch" },

  // ── Branch data ────────────────────────────────────────────────────────────
  "branch.main": { pl: "Icemania Michów (główna)", en: "Icemania Michów (main)", de: "Icemania Michów (Haupt)" },
  "branch.lubartow": { pl: "Icemania Lubartów", en: "Icemania Lubartów", de: "Icemania Lubartów" },
  "branch.lublin": { pl: "Icemania Lublin", en: "Icemania Lublin", de: "Icemania Lublin" },
  "branch.mainHours": { pl: "Codziennie 11:00 – 20:00", en: "Daily 11:00 – 20:00", de: "Täglich 11:00 – 20:00" },
  "branch.lublinHours": { pl: "Codziennie 10:00 – 21:00", en: "Daily 10:00 – 21:00", de: "Täglich 10:00 – 21:00" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[locale] ?? entry.pl;
}

export default translations;
