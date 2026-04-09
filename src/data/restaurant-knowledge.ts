// ============================================================
// src/data/restaurant-knowledge.ts
// Plain-text knowledge base injected into AI system prompt.
// No embeddings needed for MVP — full text fits in GPT-4o-mini context.
// ============================================================

export const RESTAURANT_KNOWLEDGE = `
RESTAURANT: Adriano Restaurant & Cafe
ADDRESS: Námestie sv. Anny 3, Trenčín 911 01, Slovakia
PHONE: +421 949 551 553
EMAIL: adrianorestaurantcafe@gmail.com
INSTAGRAM: @adrianorestaurantcafe
FACEBOOK: adrianorestaurant

OPENING HOURS:
- Monday–Friday: 11:00–22:00
- Saturday: 11:00–23:00
- Sunday: 12:00–21:00

CUISINE: Mediterranean, Italian, Seafood, Croatian

RESERVATIONS:
- Table reservations accepted by phone, WhatsApp, or online form.
- Online reservation requires a €10 deposit (refundable if cancelled 24h in advance).
- Groups of 3–5 people: small deposit required.
- Groups of 6+ people: full deposit required.
- Cancellation policy: cancel 24h before → full refund; cancel 12h before → 50% refund; no-show → no refund.
- WhatsApp: https://wa.me/421949551553

MENU — STARTERS (Predjedlá):
- Domáci pršut a syr (pršut, syr, olivy, feferóny) 100g — 11,90€ [alergen: 7]
- Studený tanier (pršut, syr, kulen, olivy) 100g — 13,90€ [alergen: 7]
- Bruschetta buffala (pečivo, pesto, paradajky, mozzarella) 100g — 8,00€ [alergen: 1,7,8]
- Domáca rybacia paštéta 50g — 8,00€ [alergen: 3,4]
- Chobotnicový šalát (chobotnica, rukola, paradajky) 80g — 12,90€ [alergen: 14]
- ADRIANO šalát (chobotnica, rybacia paštéta, ančovičky) 100g — 13,50€ [alergen: 3,4,14]
- Slávky na víne (slávky, víno, olivový olej, cesnak) 250g — 13,50€ [alergen: 1,14]
- Carpaccio z hovädzej sviečkovice (rukola, parmezán) 100g — 14,50€ [alergen: 7]
- Krevety na grile 300g — 19,00€ [alergen: 2]
- Krevety v cestíčku s hľuzovkovou majonézou 6ks — 15,00€ [alergen: 1,2,3,7]

MENU — PASTA (Cestoviny):
- Bavette Aglio Olio Peperoncino 250g — 9,00€ [alergen: 1,3]
- Penne s domácim pestom (grilovaná zelenina, parmezán) 250g — 13,00€ [alergen: 1,3,7,8]
- Penne s kuracím mäsom a šampiňónmi 250g — 13,50€ [alergen: 1,3,7]
- Bavette Carbonara (cestoviny, slanina, vajce) 250g — 11,00€ [alergen: 1,3,7]
- Bavette Fruti di Mare (cestoviny, plody mora, biele víno) 250g — 14,90€ [alergen: 1,2,3,14]
- Bavette BURRATA (cestoviny, paradajková omáčka, burrata) 250g — 14,50€ [alergen: 1,3,7]
- Fuži BURRATA pesto (domáce pesto, smotana, burrata) 250g — 15,50€ [alergen: 1,3,7,8]
- Bavette ADRIANO (krevety, pistáciové pesto) 250g — 15,50€ [alergen: 1,2,3,8]
- Sépiové linguine s krevetami (cherry paradajky, parmezán) 250g — 15,50€ [alergen: 1,2,3,7]
- Fuži s čiernou hľuzovkou 250g — 19,00€ [alergen: 1,3,7]

MENU — PIZZA:
- Margherita 500g — 8,50€ [alergen: 1,7]
- Capricioza (šunka, šampiňóny, artičoky) 500g — 10,00€ [alergen: 1,7]
- Quattro Formaggi (mozzarella, gorgonzola, parmezán, balkánsky syr) 500g — 10,00€ [alergen: 1,7]
- Diavola (šunka, pikant. saláma, feferóny) 500g — 11,00€ [alergen: 1,7]
- Istriana (pršut, rukola, parmezán) 500g — 11,00€ [alergen: 1,7]
- Tonno (tuniak, cibuľa) 500g — 10,00€ [alergen: 1,4,7]
- Adriano (rukola, krevety) 500g — 12,00€ [alergen: 1,2,7]
- Mortadella burrata e pistacchio (mortadella, burrata, pistácie) 500g — 15,00€ [alergen: 1,7,8]
- Tartuffi (hľuzovka) 500g — 14,00€ [alergen: 1,7]

MENU — FISH & SEAFOOD (Ryby):
- Kalamáre na grile 200g — 13,90€ [alergen: 14]
- Vyprážané kalamáre 200g — 14,50€ [alergen: 14]
- Filet z morského vlka na grile 150g — 14,90€ [alergen: 4]
- Steak z tuniaka na grile 180g — 22,00€ [alergen: 4]
- Chobotnica na grile 450g — 29,90€ [alergen: 14]
- Rybacia misa pre 2 osoby (filet, kalamáre, krevety) 700g — 50,00€ [alergen: 2,4,14]
- Ryba podľa dennej ponuky 1kg — 49,00€ [alergen: 4]
- Ryba I. triedy (Rombo, Zubatac) 1kg — 60,00€ [alergen: 4]

MENU — ORDER IN ADVANCE (Jedlá vopred):
- Rizoto Fruti di Mare (30 min!) 300g — 15,90€ [alergen: 2,14]
- Pečená/Grilovaná chobotnica s prílohou 1kg — 60,00€ [alergen: 14]
- Paella plody mora (ryža, krevety, sépia, slávky, chobotnica) 800g — 50,00€ [alergen: 2,14]
- Homár s prílohou 1kg — 100,00€ [alergen: 2]

MENU — MEAT (Mäso):
- Beefsteak na grile 200g — 23,50€
- Beefsteak s omáčkou zo zeleného korenia 200g — 25,00€ [alergen: 7]
- Beefsteak s hľuzovkovou omáčkou 200g — 25,00€ [alergen: 7]
- Rumpsteak Tagliata (rukola, cherry paradajky, parmezán) 200g — 17,00€ [alergen: 7]
- Rumpsteak s dubákovou omáčkou 200g — 18,00€
- Kurací steak na grile 200g — 9,50€
- Kurací steak so šampiňónovou omáčkou 200g — 10,50€ [alergen: 7]
- Vyprážaná bravčová panenka 200g — 13,00€ [alergen: 1,3,7]
- Pljeskavica z mletého mäsa 200g — 12,00€
- Pljeskavica plnená syrom 250g — 14,50€
- Čevapčiči 6ks — 12,00€

MENU — SIDES (Prílohy):
- Varené zemiaky 150g — 3,00€
- Varené zemiaky so špenátom 150g — 3,50€
- Opekané zemiaky 150g — 3,00€
- Zemiakové hranolky 150g — 3,00€
- Dusená ryža 150g — 3,00€
- Grilovaná zelenina 150g — 5,00€
- Dusené špenátové listy 150g — 5,00€

MENU — SALADS (Šaláty):
- Miešaný šalát 150g — 4,00€
- Paradajkovo-cibuľový šalát 150g — 4,00€
- Šopský šalát 250g — 6,00€
- Tuniakový šalát 300g — 9,50€ [alergen: 4]
- Fitness s kuracím mäsom 300g — 12,00€ [alergen: 7]
- Burrata šalát (rukola, cherry paradajky, krutóny, olivy) 300g — 13,00€ [alergen: 7]
- ADRIANO šalát (mix šalátov, cherry paradajky, krevety) 300g — 14,50€ [alergen: 2,7]

MENU — DESSERTS (Dezerty):
- Čokoládové soufflé so zmrzlinou 140g — 4,50€ [alergen: 7]
- Koláč podľa dennej ponuky 150g — 4,00€

PRICE RANGE: €€ (starters from €8, pasta from €9, pizza from €8.50, meat from €9.50, fish from €13.90)

SPECIAL NOTES:
- Some dishes must be ordered in advance (marked with "30 min!" or listed in "Jedlá vopred" section)
- Lobster (Homár) and whole fish are priced per kg
- Seafood platter for 2 persons: 50€
- Allergen numbers follow EU allergen labelling regulation
`.trim();
