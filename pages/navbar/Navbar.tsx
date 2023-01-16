import { FC } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { Avatar, Divider } from "@chakra-ui/react";
import styles from "../../styles/Navbar.module.scss";
import { RiHome6Fill } from "react-icons/ri";
import { IoMdWallet } from "react-icons/io";
import { AiOutlineTransaction, AiOutlineLogout } from "react-icons/ai";
import { Link, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

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
          <Link
            href="/"
            className={styles.logo}
            _hover={{ textDecoration: "none" }}
          >
            <Avatar />
            FinX
          </Link>
        </div>
        <Divider />
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li id="1" className={styles.elList}>
              <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
                <Button
                  leftIcon={<RiHome6Fill size={21} />}
                  width="160px"
                  justifyContent="flex-start"
                >
                  Home
                </Button>
              </Link>
            </li>
            <li id="2" className={styles.elList}>
              <Link
                as={NextLink}
                href="/transactions"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<AiOutlineTransaction size={21} />}
                  width="160px"
                >
                  {/* <AiOutlineTransaction size={22} /> */}
                  Transactions
                </Button>
              </Link>
            </li>
            <li id="3" className={styles.elList}>
              <Link
                as={NextLink}
                href="/wallet"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<IoMdWallet size={20} />}
                  width="160px"
                  justifyContent="flex-start"
                >
                  Wallet
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.navContainer}>
        <Divider />
        <div className={styles.footer} onClick={logOut}>
          <Button
            leftIcon={<AiOutlineLogout size={22} />}
            width="160px"
            justifyContent="flex-start"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
