/* eslint-disable no-restricted-syntax */
import '@babel/polyfill';
import assert from 'assert';
import Iterable from '../../src/iterable';
import { BadArgumentError } from '../../src/internal/utils';

/* eslint-disable no-undef */
describe('#reduce', () => {
  it('should throw a BadArgumentError if there is an invalid Iterable', () => {
    try {
      Iterable.reduce();
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should throw a BadArgumentError if there is an invalid predicate', () => {
    try {
      Iterable.reduce([1, 2, 3]);
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should return an Iterable if no errors.', () => {
    const iterable = Iterable.reduce([1, 2, 3], (acc, i) => acc + i);
    assert(iterable instanceof Iterable);
  });
  it('should yield the correct result.', () => {
    const base = [1, 2, 3];
    const iterable = new Iterable(base).reduce((acc, i) => (acc == null ? 0 : acc) + i);
    for (const i of iterable) {
      assert(i === base.reduce((acc, x) => acc + x));
    }
  });
});
