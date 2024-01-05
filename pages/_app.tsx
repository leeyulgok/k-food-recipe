import "../app/globals.css";
import RootLayout from "../app/layout";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>How to Make K-Food?</title>
      </Head>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </>
  );
}

export default MyApp;
