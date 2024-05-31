// pages/about.js

import Head from 'next/head';
import { useLocale } from '../context/LocaleContext';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Nav component
import Desc from '/components/Desc'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component

export default function Profil() {
    const { locale, translatedText } = useLocale();
    // Store the common part of the translation path
    const globalLPath = translatedText.global?.[locale]; // global laguage path
    const profilLPath = translatedText.profil?.[locale]; // profil laguage path

    return (
        <div className='main-container'>
          <Head>
            <title>{profilLPath?.title}</title>
            <meta name="description" content="Luka Chouville's portfolio website" />
            <link rel="icon" href="#" />
          </Head>
          <Header 
            title={globalLPath?.title}
          />
          <Nav/>
          <div className="container">
            <Desc
              title={profilLPath?.about?.title}
              desc={profilLPath?.about?.description}
            />
          </div>
          <Footer />
        </div>
      );
}
