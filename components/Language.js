// components/Language.js
import { useLocale } from '../context/LocaleContext';
import styles from '/styles/Components.module.css';

export default function Language() {
    const { changeLocale } = useLocale();
  
    const handleLanguageChange = (lang) => {
      changeLocale(lang);
    };
  
    return (
        <div className={styles.language}>
            <button 
            id="en" 
            onClick={() => handleLanguageChange('en')}
            >
            <img src="/img/en.png" alt="english" />
            </button>
            <button 
            id="fr" 
            onClick={() => handleLanguageChange('fr')}
            >
            <img src="/img/fr.png" alt="français" />
            </button>
        </div>
    );
}