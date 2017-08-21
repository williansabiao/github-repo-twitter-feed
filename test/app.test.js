import { expect } from 'chai';
import assert from 'assert';
import fs from 'fs';
import app from '../src/app';

describe('Should app works', () => {
  
  it('should app create an output.json file', (done) => {
    fs.access('output.json', fs.constants.R_OK, (err) => {
      console.log('lala', err)
      expect(err).to.be.null;
      done();
    })
  });

  it('should output.json has a list of repositores', () => {
    
  });

  it('should output.json the repositores has a list of tweets', () => {

  });
});