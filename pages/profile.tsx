import { FC, useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks/redux-hooks";

import styles from "../styles/Home.module.scss";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import { RiEditLine, RiNotification2Line } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import stylesProfile from "../styles/Profile.module.scss";
import { HiLanguage } from "react-icons/hi2";
import { MdOutlineLightMode, MdOutlineContactSupport } from "react-icons/md";
import { RiProfileLine, RiContactsLine } from "react-icons/ri";
import { BiLock } from "react-icons/bi";
import { selectors } from "../redux/slices/usersSlice";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  AvatarBadge,
  Switch,
} from "@chakra-ui/react";

import axios from "axios";
import routes from "../routes";
import { useAppDispatch } from "../redux/hooks/redux-hooks";
import { actions as usersSlice} from "../redux/slices/usersSlice";

interface User {
  _id: number;
  username: string;
  email: string;
  password: string;
  __v: number;
}


interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const [notification, setNotification] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const user = Object.values(useAppSelector((store) => store.user.entities))[0];


  const getNormalalized = (data:any) => {
    const entities = data.reduce((acc: any, item: User) => {
      const { _id, username, email, password, __v } = item;
      acc[item._id] = { id: _id, username, email, password, __v };
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
        <Header title="Profile" />
        <div className={stylesProfile.container}>
          <div className={stylesProfile.userInfo}>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/code-beast"
            >
              <AvatarBadge boxSize="50px" bg="#EDF2F7" borderColor="white">
                <RiEditLine size={25} color="black" />
              </AvatarBadge>
            </Avatar>
            <div className={stylesProfile.city}>{user?.username}</div>
            <div className={stylesProfile.orherInfo}>
              <div>{user?.email}</div>
              <div>+01 234 567 89</div>
            </div>
          </div>
          <div className={stylesProfile.userEditInfo}>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <RiProfileLine size={20} />
                  Edit profile information
                </div>
              </div>
            </div>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <RiNotification2Line size={20} />
                  Notifications
                </div>
                <Switch
                  size="md"
                  isChecked={notification}
                  onChange={() => setNotification(!notification)}
                />
              </div>
            </div>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <HiLanguage size={22} />
                  Language
                </div>
                <Menu>
                  <MenuButton
                    as={Button}
                    width="5xs"
                    bgColor="inherit"
                    _hover={{ background: "inherit" }}
                    _active={{ background: "inherit" }}
                    height="20px"
                    fontWeight={"normal"}
                  >
                    English
                  </MenuButton>
                  <MenuList>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Russian</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div className={stylesProfile.userEditInfo}>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <RiNotification2Line size={22} />
                  Security
                </div>
              </div>
            </div>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <MdOutlineLightMode size={22} />
                  Theme
                </div>
                <Menu>
                  <MenuButton
                    as={Button}
                    width="5xs"
                    bgColor="inherit"
                    _hover={{ background: "inherit" }}
                    _active={{ background: "inherit" }}
                    height="20px"
                    fontWeight={"normal"}
                  >
                    Light
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Light</MenuItem>
                    <MenuItem>Dark</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div className={stylesProfile.userEditInfo}>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <MdOutlineContactSupport size={22} />
                  Help & Support
                </div>
              </div>
            </div>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <RiContactsLine size={22} />
                  Contact us
                </div>
              </div>
            </div>
            <div className={stylesProfile.item}>
              <div className={stylesProfile.itemWrapper}>
                <div className={stylesProfile.itemIconWithText}>
                  <BiLock size={22} />
                  Privacy policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
