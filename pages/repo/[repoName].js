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
import { extractSection, getRepoSection } from '../../utils/repoGet';

const { marked } = require('marked');  // Correct way to import marked in newer versions

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

    const [section_name,readmeLines] = getRepoSection(readme, repoName, locale);
    console.log(readmeLines);
    // Extract desired sections
    const description = marked(extractSection(readmeLines, section_name[0],'##'));
    const usage = marked(extractSection(readmeLines, section_name[1],'##'));
    const installation = marked(extractSection(readmeLines, section_name[2],'##'));
    const authors = marked(extractSection(readmeLines, section_name[3],'##'));

    let created_at;
    let updated_at;
    // get update and create dates if details are available
    if (repoDetails != null) {
      created_at = new Date(repoDetails.created_at).toLocaleDateString();
      updated_at = new Date(repoDetails.updated_at).toLocaleString();
    }


    return (
      <div className='main-container'>
        <Head>
          <title>{`${globalLPath?.title} - ${repoName}`}</title>
          <meta name="description" content="Luka Chouville's portfolio website" />
          <link rel="icon" href="#" />
        </Head>
        <Header _title={globalLPath?.title} />
        <Nav _actual="projects" />
        <div id="projects-dtpage" className="container">
          <h2>{repoName}</h2>
          <small><a href="#" target='_blank'>View on GitHub</a></small>
          <p><strong>Created at:</strong> {created_at}</p>
          <p><strong>Last update:</strong> {updated_at}</p>
    
          {/* Only render Description section if content is not empty */}
          {description && (
            <div className='sub-container'>
              <h3>{section_name[0]}:</h3>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
    
          {/* Only render Usage section if content is not empty */}
          {usage && (
            <div className='sub-container'>
              <h3>{section_name[1]}:</h3>
              <div dangerouslySetInnerHTML={{ __html: usage }} />
            </div>
          )}
    
          {/* Only render Installation section if content is not empty */}
          {installation && (
            <div className='sub-container'>
              <h3>{section_name[2]}:</h3>
              <div dangerouslySetInnerHTML={{ __html: installation }} />
            </div>
          )}
    
          {/* Only render Authors section if content is not empty */}
          {authors && (
            <div className='sub-container'>
              <h3>{section_name[3]}:</h3>
              <div dangerouslySetInnerHTML={{ __html: authors }} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
    
};

export default RepoPage;
  