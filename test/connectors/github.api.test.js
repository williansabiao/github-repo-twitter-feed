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
  .reply(200, {items: ['defaultAnswer'] });

const containAllParams = (params, paramsToFind) => !paramsToFind.some((param) => JSON.stringify(params).indexOf(param) === -1)

describe('github.api connector', () => {
  it('should githubApi returns a object', () => {
    expect(githubApi).to.be.a('Object');
  });

  describe('it getRepo() function', () => {
    const defaultParams = ['stars', 'football'];

    it('sould getRepo() returns a promise', () => {
      let getRepoPromise = githubApi.getRepo();
      expect(getRepoPromise.then).to.be.a('Function');
      expect(getRepoPromise.catch).to.be.a('Function');
    });

    it('should getRepo() has the correct default params', () => {
      nock('https://api.github.com')
        .get(/search.*.repositories/)
        .query(queryObj => containAllParams(queryObj, defaultParams))
        .reply(200, {items: ['ok'] });

      let getRepoPromise = githubApi.getRepo();
      return getRepoPromise.then((response) => {
        expect(response).to.be.a('Array');
        expect(response[0]).to.be.equal('ok');
      });
    });

    it('should getRepo() with q param get the correct result', () => {
      const sport = 'Volleyball';
      nock('https://api.github.com')
        .get(/search.*.repositories/)
        .query(queryObj => containAllParams(queryObj, [sport]))
        .reply(200, {items: ['ok'] });

      let getRepoPromise = githubApi.getRepo(sport);

      return getRepoPromise.then((response) => {
        expect(response).to.be.a('Array');
        expect(response[0]).to.be.equal('ok');
      });
    });

    it('should getRepo() with sort param get the correct result', () => {
      const sort = 'forks';
      nock('https://api.github.com')
        .get(/search.*.repositories/)
        .query(queryObj => containAllParams(queryObj, [sort]))
        .reply(200, {items: ['ok'] });

      let getRepoPromise = githubApi.getRepo(undefined, 'forks');

      return getRepoPromise.then((response) => {
        expect(response).to.be.a('Array');
        expect(response[0]).to.be.equal('ok');
      });
    });
  })
});