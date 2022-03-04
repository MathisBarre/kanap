import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/style.css"
import "../styles/cart.css"
import "../styles/confirmation.css"
import "../styles/product.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Kanap, projet 5 du parcours développeur web chez Openclassrooms"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
