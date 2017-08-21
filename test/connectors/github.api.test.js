import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromise from 'chai-as-promised';
import assert from 'assert';
import nock from 'nock';

import githubApi from '../../src/connectors/github.api';

const stub = sinon.stub();
const expect = chai.expect;

nock('https://api.github.com')
  .filteringPath(() => '/')
  .get('/')
  .reply(200, 'normalAnswer');

describe('github.api connector', () => {
  it('should githubApi returns a object', () => {
    expect(githubApi).to.be.a('Object');
  });

  describe('it getRepo() function', () => {
    const defaultParams = { sort: 'stars', q: 'Football' };

    it('sould getRepo() returns a promise', () => {
      let getRepoPromise = githubApi.getRepo();
      expect(getRepoPromise.then).to.be.a('Function');
      expect(getRepoPromise.catch).to.be.a('Function');
    });

    it('should getRepo() has the correct default params', () => {
      nock('https://api.github.com')
        .get(/search.*.repositories/)
        .query(defaultParams)
        .reply(200, 'ok');

      let getRepoPromise = githubApi.getRepo();
      return getRepoPromise.then((response) => {
        expect(response).to.be.a('Object');
        expect(response.data).to.be.equal('ok');
      });
    });

    it('should getRepo() with q param get the correct result', () => {
      const sport = 'Volleyball';
      nock('https://api.github.com')
        .get(/search.*.repositories/)
        .query({q: sport, sort: defaultParams.sort})
        .reply(200, 'ok');

      let getRepoPromise = githubApi.getRepo(sport);

      return getRepoPromise.then((response) => {
        expect(response).to.be.a('Object');
        expect(response.data).to.be.equal('ok');
      });
    });

    it('should getRepo() with sort param get the correct result', () => {
      const sort = 'forks';
      nock('https://api.github.com')
        .get(/search.*.repositories/)
        .query({sort: sort, q: defaultParams.q})
        .reply(200, 'ok');

      let getRepoPromise = githubApi.getRepo(undefined, 'forks');

      return getRepoPromise.then((response) => {
        expect(response).to.be.a('Object');
        expect(response.data).to.be.equal('ok');
      });
    });
  })
});