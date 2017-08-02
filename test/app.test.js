
import { expect } from 'chai';
import assert from 'assert';
import app from '../src/app';

describe("Check console log", () => {
  it("check if console log is equal started 1", () => {
    assert.equal(app(), 'test');
  });
});