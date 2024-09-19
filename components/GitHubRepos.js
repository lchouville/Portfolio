// utils/gitHubRepos.js
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';
import { extractSection, getRepoSection } from '../utils/repoGet';
const { marked } = require('marked');  // Correct way to import marked in newer versions

const GitHubRepos = ({ username, filter }) => {
  const { locale } = useLocale();
  const router = useRouter();

  const [repos, setRepos] = useState([]);
  const [readmeContents, setReadmeContents] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch repos from GitHub
  const fetchRepos = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {
          type: 'public',
          sort: 'updated',
          direction: 'desc'
        }
      });
      setRepos(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [username]);

  // Fetch the README for a specific repository
  const fetchReadme = useCallback(async (repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/readme`, {
        headers: {
          Accept: 'application/vnd.github.VERSION.raw'
        }
      });
      setReadmeContents(prev => ({
        ...prev,
        [repoName]: response.data // Store the readme content by repo name
      }));
    } catch (err) {
      console.error(`Error fetching README for ${repoName}:`, err);
    }
  }, [username]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  // Trigger fetching the README for a repo when necessary
  useEffect(() => {
    repos.forEach(repo => {
      if (!readmeContents[repo.name]) {
        fetchReadme(repo.name);
      }
    });
  }, [repos, readmeContents, fetchReadme]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on data fetch: {error}</p>;

  // Sort repos by most recently updated and apply filter
  const sortedRepos = [...repos].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  const filteredRepos = filter ? sortedRepos.slice(0, 5) : sortedRepos;

  return (
    <ul id="project-list">
      {filteredRepos.map(repo => {
        const readme = readmeContents[repo.name] || ''; // Get the README content for each repo
        const [section_name, readmeLines] = getRepoSection(readme, repo.name, locale);

        // Extract the desired section and limit description length
        const description = marked(extractSection(readmeLines, section_name[0], '##')) || '';
        const truncatedDescription = description.length > 155 ? description.slice(0, 155) + '...' : description || 'No Description';

        return (
          <li key={repo.id} className="project-container_rect">
            <h3>
              <Link href={`/repo/${repo.name}`}>
                {repo.name}
              </Link>
            </h3>              
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div className="url-container">
              <small><a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></small>
              <small><Link href={`/repo/${repo.name}`}>more info</Link></small>
            </div>
            <small>Updated at: {new Date(repo.updated_at).toLocaleString()}</small>
          </li>
        );
      })}
    </ul>
  );
};

export default GitHubRepos;
