import { FC } from "react";
import Coin from "./Coin";
import styles from '../../styles/CoinsList.module.scss';

interface CoinsListProps {}

const CoinsList: FC<CoinsListProps> = () => {
  const list = [1, 2, 3, 4];
  return (
    <div className={styles.containerCoins}>
      {list.map((id) => (
        <Coin key={id} />
      ))}
    </div>
  );
};

export default CoinsList;
