import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import styles from '../styles/Home.module.scss';

function HomePage() {
  const router = useRouter();
  // useEffect(() => {
  //   if (!localStorage.getItem('user')) {
  //     router.push('/login')
  //   }
  // }, [])

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
