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
            _title={globalLPath?.title}
          />
          <Nav/>
          <div className="container">
            <Desc
              _title={profilLPath?.about?.title}
              _desc={profilLPath?.about?.name}
            />
            <Desc
              _h="2"
              _title={profilLPath?.about?.actualyT}
              _desc={profilLPath?.about?.actualy}
            />
            <Desc
              _h="2"
              _title={profilLPath?.about?.levelT}
              _desc={profilLPath?.about?.level}
            />
            <Desc
              _h="2"
              _title={profilLPath?.about?.objectiveT}
              _desc={profilLPath?.about?.objective}
            />
            <Desc
              _h="2"
              _title={profilLPath?.about?.formationsT}
              _desc={profilLPath?.about?.formations}
            />
            <Desc
              _h="2"
              _title={profilLPath?.about?.whyT}
              _desc={profilLPath?.about?.why}
            />
            <Desc
              _h="2"
              _title={profilLPath?.about?.hobbiesT}
              _desc={profilLPath?.about?.hobbies}
            />
          </div>
          <Footer />
        </div>
      );
}
