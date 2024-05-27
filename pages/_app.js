// pages/_app.js

import { useEffect } from 'react';
import { LocaleProvider } from '../context/LocaleContext';
import '../styles/reset.css';
import '../styles/globals.css';
import { applyTheme, listenForThemeChanges } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    applyTheme(); // Apply theme on initial load
    listenForThemeChanges(); // Set up listener for theme changes
    const next = document.getElementById('__next');
    if (next) {
      next.classList.add('main-container');
    }

    return () => {
      // Cleanup listener on unmount
      if (typeof window !== 'undefined' && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.removeEventListener('change', applyTheme);
      }
    };
  }, []);

  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}

export default MyApp;
