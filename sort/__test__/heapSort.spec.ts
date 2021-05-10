import {heap_sort_test, heap_sort} from "../HeapSort"

import {createTestArray as creatArr} from "../utils"


test('heap_sort', () => {
  const testArr = creatArr(10);
  expect(heap_sort_test(Array.from(testArr), heap_sort))
    .toEqual(Array.from(testArr).sort());
});

test('heap_sort: 1000', () => {
  const testArr = creatArr(1000);
  expect(heap_sort_test(Array.from(testArr), heap_sort))
    .toEqual(Array.from(testArr).sort());
});

test('heap_sort: 10000', () => {
  const testArr = creatArr(10000);
  expect(heap_sort_test(Array.from(testArr), heap_sort))
    .toEqual(Array.from(testArr).sort());
});

test('heap_sort: 50000', () => {
  const testArr = creatArr(50000);
  expect(heap_sort_test(Array.from(testArr), heap_sort))
    .toEqual(Array.from(testArr).sort());
});

test('heap_sort: 100000', () => {
  const testArr = creatArr(100000);
  expect(heap_sort_test(Array.from(testArr), heap_sort))
    .toEqual(Array.from(testArr).sort());
});