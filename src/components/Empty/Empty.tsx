import type { Props } from "./types";

import styles from "./Empty.module.css";

import { TEST_ID_EMPTY } from "./constants";

export const EMPTY_DEFAULT_MESSAGE = "No hay elementos para mostrar";

export function Empty({ message = EMPTY_DEFAULT_MESSAGE }: Props) {
  return (
    <div className={styles.empty} data-testid={TEST_ID_EMPTY}>
      <img src="empty.svg" className={styles.empty__image} />

      <h3 className={styles.empty__copy}>{message}</h3>
    </div>
  );
}
