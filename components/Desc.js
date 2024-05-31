// components/Desc.js
import styles from '/styles/Components.module.css';

export default function Desc({ title, desc }) {
  return (
    <div className={styles.desc}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
