import { FC } from "react";
import styles from '../../styles/Coin.module.scss';

interface CoinProps {
  
}
 
const Coin: FC<CoinProps> = () => {
  return (
    <div className={styles.coins}></div>
  );
}
 
export default Coin;