import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </GoogleOAuthProvider>
    </ChakraProvider>
  );
}
