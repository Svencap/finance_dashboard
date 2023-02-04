import React, { useState } from "react";

import { Form, useFormik } from "formik";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Button,
  Divider,
  Text,
  Link,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import * as yup from "yup";

import axios from "axios";
import routes from "../../routes";
import styles from "../../styles/Login.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";



const SingUp = () => {
  const router = useRouter();

  const signUpSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "3 to 20 characters")
      .max(20, "Up to 20 characters"),
    email: yup.string().email(),
    password: yup
      .string()
      .min(6, "At least 6 characters")
      .max(25, "Up to 25 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        const { username, email, password } = values;
        // const body = { email, password, remember };
        const { data } = await axios.post(routes.signupPath(), values);
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [showConfirmPas, setShowConfirmPas] = useState<boolean>(false);
  const handleShowConfirmPassword = () => setShowConfirmPas(!showConfirmPas);

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <Text fontSize="5xl" as={"b"}>Sign up</Text>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <FormControl isInvalid={formik.errors.username ? true : false}>
            <Input
              type="text"
              placeholder="Username"
              size="lg"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              required
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.email ? true : false}>
            <Input
              type="email"
              size="lg"
              placeholder="Email address"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.password ? true : false}>
            <InputGroup size="lg">
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <InputRightElement width="4.5rem">
                <Button
                  size="sm"
                  onClick={handleShowPassword}
                  variant="ghost"
                  _hover={{ background: "inherit" }}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={25} />
                  ) : (
                    <AiOutlineEye size={25} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.confirmPassword ? true : false}>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type={showConfirmPas ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <InputRightElement width="4.5rem">
              <Button
                size="sm"
                onClick={handleShowConfirmPassword}
                variant="ghost"
                _hover={{ background: "inherit" }}
              >
                {showConfirmPas ? (
                  <AiOutlineEyeInvisible size={25} />
                ) : (
                  <AiOutlineEye size={25} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="blue" size="lg" type="submit">
            Sing up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
