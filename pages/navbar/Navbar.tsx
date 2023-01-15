import { FC } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { Avatar, Divider } from "@chakra-ui/react";
import styles from "../../styles/Navbar.module.scss";
import { RiHome6Fill } from "react-icons/ri";
import { IoMdWallet } from "react-icons/io";
import { AiOutlineTransaction, AiOutlineLogout } from "react-icons/ai";
import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headNav}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo}>
            <Avatar />
            FinX
          </Link>
        </div>
        <Divider />
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li id="1" className={styles.elList}>
              <RiHome6Fill size={22} />
              Home
            </li>
            <li id="2" className={styles.elList}>
              <AiOutlineTransaction size={22} />
              Transactions
            </li>
            <li id="3" className={styles.elList}>
              <IoMdWallet size={22} />
              Wallet
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.navContainer}>
        <Divider />
        <div className={styles.footer}>
          <FiHelpCircle size={22} />
          Help
        </div>
        <div className={styles.footer} onClick={logOut}>
          <AiOutlineLogout size={22} />
          Log out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
