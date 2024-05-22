// pages/index.js

import Head from 'next/head';

import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luka's portfolio</title>
        <meta name="description" content="Luka Chouville's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
}
