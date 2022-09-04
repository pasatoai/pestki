import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Gabinety from "../components/Gabinety/gabinety";

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
      </main>
    </div>
  );
};

export default Home;
