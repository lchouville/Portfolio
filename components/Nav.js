// components/Nav.js
import Language from './Language';
import styles from '/styles/Components.module.css';

export default function Footer() {
    return (
        <div id="nav" className={styles.nav}>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>My Projects</li>
                <li>My Experences</li>
                <li><Language/></li>
            </ul>
        </div>
    );
}
  