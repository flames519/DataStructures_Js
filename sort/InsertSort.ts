import { sortFunction, sortFunction1, swap } from "./utils";

export const insert_sort = (arr: number[]): void => {
  const n = arr.length;
  let i = 0;
  while(++i < n) {
    let x = i, y: number;
    while(arr[x] < arr[y = x - 1] && x > 0) {
      [arr[x], arr[y]] = [arr[y], arr[x]];
      x = y;
    }
  }
}

export const insert_sort_v2 = (arr: number[], l: number, r: number): void => {
  let minPos = l, n = r - l, i = -1;
  while(++i <= n) {
    arr[minPos] > arr[i] && (minPos = i)
  }
  // [arr[l], arr[minPos]] = [arr[minPos], arr[l]];
  swap(arr, l, minPos);
  i = 1;
  while(++i <= n) {
    let x = i, y: number;
    while(arr[x] < arr[y = x - 1]) {
      // [arr[x], arr[y]] = [arr[y], arr[x]];
      swap(arr, x, y);
      x = y;
    }
  }
}



export const insert_sort_test = (arr: number[], cb: sortFunction | sortFunction1): number[] => {
  const n = arr.length, name = cb.name; 
  console.time(`${name}: ${n}`);
  cb(arr, 0, n - 1);
  console.timeEnd(`${name}: ${n}`)
  return arr;
} 

// const arr = [1, 3, 5, 7, 3, 9, 8, 1, 2]

// insert_sort_v2(arr, 0, 9)

// console.log(arr);
