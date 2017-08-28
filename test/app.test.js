import { expect } from 'chai';
import assert from 'assert';
import fs from 'fs';
import app from '../src/app';

const outputFile = 'output.json';

describe('Should app works', () => {
 after(() => {
    // fs.unlink(outputFile, (err) => {
    //   expect(err).to.be.null;
    // });
 }); 
  
  it('should app create an output.json file', (done) => {
    fs.access(outputFile, fs.constants.R_OK, (err) => {
      expect(err).to.be.null;
      done();
    })
  });

  it('should output.json has a list of repositores', (done) => {
    fs.readFile(outputFile, (err, data) => {
      expect(err).to.be.null;
      data = JSON.parse(data);
      expect(data).to.be.a('Object');
      expect(data.repositories).to.be.a('Array');
      done();
    });
  });

  it('should output.json the repositores has a list of tweets', () => {

  });
});