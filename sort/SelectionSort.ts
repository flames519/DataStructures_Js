import { swap } from "./utils";

export const selection_sort = (arr: number[]): void => {
  const n = arr.length;
  let minPos = 0, i = -1;
  while(++i < n - 1) {
    minPos = i;
    let j = i;
    while(++j < n) {
      if(arr[j] < arr[minPos]) minPos = j;
    } 
    // [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
    swap(arr, i, minPos);
  }
}


export const selection_sort_test = (arr: number[], cb: (arr:number[]) => void): number[] => {
  const n = arr.length, name = cb.name; 
  console.time(`${name}: ${n}`);
  cb(arr);
  console.timeEnd(`${name}: ${n}`)
  return arr;
} 