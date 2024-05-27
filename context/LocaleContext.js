import { createContext, useState, useEffect, useContext } from 'react';
import translations from '../public/static/language.json';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en'); // Default locale
  const [translatedText, setTranslatedText] = useState({});

  useEffect(() => {
    // Fetch translations based on locale
    setTranslatedText(translations);
  }, [locale]);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, translatedText, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
