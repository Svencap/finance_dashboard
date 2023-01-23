import { FC, useEffect, useState } from "react";
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
  const [tablet, setTablet] = useState(false);
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const [positionY, setPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  console.log(positionY);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(positionY < moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(visible);
  useEffect(() => {
    if (window.innerWidth < 1060) {
      setTablet(true);
    } else setTablet(false);

    const handleResize = () => {
      if (window.innerWidth < 1060) {
        setTablet(true);
      } else setTablet(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Фикс скрола
    <div className={!visible && positionY ? styles.show : styles.container}>
      {!tablet ? (
        <>
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
                  <Link
                    as={NextLink}
                    href="/"
                    _hover={{ textDecoration: "none" }}
                  >
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
        </>
      ) : (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileNavigate}>
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Button size="sm">
                <RiHome6Fill size={22} />
              </Button>
            </Link>
            <Button size="sm">
              <AiOutlineTransaction size={22} />
            </Button>
            <Button size="sm">
              <IoMdWallet size={22} />
            </Button>
          </div>
          <div>
            <Link
              as={NextLink}
              href="/login"
              _hover={{ textDecoration: "none" }}
            >
              <Button size="sm">
                <AiOutlineLogout size={22} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
