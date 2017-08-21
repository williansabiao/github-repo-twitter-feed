'use strict';

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var twitterApi = function twitterApi() {
  var twitterClient = new _twitter2.default({
    consumer_key: 'BfPJopqPan2gPpFMw2RiHKyj6',
    consumer_secret: 'kxzVHejRkYt8uc7s0IoTx3IKNZq97dd6RU2gE0XZm6PilnHclv',
    access_token_key: '806558553611923456-hHmCTFY0jioPu1u4qorvnrEpysdV4cE',
    access_token_secret: '9OF80g0ErKl9cuJjsEfeJgon7LvM0WBNjmrV66OZEWnVb'
  });

  var search = function search() {
    var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Football';

    return new Promise(function (resolve, reject) {
      twitterClient.get('search/tweets', { q: q }, function (err, tweets, response) {
        if (err) reject(err);
        resolve(tweets, response);
      });
    });
  };

  return {
    search: search
  };
};

module.exports = twitterApi();
//# sourceMappingURL=twitter.api.js.map
