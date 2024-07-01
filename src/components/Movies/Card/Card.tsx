import styles from "./Card.module.css";

import { Props } from "./types";

export function Card({ title, subTitle, description, img }: Props) {
  const imgUrl = img
    ? `https://image.tmdb.org/t/p/original${img}`
    : "img_placeholder.png";

  return (
    <article className={styles.card}>
      <aside className={styles.card__aside}>
        <figure className={styles.card__figure}>
          <img
            src={imgUrl}
            alt={`Poster de ${title}`}
            className={styles.card__image}
            loading="lazy"
          />
        </figure>
      </aside>
      <header className={styles.card__header}>
        <h2 className={styles.card__title}>{title}</h2>
        <h4 className={styles.card__subtitle}>{subTitle}</h4>
      </header>
      <div className={styles.card__body}>
        <p className={styles.card__copy}>
          {description.length > 100
            ? `${description.slice(0, 100).trim()}...`
            : description}
        </p>
      </div>
      <footer className={styles.card__footer}>
        <div className={styles.card__actions}>
          <h5 className={styles.card__subtitle}>{subTitle}</h5>
        </div>
      </footer>
    </article>
  );
}
