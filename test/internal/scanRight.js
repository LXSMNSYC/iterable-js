/* eslint-disable no-restricted-syntax */
import '@babel/polyfill';
import assert from 'assert';
import Iterable from '../../src/iterable';
import { BadArgumentError } from '../../src/internal/utils';

/* eslint-disable no-undef */
describe('#scanRight', () => {
  it('should throw a BadArgumentError if there is an invalid Iterable', () => {
    try {
      Iterable.scanRight();
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should throw a BadArgumentError if there is an invalid predicate', () => {
    try {
      Iterable.scanRight([1, 2, 3]);
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should return an Iterable if no errors.', () => {
    const iterable = Iterable.scanRight([1, 2, 3], (acc, i) => acc + i);
    assert(iterable instanceof Iterable);
  });
  it('should yield the correct result.', () => {
    const base = [3, 2, 1];
    const expected = [1, 3, 6];
    const iterable = new Iterable(base).scanRight((acc, i) => (acc == null ? 0 : acc) + i);
    let acc = true;
    for (const i of iterable) {
      acc = acc && i === expected.shift();
    }
    assert(acc && expected.length === 0);
  });
});
