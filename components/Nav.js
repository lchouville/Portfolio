// components/Nav.js
import Link from 'next/link';
import Language from './Language';
import styles from '/styles/Components.module.css';

export default function Footer() {
    return (
        <div id="nav" className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/projects">My Projects</Link></li>
                <li><Link href="/experiences">My Experences</Link></li>
                <li><Language/></li>
            </ul>
        </div>
    );
}
  