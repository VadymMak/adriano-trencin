import styles from './FeaturedSection.module.css';

interface FeaturedItem {
  id: string;
  image: string;
  category: string;
  name: string;
  description: string;
  price: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: 'chobotnica',
    image: '/images/featured/chobotnica.jpg',
    category: 'Morské plody',
    name: 'Chobotnica na grile',
    description: 'Grilovaná chobotnica s citrónom a olivovým olejom',
    price: '29,90€',
  },
  {
    id: 'bavette-fruti',
    image: '/images/featured/bavette-fruti.jpg',
    category: 'Cestoviny',
    name: 'Bavette Fruti di Mare',
    description: 'Čerstvé morské plody, cesnak, cherry paradajky',
    price: '14,90€',
  },
  {
    id: 'homar',
    image: '/images/featured/homar.jpg',
    category: 'Špeciality',
    name: 'Homár s prílohou',
    description: 'Čerstvý homár grilovaný na masle s bylinkami',
    price: '100€',
  },
  {
    id: 'tuna-steak',
    image: '/images/featured/tuna-steak.jpg',
    category: 'Ryby',
    name: 'Steak z tuniaka',
    description: 'Tuniak Yellowfin, sézamová kôra, wasabi omáčka',
    price: '22,00€',
  },
  {
    id: 'paella',
    image: '/images/featured/paella.jpg',
    category: 'Špeciality',
    name: 'Paella plody mora',
    description: 'Tradičná španielska paella, krevety, mušle, kalamáre',
    price: '50,00€',
  },
  {
    id: 'bavette-adriano',
    image: '/images/featured/bavette-adriano.jpg',
    category: 'Cestoviny',
    name: 'Bavette ADRIANO',
    description: 'Signaturné bavette s krevetami a šafránom',
    price: '15,50€',
  },
  {
    id: 'pizza-adriano',
    image: '/images/featured/pizza-adriano.jpg',
    category: 'Pizza',
    name: 'Pizza Adriano',
    description: 'San Marzano, mozzarella fior di latte, bazalka',
    price: '12,00€',
  },
  {
    id: 'fuzi-hluzovka',
    image: '/images/featured/fuzi-hluzovka.jpg',
    category: 'Cestoviny',
    name: 'Fuži s čiernou hľuzovkou',
    description: 'Istrijské fuži, čierna hľuzovka, parmezán, maslo',
    price: '18,90€',
  },
];

export default function FeaturedSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Заголовок */}
        <div className={styles.header}>
          <span className={styles.label}>Odporúčame</span>
          <h2 className={styles.title}>Šéfkuchárove špeciality</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Vybrané pokrmy z čerstvých surovín priamo z Jadranského mora
          </p>
        </div>

        {/* Grid карточек */}
        <div className={styles.grid}>
          {FEATURED_ITEMS.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardImage}>
                <span>{item.category}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{item.price}</span>
                  <button className={styles.orderBtn}>Objednať</button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
