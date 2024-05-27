import { useLocale } from '../context/LocaleContext';
import styles from '/styles/Header.module.css';

export default function Header({ title }) {
  const { changeLocale } = useLocale();

  const handleLanguageChange = (lang) => {
    changeLocale(lang);
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.language}>
          <button id="en" onClick={() => handleLanguageChange('en')}>
            <img src="/img/en.png" alt="english" />
          </button>
          <button id="fr" onClick={() => handleLanguageChange('fr')}>
            <img src="/img/fr.png" alt="français" />
          </button>
        </div>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
