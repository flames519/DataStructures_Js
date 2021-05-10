import {insert_sort, insert_sort_test} from "../InsertSort"
import {createTestArray as creatArr, createSortTestArray} from "../utils"


test('insert_sort', () => {
  const testArr = creatArr(10);
  expect(insert_sort_test(Array.from(testArr), insert_sort))
    .toEqual(Array.from(testArr).sort());
});

test('insert_sort: 1000', () => {
  const testArr = creatArr(1000);
  expect(insert_sort_test(Array.from(testArr), insert_sort))
    .toEqual(Array.from(testArr).sort());
});

test('insert_sort: 5000', () => {
  const testArr = creatArr(5000);
  expect(insert_sort_test(Array.from(testArr), insert_sort))
    .toEqual(Array.from(testArr).sort());
});

test('insert_sort: 10000', () => {
  const testArr = creatArr(10000);
  expect(insert_sort_test(Array.from(testArr), insert_sort))
    .toEqual(Array.from(testArr).sort());
});

// 插入排序越是趋于有序 时间复杂度越低
test('insert_sort: 50000', () => {
  const testArr = createSortTestArray(50000);
  expect(insert_sort_test(Array.from(testArr), insert_sort))
    .toEqual(testArr);
});
test('insert_sort: 100000', () => {
  const testArr = createSortTestArray(100000);
  expect(insert_sort_test(Array.from(testArr), insert_sort))
    .toEqual(testArr);
});