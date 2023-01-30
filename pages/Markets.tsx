import { FC } from "react";
import styles from '../styles/Markets.module.scss';

interface MarketsProps {}

const Markets: FC<MarketsProps> = () => {
  return <div className={styles.markets}></div>;
};

export default Markets;
