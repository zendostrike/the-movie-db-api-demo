import type { Props } from "./types";

import styles from "./Search.module.css";

export function Search({ value, onChange }: Props) {
  return (
    <div className={styles.search}>
      <label className={styles.search__label}>Buscar película</label>
      <input
        type="text"
        name="search"
        onChange={onChange}
        value={value}
        className={styles.search__input}
        placeholder="Harry Potter y la piedra Filosofal"
      />
    </div>
  );
}
