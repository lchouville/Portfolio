// components/Footer.js

import PropTypes from 'prop-types';
import styles from '/styles/Description.module.css';

export default function Desc({ title, text }) {
  return (
    <div className={styles.desc}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

Desc.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
