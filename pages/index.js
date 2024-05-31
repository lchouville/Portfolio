// pages/index.js

import Head from 'next/head';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Desc component
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
      <Nav/>
      <div className="container">
        <h1>{translatedText.welcomeSection?.[locale]?.title}</h1>
        <div id="fpSection" className='sliderSection'>
          <Desc 
            title={translatedText.fpSection?.[locale]?.title}
            desc={translatedText.fpSection?.[locale]?.description}
          />
        </div>
        <div id="rpSection" className='sliderSection'>
          <Desc 
            title={translatedText.rpSection?.[locale]?.title}
            desc={translatedText.rpSection?.[locale]?.description}
          />
        </div>
        <div id="reSection" className='sliderSection'>
          <Desc 
            title={translatedText.reSection?.[locale]?.title}
            desc={translatedText.reSection?.[locale]?.description}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
