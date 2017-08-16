'use strict';

var _github = require('github');

var _github2 = _interopRequireDefault(_github);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var githubApi = function githubApi() {
  var githubConnector = new _github2.default({
    protocol: 'https',
    host: 'api.github.com', // should be api.github.com for GitHub
    headers: {
      'user-agent': 'My-Cool-GitHub-App' // GitHub is happy with a unique user agent
    },
    Promise: _bluebird2.default,
    timeout: 5000
  });

  var getRepo = function getRepo() {
    var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Football';
    var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'stars';
    return githubConnector.search.repos({ q: q, sort: sort });
  };

  return {
    getRepo: getRepo
  };
};

module.exports = githubApi();
//# sourceMappingURL=twitter.api.js.map
