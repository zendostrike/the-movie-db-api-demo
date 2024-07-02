import type { Props } from "./types";

import { TEST_ID_ERROR } from "./constants";

import styles from "./Error.module.css";

export const ERROR_DEFAULT_MESSAGE = "Ocurrió un error inesperado";

export function Error({ message = ERROR_DEFAULT_MESSAGE }: Props) {
  return (
    <div className={styles.error} data-testid={TEST_ID_ERROR}>
      <img src="error.svg" className={styles.error__image} />

      <h3 className={styles.error__copy}>{message}</h3>
    </div>
  );
}
