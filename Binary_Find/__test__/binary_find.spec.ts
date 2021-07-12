import { createTestArray } from "../../sort/utils";
import {binary_find_d, binary_find_d_test, binary_find} from "../binary_find"

test('binary_find: 100000', () => {
  const arr = createTestArray(100000);
  const target = arr[Math.floor(Math.random() * 100000)]
  expect(binary_find_d_test(arr, target, binary_find_d)).toBe(target);
  expect(binary_find_d_test(arr, target, binary_find)).toBe(target);
});

test('binary_find: 500000', () => {
  const arr = createTestArray(500000);
  const target = arr[Math.floor(Math.random() * 500000)]
  expect(binary_find_d_test(arr, target, binary_find_d)).toBe(target);
  expect(binary_find_d_test(arr, target, binary_find)).toBe(target);
});

test('binary_find: 50000000', () => {
  const arr = createTestArray(10000000);
  const target = arr[Math.floor(Math.random() * 10000000)]
  expect(binary_find_d_test(arr, target, binary_find_d)).toBe(target);
  expect(binary_find_d_test(arr, target, binary_find)).toBe(target);
});