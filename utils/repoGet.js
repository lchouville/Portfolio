/**
 * 
 * @param {*} readme  - The readme
 * @param {*} repoName  - The name of the repository
 * @param {*} locale - the language used
 * @returns {[[string],string]} The section name and the readme language part
 */
export function getRepoSection(readme, repoName, locale){
    // Split README content into lines
    let readmeLines = readme.split('\n');
    let section_name = ['Description','Usage','Installation','Authors']
   
    const tReadmeLines = extractSection(readmeLines,`${repoName} - ${locale}`,"#").split('\n');
    if (tReadmeLines.length > 1){ 
      readmeLines = tReadmeLines;
      switch (locale){
        case 'fr':
          section_name = ['Description','Utilisation','Installation','Auteurs']
          break;
        default: // Default english
          break;
      }
    }
    return [section_name,readmeLines]
}

/**
 * Extracts a specific section from the README content.
 *
 * @param {string[]} readmeContent - Array of lines from README.md.
 * @param {string} sectionName - The name of the section to extract (e.g., "Description").
 * @returns {string} - The content of the specified section or a default message if not found.
 */
export const extractSection = (readmeContent, sectionName,sep) => {
    const header = `${sep} ${sectionName}`;
    try {
      const startIndex = readmeContent.findIndex(line => line.trim() === header);
  
    if (startIndex === -1) {
      return "";
    }
  
    const contentStart = startIndex + 1;
    const relativeEndIndex = readmeContent
      .slice(contentStart)
      .findIndex(line => line.startsWith(`${sep} `));
  
    const endIndex =
      relativeEndIndex !== -1
        ? contentStart + relativeEndIndex
        : readmeContent.length;
  
    const sectionLines = readmeContent.slice(contentStart, endIndex);
    const sectionContent = sectionLines.join('\n').trim();
  
    return sectionContent;
    } catch (error) {
      return "Section not found.";
    }
  };