// utils/gitHubRepos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Link from 'next/link';

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
  if (error) return <p>Error on data fetch: {error}</p>;

  let filteredRepos;
  repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  if (filter) {
    // Sort only the 5 most recent update projects in order
    filteredRepos = repos.slice(0, 5);
  }else{
    filteredRepos = repos
  }
  

  // Render each repo as a list item with name and description, along with a link to the repo's GitHub page and a link to more info page. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the end. 155 characters limit for description and "..." at the
  return (
    <ul id='project-list'>
      {filteredRepos.map(repo => (
        <li key={repo.id} className='project-container_rect'>
          <h3><
            Link href={`/repo/${repo.name}`}>
              {repo.name}
            </Link>
          </h3>
          <p>{repo.description?.slice(0, 155)||'No Description' + (repo.description?.length > 155? '...' : '')}</p>
          <div className='url-container'>
            <small><a href={repo.html_url} target='_blank'>View on GitHub</a></small>
            <small><Link href={`/repo/${repo.name}`}>more info</Link></small>
          </div>
          <small>Updated at: {new Date(repo.updated_at).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}
export default GitHubRepos;
