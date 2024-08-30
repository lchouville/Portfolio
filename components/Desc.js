// components/Desc.js
import React from 'react';
import styles from '/styles/Components.module.css';
import { processText } from '/utils/textProcessor';

export default function Desc({ _h, _title, _desc }) {
  // Generate a unique ID from the title by replacing spaces with underscores and converting to lowercase
  const id = _title ? _title.replace(/\s+/g, '_').toLowerCase() : '';

  // Determine the heading tag (h1, h2, etc.) based on the _h prop
  const HeadingTag = `h${_h}`;
  // Ensure the heading tag is valid; default to h1 if _h is not between 1 and 6
  const validHeading = ['1', '2', '3', '4', '5', '6'].includes(_h) ? HeadingTag : 'h1';

  return (
    <div id={id} className={styles.desc}>
      {/* Render the title using the determined heading tag */}
      {React.createElement(validHeading, null, _title)}
      <p>
        {/* Use the processText function to process the description */}
        {processText(_desc)}
      </p>
    </div>
  );
}
