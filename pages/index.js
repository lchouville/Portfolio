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
  // Store the common part of the translation path
  const globalLPath = translatedText.global?.[locale]; // global laguage path
  const homeLPath = translatedText.home?.[locale]; // home laguage path
  return (
    <div className='main-container'>
      <Head>
        <title>{translatedText.home?.[locale]?.title}</title>
        <meta name="description" content="Luka Chouville's portfolio website" />
        <link rel="icon" href="#" />
      </Head>
      <Header 
<<<<<<< HEAD
        _title={globalLPath?.title}
=======
        title={globalLPath?.title}
>>>>>>> 31f6a936d380a7afa78cdaf1d745461487f17eea
      />
      <Nav/>
      <div className="container">
        <h1>{homeLPath?.welcome}</h1>
        <div id="fpSection" className='sliderSection'>
          <Desc 
<<<<<<< HEAD
            _title={homeLPath?.fpSection?.title}
            _desc={homeLPath?.fpSection?.description}
=======
            title={homeLPath?.fpSection?.title}
            desc={homeLPath?.fpSection?.description}
>>>>>>> 31f6a936d380a7afa78cdaf1d745461487f17eea
          />
        </div>
        <div id="rpSection" className='sliderSection'>
          <Desc 
<<<<<<< HEAD
            _title={homeLPath?.rpSection?.title}
            _desc={homeLPath?.rpSection?.description}
=======
            title={homeLPath?.rpSection?.title}
            desc={homeLPath?.rpSection?.description}
>>>>>>> 31f6a936d380a7afa78cdaf1d745461487f17eea
          />
        </div>
        <div id="reSection" className='sliderSection'>
          <Desc 
<<<<<<< HEAD
            _title={homeLPath?.reSection?.title}
            _desc={homeLPath?.reSection?.description}
=======
            title={homeLPath?.reSection?.title}
            desc={homeLPath?.reSection?.description}
>>>>>>> 31f6a936d380a7afa78cdaf1d745461487f17eea
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
