// pages/_app.js

import { useEffect } from 'react';
import { LocaleProvider } from '../context/LocaleContext';
// CSS styles
import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/themes/light-mode.css';
import '../styles/themes/dark-mode.css';
import { applyTheme, listenForThemeChanges } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    applyTheme(); // Apply theme on initial load
    listenForThemeChanges(); // Set up listener for theme changes
    const next = document.getElementById('__next');
    if (next) {
      next.classList.add('next-div');
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
