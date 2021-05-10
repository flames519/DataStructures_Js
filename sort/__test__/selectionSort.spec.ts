import {selection_sort, selection_sort_test} from "../SelectionSort"
import {createTestArray as creatArr} from "../utils"


test('selection_sort', () => {
  const testArr = creatArr(10);
  expect(selection_sort_test(Array.from(testArr), selection_sort))
    .toEqual(Array.from(testArr).sort());
});

test('selection_sort: 1000', () => {
  const testArr = creatArr(1000);
  expect(selection_sort_test(Array.from(testArr), selection_sort))
    .toEqual(Array.from(testArr).sort());
});

test('selection_sort: 5000', () => {
  const testArr = creatArr(5000);
  expect(selection_sort_test(Array.from(testArr), selection_sort))
    .toEqual(Array.from(testArr).sort());
});

test('selection_sort: 10000', () => {
  const testArr = creatArr(10000);
  expect(selection_sort_test(Array.from(testArr), selection_sort))
    .toEqual(Array.from(testArr).sort());
});

test('selection_sort: 50000', () => {
  const testArr = creatArr(50000);
  expect(selection_sort_test(Array.from(testArr), selection_sort))
    .toEqual(Array.from(testArr).sort());
});

test('selection_sort: 100000', () => {
  const testArr = creatArr(100000);
  expect(selection_sort_test(Array.from(testArr), selection_sort))
    .toEqual(Array.from(testArr).sort());
});