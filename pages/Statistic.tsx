import { FC } from "react";
import styles from "../styles/Statistic.module.scss";
interface StatisticProps {}

const Statistic: FC<StatisticProps> = () => {
  return <div className={styles.statistic}></div>;
};

export default Statistic;
