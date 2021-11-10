import Head from 'next/head';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
