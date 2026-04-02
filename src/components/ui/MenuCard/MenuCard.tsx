import styles from './MenuCard.module.css';

interface MenuCardProps {
  id: string;
  category: string;
  categoryLabel: string;
  name: string;
  ingredients?: string;
  weight: string;
  price: string;
  allergens?: string;
}

export default function MenuCard({
  id,
  category,
  categoryLabel,
  name,
  ingredients,
  weight,
  allergens,
  price,
}: MenuCardProps) {
  const imgPath = `/images/menu/${category}/${id}.jpg`;

  return (
    <article className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${imgPath}')` }}
      />
      <div className={styles.body}>
        <span className={styles.categoryLabel}>{categoryLabel}</span>
        <h3 className={styles.name}>{name}</h3>
        {ingredients && (
          <p className={styles.ingredients}>{ingredients}</p>
        )}
        <div className={styles.meta}>
          <span>{weight}</span>
          {allergens && <span>· {allergens}</span>}
        </div>
        <p className={styles.price}>{price}</p>
      </div>
    </article>
  );
}
