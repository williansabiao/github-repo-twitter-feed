import { writeFile } from './modules/output';
import githubApi from './connectors/github.api';
import twitterApi from './connectors/twitter.api';
import helper from './modules/helper';

module.exports = (() => {
  console.log('Getting repositories...');

  let outputResult = {};

  console.log(process.env.NODE_ENV)
  githubApi
    .getRepo('football', 'stars', 'name', 10)
    .then((repoList) => {
      console.log('Repositories getted. \n Writting file...');
      let tweetPromises = [];

      repoList.forEach(repoName => tweetPromises.push(twitterApi.search(repoName)));
      outputResult.repositories = repoList;

      return Promise.all(tweetPromises);
    })
    .then((tweets) => {
      outputResult.tweetsByProject = helper.organizeTweets(tweets);
      writeFile('output.json', outputResult);
    });
})();