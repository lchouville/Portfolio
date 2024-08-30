// utils/gitHubRepos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubRepos = ({ username, filter }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          params: {
            type: 'public',
            sort: 'updated',
            direction: 'desc'
          }
        });
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  let filteredRepos;
  if (filter) {
    // Sort only the 5 most recent update projects in order
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    // Slice the first 5 projects (the most recent ones) and return them as a list of links and descriptions.
    filteredRepos = repos.slice(0, 5);
  }else{
    filteredRepos = repos
  }

  return (
    <ul>
      {filteredRepos.map(repo => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>: {repo.description || 'No description'} 
          {/* creation date || last update */}
          <br />
          <small>Updated at: {new Date(repo.updated_at).toLocaleString()}</small>
          <br />
        </li>
      ))}
    </ul>
  );
}
export default GitHubRepos;
