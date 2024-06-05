import React from 'react';

// Function to process the description string
export function processText(text) {
  // Check if text exists else just return
  if (!text) return "";

  // Split text into paragraphs
  const paragraphs = text.split('\n\n');

  // Process each paragraph separately
  return paragraphs.map((paragraph, index) => (
    <p key={index}>
      {paragraph.split('\n').map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {/* Add a space at the beginning of the first line of each paragraph */}
          {lineIndex === 0 ? '\u00A0' : ''}
          {line.split(/(\*\*.*?\*\*|__.*?__|~~.*?~~|\*.*?\*|_.*?_)/).map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              // If the part is wrapped in **, make it bold
              return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
            } else if (part.startsWith('__') && part.endsWith('__')) {
              // If the part is wrapped in __, make it underline
              return <u key={partIndex}>{part.slice(2, -2)}</u>;
            } else if (part.startsWith('~~') && part.endsWith('~~')) {
              // If the part is wrapped in ~~, make it strikethrough
              return <del key={partIndex}>{part.slice(2, -2)}</del>;
            } else if (part.startsWith('*') && part.endsWith('*')) {
              // If the part is wrapped in *, make it italic
              return <em key={partIndex}>{part.slice(1, -1)}</em>;
            } else {
              // Otherwise, return the part as is
              return part;
            }
          })}
          <br />
        </React.Fragment>
      ))}
    </p>
  ));
}
