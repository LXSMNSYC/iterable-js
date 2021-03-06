/* eslint-disable no-restricted-syntax */
import '@babel/polyfill';
import assert from 'assert';
import Iterable from '../../src/iterable';
import { BadArgumentError } from '../../src/internal/utils';

/* eslint-disable no-undef */
describe('#toArray', () => {
  it('should throw a BadArgumentError if there is an invalid Iterable', () => {
    try {
      Iterable.toArray();
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should return an Array', () => {
    const iterable = new Iterable([1, 2, 3, 4]).toArray();
    assert(iterable instanceof Array);
  });
});
