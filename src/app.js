import { writeFile } from './modules/output';
import githubApi from './connectors/github.api';
import twitterApi from './connectors/twitter.api';
import helper from './modules/helper';

module.exports = (() => {
  console.log('Getting repositories...');

  let outputResult = {};

  githubApi
    .getRepo('football', 'stars', 'name', 10)
    .then((repoList) => {
      console.log('Repositories caught.');
      console.log('Getting tweets...');
      let tweetPromises = [];

      repoList.forEach(repoName => tweetPromises.push(twitterApi.search(repoName)));
      outputResult.repositories = repoList;

      return Promise.all(tweetPromises);
    })
    .then((tweets) => {
      console.log('Tweets caught... \nWriting json file...');
      outputResult.tweetsByProject = helper.organizeTweets(tweets);
      writeFile('output.json', outputResult);
      console.log('JSON file writted. Access /output.json to see the result.');
    });
})();