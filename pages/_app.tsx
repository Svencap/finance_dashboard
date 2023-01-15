import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GoogleOAuthProvider clientId="161535797917-ps419n2e551mocuepno38r0u9gltmvc2.apps.googleusercontent.com">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </GoogleOAuthProvider>
    </ChakraProvider>
  );
}
