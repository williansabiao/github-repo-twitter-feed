import Twitter from 'twitter';
import config from './../config/';

const twitterApi = () => {
  const twitterClient = new Twitter({
    consumer_key: 'BfPJopqPan2gPpFMw2RiHKyj6',
    consumer_secret: 'kxzVHejRkYt8uc7s0IoTx3IKNZq97dd6RU2gE0XZm6PilnHclv',
    access_token_key: '806558553611923456-hHmCTFY0jioPu1u4qorvnrEpysdV4cE',
    access_token_secret: '9OF80g0ErKl9cuJjsEfeJgon7LvM0WBNjmrV66OZEWnVb',
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