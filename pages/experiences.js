// pages/experiences.js

import Head from 'next/head';
import { useLocale } from '../context/LocaleContext';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component
export default function Experiences() {
    const { locale, translatedText } = useLocale();
    // Store the common part of the translation path
    const globalLPath = translatedText.global?.[locale];        // global laguage path
    const experiencesLPath = translatedText.experiences?.[locale]; // experiences laguage path
    return (
        <div className='main-container'>
          <Head>
            <title>{experiencesLPath?.title}</title>
            <meta name="description" content="Luka Chouville's portfolio website" />
            <link rel="icon" href="#" />
          </Head>
          <Header
            _title={globalLPath?.title}
          />
          <Nav _actual="experiences"/>
          <div id="experiences-page" className="container">
            
          </div>
          <Footer />
        </div>
      );
}