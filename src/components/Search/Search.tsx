import type { Props } from "./types";

import styles from "./Search.module.css";

export function Search({ errorMessage, value, onChange }: Props) {
  return (
    <div className={styles.search}>
      <label className={styles.search__label}>Buscar película</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        className={styles.search__input}
        placeholder="Harry Potter y la piedra Filosofal"
      />

      {errorMessage ? (
        <span className={styles.search__error_message}>{errorMessage}</span>
      ) : null}
    </div>
  );
}
