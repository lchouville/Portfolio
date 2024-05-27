// pages/index.js

import Head from 'next/head';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Desc from '/components/Desc'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component

import { useLocale } from '../context/LocaleContext';

export default function Home() {
  const { locale, translatedText } = useLocale();
  return (
    <div className='main-container'>
      <Head>
        <title>Luka's portfolio</title>
        <meta name="description" content="Luka Chouville's portfolio website" />
        <link rel="icon" href="#" />
      </Head>
      <Header 
        title={translatedText.bannerSection?.[locale]?.title}
      />
      <div className="container">
        <Desc 
          title={translatedText.welcomeSection?.[locale]?.title}
          text={translatedText.welcomeSection?.[locale]?.description}
        />
      </div>
      <Footer />
    </div>
  );
}
