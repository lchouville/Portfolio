// components/Nav.js
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';
// Components
import Language from './Language';
// CSS
import styles from '/styles/Components.module.css';
export default function Footer({ _actual }) {
    const { locale, translatedText } = useLocale();
    const globalLPath = translatedText.global?.[locale]; // global language path

    return (
        <div id="nav" className={styles.nav}>
            <ul>
                <li className={_actual == 'home' ? "actual" : ''}>
                    <Link href="/">{globalLPath?.nav?.home}</Link>
                </li>
                <li className={_actual == 'profil' ? "actual" : ''}>
                    <Link href="/profil">{globalLPath?.nav?.profil}</Link>
                </li>
                <li className={_actual == 'projects' ? "actual" : ''}>
                    <Link href="/projects">{globalLPath?.nav?.projects}</Link>
                </li>
                <li className={_actual == 'experiences' ? "actual" : ''}>
                    <Link href="/experiences">{globalLPath?.nav?.experiences}</Link>
                </li>
                <li>
                    <Language />
                </li>
            </ul>
        </div>
    );
}

  