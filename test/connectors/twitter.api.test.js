import chai from 'chai';
import nock from 'nock';

import twitterApi from '../../src/connectors/twitter.api';

const expect = chai.expect;

describe('twitter.api connector', () => {

  const nockTwitterApi = (searchFn) => {
    nock('https://api.twitter.com')
      .filteringPath(() => '/')
      .get(searchFn || '/')
      .reply(200, { status: 'ok', tweets: [] });
  }

  it('should twitterApi returns a object', () => {
    nockTwitterApi();
    expect(twitterApi).to.be.a('Object');
  });

  it('should twitterApi.search be a function', () => {
    nockTwitterApi();
    expect(twitterApi.search).to.be.a('Function');
  });

  it('should twitterApi.search returns a promise', () => {
    nockTwitterApi();
    const searchPromise = twitterApi.search();

    expect(searchPromise.then).to.be.a('Function');
    expect(searchPromise.catch).to.be.a('Function');
  });

  it('should twitterApi.search returns a promise', () => {
    const q = 'javascript';

    nockTwitterApi((uri) => uri.indexOf('q=' + q) > -1);
    const searchPromise = twitterApi.search(q);

    return searchPromise.then((response) => {
      console.log(response)
      expect(response).to.be.a('Object');
      expect(response.status).to.be.equal('ok');
    });
  });
});