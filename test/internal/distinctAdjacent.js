/* eslint-disable no-restricted-syntax */
import '@babel/polyfill';
import assert from 'assert';
import Iterable from '../../src/iterable';
import { BadArgumentError } from '../../src/internal/utils';

/* eslint-disable no-undef */
describe('#distinctAdjacent', () => {
  it('should throw a BadArgumentError if there is an invalid Iterable', () => {
    try {
      Iterable.distinctAdjacent();
    } catch (e) {
      assert(e instanceof BadArgumentError);
    }
  });
  it('should return an Iterable if no errors.', () => {
    const iterable = Iterable.distinctAdjacent([1, 2, 3, 4]);
    assert(iterable instanceof Iterable);
  });
  it('should yield the correct value', () => {
    const base = [1, 2, 2, 3, 3, 4];
    const expected = [1, 2, 3, 4];
    const iterable = new Iterable(base).distinctAdjacent();
    let acc = true;
    for (const i of iterable) {
      acc = acc && i === expected.shift();
    }
    assert(acc && expected.length === 0);
  });
});
