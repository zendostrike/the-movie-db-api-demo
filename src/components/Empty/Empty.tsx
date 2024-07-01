import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src="src/assets/empty.svg" className={styles.empty__image} />

      <h3 className={styles.empty__copy}>Busca algo :)</h3>
    </div>
  );
}
