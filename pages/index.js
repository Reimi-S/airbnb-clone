import Head from 'next/head';
import Banner from '../components/Banner.js';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
