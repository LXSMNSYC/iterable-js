/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
import { defineField, DoubleIterableCheck } from './utils';
import Iterable from '../iterable';
import toArray from './toArray';
/**
 * @ignore
 */
const FIELD = defineField('intersect');
/**
 * @ignore
 */
export default (iterable, other) => {
  DoubleIterableCheck(iterable, other, FIELD);

  return new Iterable(function* () {
    const A = toArray(iterable);
    const B = toArray(other);

    for (const i of A) {
      if (B.includes(i)) {
        yield i;
      }
    }
  });
};
