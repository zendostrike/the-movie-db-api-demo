import styles from "./Loader.module.css";
import { TEST_ID_LOADER } from "./constants";

export function Loader() {
  return (
    <div data-testid={TEST_ID_LOADER} className={styles.container}>
      <div className={styles.cube}></div>
    </div>
  );
}
