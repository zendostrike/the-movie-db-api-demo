import styles from "./Error.module.css";

export function Error() {
  return (
    <div className={styles.error}>
      <img src="src/assets/error.svg" className={styles.error__image} />

      <h3 className={styles.error__copy}>Algo malo sucedió :(</h3>
    </div>
  );
}
