import github from 'github';
import bluebird from 'bluebird';

const githubApi = () => {
  const githubConnector = new github({
    protocol: 'https',
    host: 'api.github.com', // should be api.github.com for GitHub
    headers: {
      'user-agent': 'My-Cool-GitHub-App' // GitHub is happy with a unique user agent
    },
    Promise: bluebird,
    timeout: 5000
  });

  const getRepo = (q = 'Football', sort = 'stars') => githubConnector.search.repos({ q, sort })

  return {
    getRepo
  };
};

module.exports = githubApi();