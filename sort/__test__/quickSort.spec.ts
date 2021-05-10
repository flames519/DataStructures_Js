import {quick_sort_v1, quick_sort_test} from "../QuickSort"
import {createTestArray as creatArr, createSortTestArray} from "../utils"


test('quick_sort_v1', () => {
  const testArr = creatArr(10);
  expect(quick_sort_test(Array.from(testArr), quick_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

test('quick_sort_v1: 1000', () => {
  const testArr = creatArr(1000);
  expect(quick_sort_test(Array.from(testArr), quick_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

test('quick_sort_v1: 10000', () => {
  const testArr = creatArr(10000);
  expect(quick_sort_test(Array.from(testArr), quick_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

test('quick_sort_v1: 50000', () => {
  const testArr = creatArr(50000);
  expect(quick_sort_test(Array.from(testArr), quick_sort_v1))
    .toEqual(Array.from(testArr).sort());
});

// 对有序数组进行普通快排， 调用栈溢出
// test('quick_sort_v1: 50000', () => {
//   const testArr = createSortTestArray(50000);
//   expect(quick_sort_test(Array.from(testArr), quick_sort_v1))
//     .toEqual(Array.from(testArr).sort((a, b) => a - b));
// });

test('quick_sort_v1: 100000', () => {
  const testArr = creatArr(100000);
  expect(quick_sort_test(Array.from(testArr), quick_sort_v1))
    .toEqual(Array.from(testArr).sort());
});