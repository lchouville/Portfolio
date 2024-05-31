// pages/projects.js

import Head from 'next/head';
import { useLocale } from '../context/LocaleContext';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component
export default function Projects() {
    const { locale, translatedText } = useLocale();
    return (
        <div className='main-container'>
          <Head>
            <title>Luka's portfolio - Projects</title>
            <meta name="description" content="Luka Chouville's portfolio website" />
            <link rel="icon" href="#" />
          </Head>
          <Header 
            title={translatedText.bannerSection?.[locale]?.title}
          />
          <Nav/>
          <div className="container">
            
          </div>
          <Footer />
        </div>
      );
}