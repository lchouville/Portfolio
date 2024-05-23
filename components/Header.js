
import styles from '../styles/Header.module.css';
export default function Header() {
  return (
    <header>
        <div className={styles.header}>
          <h1>Luka's portfolio</h1>
          <p>Welcome to my portfolio website</p>
        </div>
    </header>
  );
}