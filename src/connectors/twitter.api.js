import Twitter from 'twitter';
import config from './../config/';

const twitterApi = () => {
  const twitterClient = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret,
  });
  
  const search = (q = 'Football') => {
    return new Promise((resolve, reject) => {
      twitterClient.get('search/tweets', { q }, (err, tweets, response) => {
        if ( err ) reject(err);
        resolve(tweets, response);
      });
    });
  }

  return {
    search
  };
};

module.exports = twitterApi();