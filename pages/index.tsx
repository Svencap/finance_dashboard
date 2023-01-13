import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import routes from "../routes.js";
import { useAppDispatch } from "../redux/hooks/redux-hooks";
import { actions as usersSlice} from "../redux/slices/usersSlice";

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

  const getNormalalized = (data:any) => {
    const entities = data.reduce((acc: any, item: User) => {
      const { _id, username, password, __v } = item;
      acc[item._id] = { id: _id, username, password, __v };
      return acc;
    }, {});

    const ids = data.map((item: User) => item._id);
    return { entities, ids };
  };

  useEffect(() => {
    const { username } = JSON.parse(localStorage.getItem("user") || '');
    const fetchData = async () => {
      const { data } = await axios.post(routes.dataPath(), { username });
      const { ids, entities } = getNormalalized([data]);
      dispatch(usersSlice.addUser({ ids, entities }));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Header title="Home" />
        <div>awdawdawddwadawdawadw</div>
      </div>
    </div>
  );
}

export default HomePage;
