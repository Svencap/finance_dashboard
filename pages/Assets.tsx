import { FC } from "react";
import styles from "../styles/Assets.module.scss";
interface AssetsProps {}

const Assets: FC<AssetsProps> = () => {
  return <div className={styles.homeAssets}></div>;
};

export default Assets;
