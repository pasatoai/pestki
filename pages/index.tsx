import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Gabinety from "../components/Gabinety/gabinety";
import Info from "../components/Info/info";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bezpestkowe</title>
        <meta name="description" content="Bezpestkowe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Gabinety />
        <Info />
      </main>
    </div>
  );
};

export default Home;
