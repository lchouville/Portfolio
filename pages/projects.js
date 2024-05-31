// pages/projects.js

import Head from 'next/head';
import { useLocale } from '../context/LocaleContext';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component
export default function Projects() {
    const { locale, translatedText } = useLocale();
    // Store the common part of the translation path
    const globalLPath = translatedText.global?.[locale]; // global laguage path
    const projectsLPath = translatedText.projects?.[locale]; // project laguage path
    return (
        <div className='main-container'>
          <Head>
            <title>{projectsLPath?.title}</title>
            <meta name="description" content="Luka Chouville's portfolio website" />
            <link rel="icon" href="#" />
          </Head>
          <Header 
            _title={globalLPath?.title}
          />
          <Nav/>
          <div className="container">
            
          </div>
          <Footer />
        </div>
      );
}