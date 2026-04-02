export type CategoryId =
  | 'predjedla'
  | 'cestoviny'
  | 'pizza'
  | 'ryby'
  | 'jedla-vopred'
  | 'maso'
  | 'prilohy'
  | 'salaty'
  | 'dezerty'
  | 'napoje';

export interface Dish {
  id: string;
  category: CategoryId;
  name: string;
  ingredients?: string;
  weight: string;
  price: string;
  allergens?: string;
}

export const FILTER_CATEGORIES = [
  'predjedla',
  'cestoviny',
  'pizza',
  'ryby',
  'maso',
  'salaty',
  'dezerty',
] as const;

export const MENU_SECTIONS: { id: CategoryId; dishes: Dish[] }[] = [
  {
    id: 'predjedla',
    dishes: [
      { id: 'prsut-syr',        category: 'predjedla', name: 'Domáci pršut a syr',                         ingredients: 'pršut, syr, olivy, feferóny',                      weight: '100g',  price: '11,90€', allergens: '7' },
      { id: 'studeny-tanier',   category: 'predjedla', name: 'Studený tanier',                              ingredients: 'pršut, syr, kulen, olivy',                          weight: '100g',  price: '13,90€', allergens: '7' },
      { id: 'bruschetta',       category: 'predjedla', name: 'Bruschetta buffala',                          ingredients: 'pečivo, pesto, paradajky, mozzarella',               weight: '100g',  price: '8,00€',  allergens: '1,7,8' },
      { id: 'pasteta',          category: 'predjedla', name: 'Domáca rybacia paštéta',                      ingredients: undefined,                                            weight: '50g',   price: '8,00€',  allergens: '3,4' },
      { id: 'chobotnica-salat', category: 'predjedla', name: 'Chobotnicový šalát',                         ingredients: 'chobotnica, rukola, paradajky',                     weight: '80g',   price: '12,90€', allergens: '14' },
      { id: 'adriano-salat',    category: 'predjedla', name: 'ADRIANO šalát',                              ingredients: 'chobotnica, rybacia paštéta, ančovičky',            weight: '100g',  price: '13,50€', allergens: '3,4,14' },
      { id: 'slavky',          category: 'predjedla', name: 'Slávky na víne',                             ingredients: 'slávky, víno, olivový olej, cesnak',               weight: '250g',  price: '13,50€', allergens: '1,14' },
      { id: 'carpaccio',        category: 'predjedla', name: 'Carpaccio z hovädzej sviečkovice',           ingredients: 'rukola, parmezán',                                  weight: '100g',  price: '14,50€', allergens: '7' },
      { id: 'krevety-gril',     category: 'predjedla', name: 'Krevety na grile',                           ingredients: undefined,                                            weight: '300g',  price: '19,00€', allergens: '2' },
      { id: 'krevety-cesticky', category: 'predjedla', name: 'Krevety v cestíčku s hľuzovkovou majonézou', ingredients: undefined,                                            weight: '6ks',   price: '15,00€', allergens: '1,2,3,7' },
    ],
  },
  {
    id: 'cestoviny',
    dishes: [
      { id: 'aglio-olio',      category: 'cestoviny', name: 'Bavette Aglio Olio Peperoncino',             ingredients: 'cestoviny, olivový olej, chilli',                   weight: '250g',  price: '9,00€',  allergens: '1,3' },
      { id: 'penne-pesto',     category: 'cestoviny', name: 'Penne s domácim pestom',                     ingredients: 'grilovaná zelenina, parmezán',                      weight: '250g',  price: '13,00€', allergens: '1,3,7,8' },
      { id: 'penne-kura',      category: 'cestoviny', name: 'Penne s kuracím mäsom a šampiňónmi',         ingredients: undefined,                                            weight: '250g',  price: '13,50€', allergens: '1,3,7' },
      { id: 'carbonara',       category: 'cestoviny', name: 'Bavette Carbonara',                          ingredients: 'cestoviny, slanina, vajce',                         weight: '250g',  price: '11,00€', allergens: '1,3,7' },
      { id: 'fruti-di-mare',   category: 'cestoviny', name: 'Bavette Fruti di Mare',                      ingredients: 'cestoviny, plody mora, biele víno',                 weight: '250g',  price: '14,90€', allergens: '1,2,3,14' },
      { id: 'burrata',         category: 'cestoviny', name: 'Bavette BURRATA',                            ingredients: 'cestoviny, paradajková omáčka, burrata',            weight: '250g',  price: '14,50€', allergens: '1,3,7' },
      { id: 'fuzi-burrata',    category: 'cestoviny', name: 'Fuži BURRATA pesto',                         ingredients: 'cestoviny, domáce pesto, smotana, burrata',         weight: '250g',  price: '15,50€', allergens: '1,3,7,8' },
      { id: 'bavette-adriano', category: 'cestoviny', name: 'Bavette ADRIANO',                            ingredients: 'krevety, pistáciové pesto',                         weight: '250g',  price: '15,50€', allergens: '1,2,3,8' },
      { id: 'linguine-sepia',  category: 'cestoviny', name: 'Sépiové linguine s krevetami',               ingredients: 'cherry paradajky, parmezán',                       weight: '250g',  price: '15,50€', allergens: '1,2,3,7' },
      { id: 'fuzi-hluzovka',   category: 'cestoviny', name: 'Fuži s čiernou hľuzovkou a krevetami',       ingredients: 'smotana',                                           weight: '250g',  price: '18,90€', allergens: '1,2,3,7' },
    ],
  },
  {
    id: 'pizza',
    dishes: [
      { id: 'margharita',     category: 'pizza', name: 'Margharita',                      ingredients: 'paradajková omáčka, syr, oregano',                        weight: '450g', price: '8,00€',  allergens: '1,7' },
      { id: 'kulen',          category: 'pizza', name: 'Kulen',                           ingredients: 'paradajková omáčka, syr, pikantná saláma',               weight: '500g', price: '9,00€',  allergens: '1,7' },
      { id: 'funghi',         category: 'pizza', name: 'Funghi',                          ingredients: 'paradajková omáčka, syr, šampiňóny',                    weight: '500g', price: '9,70€',  allergens: '1,7' },
      { id: 'syr-sunka',      category: 'pizza', name: 'Syr, šunka, kukurica',            ingredients: undefined,                                                weight: '500g', price: '9,50€',  allergens: '1,7' },
      { id: 'capricioza',     category: 'pizza', name: 'Capricioza',                      ingredients: 'šunka, šampiňóny, artičoky',                            weight: '500g', price: '10,00€', allergens: '1,7' },
      { id: 'quattro',        category: 'pizza', name: 'Quattro Formaggi',               ingredients: 'mozzarella, gorgonzola, parmezán, balkánsky syr',        weight: '500g', price: '10,00€', allergens: '1,7' },
      { id: 'diavola',        category: 'pizza', name: 'Diavola',                         ingredients: 'šunka, pikant. saláma, feferóny',                        weight: '500g', price: '11,00€', allergens: '1,7' },
      { id: 'istriana',       category: 'pizza', name: 'Istriana',                        ingredients: 'pršut, rukola, parmezán',                                weight: '500g', price: '11,00€', allergens: '1,7' },
      { id: 'tonno',          category: 'pizza', name: 'Tonno',                           ingredients: 'tuniak, cibuľa',                                         weight: '500g', price: '10,00€', allergens: '1,4,7' },
      { id: 'pizza-adriano',  category: 'pizza', name: 'Adriano',                         ingredients: 'rukola, krevety',                                        weight: '500g', price: '12,00€', allergens: '1,2,7' },
      { id: 'mortadella',     category: 'pizza', name: 'Mortadella burrata e pistacchio', ingredients: 'mortadella, burrata, pistácie',                          weight: '500g', price: '15,00€', allergens: '1,7,8' },
      { id: 'tartuffi',       category: 'pizza', name: 'Tartuffi',                        ingredients: 'hľuzovka',                                               weight: '500g', price: '14,00€', allergens: '1,7' },
    ],
  },
  {
    id: 'ryby',
    dishes: [
      { id: 'kalamary-gril',  category: 'ryby', name: 'Kalamáre na grile',                              ingredients: undefined,                         weight: '200g', price: '13,90€', allergens: '14' },
      { id: 'kalamary-vyp',   category: 'ryby', name: 'Vyprážané kalamáre',                             ingredients: undefined,                         weight: '200g', price: '14,50€', allergens: '14' },
      { id: 'morsky-vlk',     category: 'ryby', name: 'Filet z morského vlka na grile',                 ingredients: undefined,                         weight: '150g', price: '14,90€', allergens: '4' },
      { id: 'tuna-steak',     category: 'ryby', name: 'Steak z tuniaka na grile',                       ingredients: undefined,                         weight: '180g', price: '22,00€', allergens: '4' },
      { id: 'chobotnica',     category: 'ryby', name: 'Chobotnica na grile',                            ingredients: undefined,                         weight: '450g', price: '29,90€', allergens: '14' },
      { id: 'rybacia-misa',   category: 'ryby', name: 'Rybacia misa pre 2 osoby',                       ingredients: 'filet, kalamáre, krevety',         weight: '700g', price: '50,00€', allergens: '2,4,14' },
      { id: 'ryba-denne',     category: 'ryby', name: 'Ryba podľa dennej ponuky',                       ingredients: undefined,                         weight: '1kg',  price: '49,00€', allergens: '4' },
      { id: 'ryba-i-trieda',  category: 'ryby', name: 'Ryba I. triedy (Rombo, Zubatac)',                ingredients: undefined,                         weight: '1kg',  price: '60,00€', allergens: '4' },
    ],
  },
  {
    id: 'jedla-vopred',
    dishes: [
      { id: 'rizoto-fruti',   category: 'jedla-vopred', name: 'Rizoto Fruti di Mare (30min!)',           ingredients: undefined,                                            weight: '300g',  price: '15,90€', allergens: '2,14' },
      { id: 'chobotnica-1kg', category: 'jedla-vopred', name: 'Pečená/Grilovaná chobotnica s prílohou', ingredients: undefined,                                            weight: '1kg',   price: '60,00€', allergens: '14' },
      { id: 'paella',         category: 'jedla-vopred', name: 'Paella plody mora',                       ingredients: 'ryža, krevety, sépia, slávky, chobotnica',          weight: '800g',  price: '50,00€', allergens: '2,14' },
      { id: 'homar',          category: 'jedla-vopred', name: 'Homár s prílohou',                        ingredients: undefined,                                            weight: '1kg',   price: '100,00€', allergens: '2' },
    ],
  },
  {
    id: 'maso',
    dishes: [
      { id: 'beefsteak',        category: 'maso', name: 'Beefsteak na grile',                           ingredients: undefined,                                          weight: '200g', price: '23,50€' },
      { id: 'beefsteak-korenie',category: 'maso', name: 'Beefsteak s omáčkou zo zeleného korenia',      ingredients: undefined,                                          weight: '200g', price: '25,00€', allergens: '7' },
      { id: 'beefsteak-hluzovka',category:'maso', name: 'Beefsteak s hľuzovkovou omáčkou',              ingredients: undefined,                                          weight: '200g', price: '25,00€', allergens: '7' },
      { id: 'tagliata',         category: 'maso', name: 'Rumpsteak Tagliata',                           ingredients: 'rukola, cherry paradajky, parmezán',               weight: '200g', price: '17,00€', allergens: '7' },
      { id: 'rumpsteak',        category: 'maso', name: 'Rumpsteak s dubákovou omáčkou',                ingredients: undefined,                                          weight: '200g', price: '18,00€' },
      { id: 'kuraci-gril',      category: 'maso', name: 'Kurací steak na grile',                        ingredients: undefined,                                          weight: '200g', price: '9,50€' },
      { id: 'kuraci-sampinon',  category: 'maso', name: 'Kurací steak so šampiňónovou omáčkou',         ingredients: undefined,                                          weight: '200g', price: '10,50€', allergens: '7' },
      { id: 'panenka',          category: 'maso', name: 'Vyprážaná bravčová panenka',                   ingredients: undefined,                                          weight: '200g', price: '13,00€', allergens: '1,3,7' },
      { id: 'pljeskavica',      category: 'maso', name: 'Pljeskavica z mletého mäsa',                   ingredients: undefined,                                          weight: '200g', price: '12,00€' },
      { id: 'pljeskavica-syr',  category: 'maso', name: 'Pljeskavica plnená syrom',                     ingredients: undefined,                                          weight: '250g', price: '14,50€' },
      { id: 'cevapčiči',       category: 'maso', name: 'Čevapčiči',                                    ingredients: undefined,                                          weight: '6ks',  price: '12,00€' },
    ],
  },
  {
    id: 'prilohy' as CategoryId,
    dishes: [
      { id: 'zemiaky',          category: 'prilohy' as CategoryId, name: 'Varené zemiaky',                ingredients: undefined, weight: '150g', price: '3,00€' },
      { id: 'zemiaky-spenát',   category: 'prilohy' as CategoryId, name: 'Varené zemiaky so špenátom',    ingredients: undefined, weight: '150g', price: '3,50€' },
      { id: 'zemiaky-opekane',  category: 'prilohy', name: 'Opekané zemiaky',               ingredients: undefined, weight: '150g', price: '3,00€' },
      { id: 'hranolky',         category: 'prilohy', name: 'Zemiakové hranolky',             ingredients: undefined, weight: '150g', price: '3,00€' },
      { id: 'ryza',             category: 'prilohy', name: 'Dusená ryža',                   ingredients: undefined, weight: '150g', price: '3,00€' },
      { id: 'zelenina-gril',    category: 'prilohy', name: 'Grilovaná zelenina',             ingredients: undefined, weight: '150g', price: '5,00€' },
      { id: 'spenat',           category: 'prilohy', name: 'Dusené špenátové listy',         ingredients: undefined, weight: '150g', price: '5,00€' },
    ],
  },
  {
    id: 'salaty',
    dishes: [
      { id: 'miešaný',          category: 'salaty', name: 'Miešaný',                                    ingredients: undefined,                                          weight: '150g', price: '4,00€' },
      { id: 'paradajkovy',      category: 'salaty', name: 'Paradajkovo-cibuľový',                       ingredients: undefined,                                          weight: '150g', price: '4,00€' },
      { id: 'sopsky',           category: 'salaty', name: 'Šopský',                                     ingredients: undefined,                                          weight: '250g', price: '6,00€' },
      { id: 'tuniakovy',        category: 'salaty', name: 'Tuniakový',                                  ingredients: 'šalát, paradajky, uhorka, tuniak, cibuľa',         weight: '300g', price: '9,50€',  allergens: '4' },
      { id: 'fitness',          category: 'salaty', name: 'Fitness s kuracím mäsom',                    ingredients: 'balkánsky syr',                                    weight: '300g', price: '12,00€', allergens: '7' },
      { id: 'burrata-salat',    category: 'salaty', name: 'Burrata',                                    ingredients: 'rukola, cherry paradajky, krutóny, olivy',         weight: '300g', price: '13,00€', allergens: '7' },
      { id: 'adriano-salat2',   category: 'salaty', name: 'ADRIANO',                                    ingredients: 'mix šalátov, cherry paradajky, krevety',           weight: '300g', price: '14,50€', allergens: '2,7' },
    ],
  },
  {
    id: 'dezerty',
    dishes: [
      { id: 'souffle',          category: 'dezerty', name: 'Čokoládové soufflé so zmrzlinou',           ingredients: undefined, weight: '140g', price: '4,50€', allergens: '7' },
      { id: 'kolac',            category: 'dezerty', name: 'Koláč podľa dennej ponuky',                 ingredients: undefined, weight: '150g', price: '4,00€' },
    ],
  },
];
