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

  // Used when it is necessary to search more than 10 repositories
  // TO-DO pagination function
  // const sliceRepos = (repoList = [], limit = 10) => repoList.slice(0, limit);
  
  const filterRepos = (repoList, filterKey) => repoList.map((repo) => repo[filterKey]);

  const getRepo = (q = 'football', sort = 'stars', filterKey = null, limit = null) => {
    return githubConnector
      .search.repos({ q, sort, per_page: 10 })
      // .then((response) => {
      //   if(limit) return sliceRepos(response.data.items, limit);
      //   return response;
      // })
      .then((response) => {
        if(filterKey) return filterRepos(response.data.items, filterKey);
        return response.data.items;
      });
  };

  return {
    getRepo
  };
};

module.exports = githubApi();