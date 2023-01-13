import { FC } from "react";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Button,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import styles from "../../styles/Login.module.scss";
import CarouselSlider from "../carousel";
import { useRouter } from "next/router";

import axios from "axios";
import routes from "../../routes.js";

import { useState } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const [remember, setRemember] = useState<boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const body = { email, password, remember };
        const { data } = await axios.post(routes.loginPath(), body);
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.carouselRow}>
        <CarouselSlider />
      </div>
      <div className={styles.containerForm}>
        <Text fontSize="5xl" as={"b"}>
          Sign in with password
        </Text>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <FormControl>
            <Input type="text" size="lg" placeholder="Email address" name="email" onChange={formik.handleChange} value={formik.values.email} required/>
          </FormControl>
          <FormControl>
            <Input type="text" placeholder="Password" size="lg" name="password" onChange={formik.handleChange} value={formik.values.password} required/>
          </FormControl>
          <div className={styles.checkRow}>
            <Checkbox fontSize={"md"} isChecked={remember} onChange={(e) => {
              setRemember(!remember);
            }}>Remember me</Checkbox>
            <Text fontSize={"sm"}>
              <Link as={NextLink} color="#2678e1" href="/reset">
                Reset password
              </Link>
            </Text>
          </div>
          <Button colorScheme="blue" size="lg" type="submit">
            Sign in
          </Button>
          <div className={styles.divider}>
            <Divider width={"120px"} />
            <Text fontSize="sm">or continue with</Text>
            <Divider width={"120px"} />
          </div>
          <div className={styles.continueButtons}>
            <Button variant="outline" size="lg">
              <FaFacebook size={30} color={"#2678E1"} />
            </Button>
            <Button variant="outline" size="lg">
              <FcGoogle size={30} />
            </Button>
            <Button variant="outline" size="lg">
              <BsApple size={28} />
            </Button>
          </div>
        </form>
        <div className={styles.footer}>
          <Text fontSize="sm">
            Don't have an account?{" "}
            <Link as={NextLink} color="#2678e1" href={"/signup"}>
              Sign up
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
