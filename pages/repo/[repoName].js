// pages/repo/[repoName].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
/* Component */
import Header from '/components/Header'; // Import the Header component
import Nav from '/components/Nav'; // Import the Desc component
import Footer from '/components/Footer'; // Import the Footer component
/* Content */
import { useLocale } from '../../context/LocaleContext';

const RepoPage = ({ username="lchouville" }) => {
    const { locale, translatedText } = useLocale();
    const globalLPath = translatedText.global?.[locale]; // global laguage path

    const router = useRouter();
    const { repoName } = router.query;
    const [readme, setReadme] = useState('');
    const [repoDetails, setRepoDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!repoName) return; // Ensure repoName is available
    
        const fetchRepoData = async () => {
          try {
            const [readmeResponse, repoResponse] = await Promise.all([
              axios.get(`https://api.github.com/repos/${username}/${repoName}/readme`, {
                headers: { Accept: 'application/vnd.github.v3.raw' },
              }),
              axios.get(`https://api.github.com/repos/${username}/${repoName}`)
            ]);
            setReadme(readmeResponse.data);
            setRepoDetails(repoResponse.data);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchRepoData();
      }, [repoName, username]);

    if (error) return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    );

    // Split README content into lines
    const readmeLines = readme.split('\n');

    // Extract desired sections
    const description = extractSection(readmeLines, 'Description');
    const usage = extractSection(readmeLines, 'Usage');
    const installation = extractSection(readmeLines, 'Installation');
    const authors = extractSection(readmeLines, 'Authors');

    let created_at;
    let updated_at;
    // get update and create dates if details are available
    if (repoDetails != null) {
      created_at = new Date(repoDetails.created_at).toLocaleDateString();
      updated_at = new Date(repoDetails.updated_at).toLocaleDateString();
    }


    return (
        <div className='main-container'>
            <Head>
                <title>{globalLPath?.title} - {repoName}</title>
                <meta name="description" content="Luka Chouville's portfolio website" />
                <link rel="icon" href="#" />
            </Head>
            <Header 
                _title={globalLPath?.title}
            />
            <Nav _actual="projects"/>
            <div id="projects-dtpage" className="container">
                <h2>{repoName}</h2><a href="#">+repository</a>
                <p><strong>Created at:</strong> {created_at}</p>
                <p><strong>Last update:</strong> {updated_at}</p>
                <div className='sub-container'>
                    <h3>Description:</h3>
                    <p>{description}</p>
                </div>
                <div className='sub-container'>
                    <h3>Usage:</h3>
                    <p>{usage}</p>
                </div>
                <div className='sub-container'>
                    <h3>Installation:</h3>
                    <p>{installation}</p>
                </div>
                <div className='sub-container'>
                    <h3>Authors:</h3>
                    <p>{authors}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RepoPage;

/**
 * Extracts a specific section from the README content.
 *
 * @param {string[]} readmeContent - Array of lines from README.md.
 * @param {string} sectionName - The name of the section to extract (e.g., "Description").
 * @returns {string} - The content of the specified section or a default message if not found.
 */
const extractSection = (readmeContent, sectionName) => {
    const header = `## ${sectionName}`;
    const startIndex = readmeContent.findIndex(line => line.trim() === header);
  
    if (startIndex === -1) {
      return "";
    }
  
    const contentStart = startIndex + 1;
    const relativeEndIndex = readmeContent
      .slice(contentStart)
      .findIndex(line => line.startsWith('## '));
  
    const endIndex =
      relativeEndIndex !== -1
        ? contentStart + relativeEndIndex
        : readmeContent.length;
  
    const sectionLines = readmeContent.slice(contentStart, endIndex);
    const sectionContent = sectionLines.join('\n').trim();
  
    return sectionContent;
  };
  