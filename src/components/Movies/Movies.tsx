import styles from "./Movies.module.css";

import { Card } from "./Card/Card";
import { Empty } from "../Empty";
import { Props } from "./types";

export function Movies({ items = [] }: Props) {
  if (items.length === 0) {
    return <Empty />;
  }

  return (
    <div className={styles.movies}>
      {items?.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          subTitle={item.release_date}
          img={item.poster_path}
          description={item.overview}
        />
      ))}
    </div>
  );
}
