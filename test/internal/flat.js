/* eslint-disable no-restricted-syntax */
import '@babel/polyfill';
import assert from 'assert';
import Iterable from '../../src/iterable';
import { BadArgumentError } from '../../src/internal/utils';

/* eslint-disable no-undef */
describe('#flat', () => {
  it('should throw a BadArgumentError if there is an invalid Iterable', () => {
    try {
      Iterable.flat();
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should return an Iterable if no errors.', () => {
    const iterable = Iterable.flat([1, 2, 3]);
    assert(iterable instanceof Iterable);
  });
  it('should yield the correct result.', () => {
    const base = [1, 2, [3, 4, 5]];
    const expected = [1, 2, 3, 4, 5];
    const iterable = new Iterable(base).flat();

    let acc = true;
    for (const i of iterable) {
      acc = acc && i === expected.shift();
    }
    assert(acc && expected.length === 0);
  });
});
