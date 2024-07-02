import { useMemo } from "react";

import type { Props } from "./types";

import { Card } from "./Card";
import { Empty } from "../Empty";

import styles from "./Movies.module.css";

export function Movies({ items = [] }: Props) {
  const renderItems = useMemo(() => {
    return items?.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        subTitle={item.release_date}
        img={item.poster_path}
        description={item.overview}
      />
    ));
  }, [items]);

  if (items.length === 0) {
    return <Empty message="Busca algo :)" />;
  }

  return <div className={styles.movies}>{renderItems}</div>;
}
