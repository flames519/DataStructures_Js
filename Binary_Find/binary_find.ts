import { quick_sort_v4 } from "../sort/QuickSort";

export const binary_find_d = (arr: number[], target: number, l: number, r: number): number => {
  if(l > r) return -1;

  const mid = (l + r) >> 1;
  
  if(arr[mid] === target) return mid;

  const isL = arr[mid] > target;

  return binary_find_d(arr, target, isL ? l : mid + 1, isL ?  mid - 1 : r);
}

export const binary_find = (arr: number[], target: number, l: number, r: number): number => {
  if(l > r) return -1;
  let mid: number;

  while (true) {
    if (target === arr[mid = (l + r) >> 1]) {
      return mid
    }
    target > arr[mid] ? (l = mid + 1) : (r = mid -1);
  }
}

type binary_find_cb = (arr: number[], target: number, l: number, r: number) => number;



export const binary_find_d_test = (arr: number[], target: number, cb: binary_find_cb): number =>  {
 
  const n = arr.length;
  quick_sort_v4(arr, 0, n - 1)

  let res = -1;

  console.time(`binary_find_d: ${n}`)
  
  res = cb(arr, target, 0, n - 1);

  console.timeEnd();

  return arr[res];
}

// test()