// utils/textProcessor.js
import React from 'react';

// Function to process the description string
export function processText(text) {
  // check if text exists else just return
  if (!text) return
  // Replace newline characters with <br/> elements
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line.split(/(\*\*.*?\*\*|__.*?__|~~.*?~~|\*\.*?\*|_.*?_)/).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // If the part is wrapped in **, make it bold
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        } else if (part.startsWith('__') && part.endsWith('__')) {
          // If the part is wrapped in __, make it underline
          return <u key={i}>{part.slice(2, -2)}</u>;
        } else if (part.startsWith('~~') && part.endsWith('~~')) {
          // If the part is wrapped in ~~, make it strikethrough
          return <del key={i}>{part.slice(2, -2)}</del>;
        } else if (part.startsWith('*') && part.endsWith('*')) {
          // If the part is wrapped in *, make it italic
          return <em key={i}>{part.slice(1, -1)}</em>;
        } else {
          // Otherwise, return the part as is
          return part;
        }
      })}
      <br />
    </React.Fragment>
  ));
}
