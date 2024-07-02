import type { Props } from "./types";

import {
  DEFAULT_PLACEHOLDER_IMG,
  DESC_MAX_CHARS,
  IMG_FOUND_MESSAGE_PREFIX,
  IMG_NOT_FOUND_MESSAGE,
  IMG_REPO_BASE_URL,
  TEST_ID_CARD,
} from "./constants";

import styles from "./Card.module.css";

export function Card({ title, subTitle, description, img }: Props) {
  const imgUrl = img ? `${IMG_REPO_BASE_URL}${img}` : DEFAULT_PLACEHOLDER_IMG;
  const imgAlt = img
    ? `${IMG_FOUND_MESSAGE_PREFIX} ${title}`
    : IMG_NOT_FOUND_MESSAGE;

  return (
    <article className={styles.card} data-testid={TEST_ID_CARD}>
      <aside className={styles.card__aside}>
        <figure className={styles.card__figure}>
          <img
            src={imgUrl}
            alt={imgAlt}
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
            ? `${description.slice(0, DESC_MAX_CHARS).trim()}...`
            : description}
        </p>
      </div>
    </article>
  );
}
