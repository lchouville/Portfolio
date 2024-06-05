// pages/_error.js
import React from 'react';
import Head from 'next/head';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component

import { useLocale } from '../context/LocaleContext';

const ErrorPage = ({ statusCode, message }) => {
  const codeString = statusCode.toString();
  // get translated text from json
  const { locale, translatedText } = useLocale();
  // Store the common part of the translation path
  const globalLPath = translatedText.global?.[locale]; // global laguage path
  

  return (
    <div className='main-container'>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="#" />
            {/* Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;700&display=swap" rel="stylesheet" />
            <title>Error-{statusCode}</title>
        </Head>
        <Header 
            _title={globalLPath?.title}
        />
        <Nav _actual="error"/>
        <div className="error">
            <h1>
                {codeString.split('').map((digit, index) => (
                <span key={index}>{digit}</span>
                ))}
            </h1>
            <p>{message}</p>
        </div>
        <Footer />
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res && res.statusMessage ? res.statusMessage : err && err.message ? err.message : 'An unexpected error has occurred';
  return { statusCode, message };
};

export default ErrorPage;
