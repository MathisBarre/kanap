import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kanap</title>
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
