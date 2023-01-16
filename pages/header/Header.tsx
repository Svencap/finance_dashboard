import { FC } from "react";
import styles from "../../styles/Header.module.scss";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Avatar,
  Image,
  Link,
} from "@chakra-ui/react";
import { RiArrowDownSLine, RiNotification2Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageName}>{title}</div>
      <div className={styles.navigation}>
        <div className={styles.info}>
          <Button borderRadius="3xl">
            <BsSearch size={20} />
          </Button>
          <Button size={'md'} borderRadius="3xl">
            <RiNotification2Line size={20} />
          </Button>
        </div>
        <div className={styles.menu}>
          <Menu>
            <MenuButton as={Button} colorScheme="purple">
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <Link as={NextLink} href="/profile" _hover={{ textDecoration: "none" }}>
                  <MenuItem minH="48px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/100/100"
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>My account</span>
                  </MenuItem>
                </Link>
                <MenuItem icon={<CgDarkMode size={30} />}>Mode</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
