import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import routes from "../routes.js";
import { useAppDispatch } from "../redux/hooks/redux-hooks";
import { actions as usersSlice } from "../redux/slices/usersSlice";

interface User {
  _id: number;
  username: string;
  email: string;
  password: string;
  __v: number;
}

function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getNormalalized = (data: any) => {
    const entities = data.reduce((acc: any, item: User) => {
      const { _id, username, email, password, __v } = item;
      acc[item._id] = { id: _id, username, email, password, __v };
      return acc;
    }, {});

    const ids = data.map((item: User) => item._id);
    return { entities, ids };
  };

  useEffect(() => {
    const { username } = JSON.parse(localStorage.getItem("user") || "{}");
    const fetchData = async () => {
      const { data } = await axios.post(routes.dataPath(), { username });
      const { ids, entities } = getNormalalized([data]);
      dispatch(usersSlice.addUser({ ids, entities }));
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Header title="Home" />
        <div className={styles.content}>
          <div className={styles.contentHead}>
            <div className={styles.assets}>Assets</div>
            <div className={styles.coinsContainer}>
              <div className={styles.coins}>1</div>
              <div className={styles.coins}>2</div>
              <div className={styles.coins}>3</div>
              <div className={styles.coins}>4</div>
              <div className={styles.coins}>5</div>
              <div className={styles.coins}>6</div>
            </div>
          </div>
          <div className={styles.contentFooter}>
            <div className={styles.statistic}>Я статистика</div>
            <div className={styles.markets}>Я маркеты</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
