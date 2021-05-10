import {bubble_sort_v1, bubble_sort_test} from "../BubbleSort"
import {createTestArray as creatArr, createSortTestArray} from "../utils"


test('bubble_sort_v1', () => {
  const testArr = creatArr(10);
  expect(bubble_sort_test(Array.from(testArr), bubble_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

test('bubble_sort_v1: 1000', () => {
  const testArr = creatArr(1000);
  expect(bubble_sort_test(Array.from(testArr), bubble_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

test('bubble_sort_v1: 5000', () => {
  const testArr = creatArr(5000);
  expect(bubble_sort_test(Array.from(testArr), bubble_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

test('bubble_sort_v1: 10000', () => {
  const testArr = creatArr(10000);
  expect(bubble_sort_test(Array.from(testArr), bubble_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

// test('bubble_sort_v1: 50000', () => {
//   const testArr = createSortTestArray(50000);
//   expect(bubble_sort_test(Array.from(testArr), bubble_sort_v1))
//     .toEqual(testArr);
// });
// test('bubble_sort_v1: 100000', () => {
//   const testArr = createSortTestArray(100000);
//   expect(bubble_sort_test(Array.from(testArr), bubble_sort_v1))
//     .toEqual(testArr);
// });