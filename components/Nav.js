// components/Nav.js
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';
// Components
import Language from './Language';
// CSS
import styles from '/styles/Components.module.css';

export default function Footer() {
    const { locale, translatedText } = useLocale();
    const globalLPath = translatedText.global?.[locale]; // global laguage path
    return (
        <div id="nav" className={styles.nav}>
            <ul>
                <li><Link href="/">{globalLPath?.nav?.home}</Link></li>
                <li><Link href="/profil">{globalLPath?.nav?.profil}</Link></li>
                <li><Link href="/projects">{globalLPath?.nav?.projects}</Link></li>
                <li><Link href="/experiences">{globalLPath?.nav?.experiences}</Link></li>
                <li><Language/></li>
            </ul>
        </div>
    );
}
  