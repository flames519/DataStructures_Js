import { swap } from "./utils";

export const bubble_sort_v1 = (arr: number[]): void => {
  const n = arr.length - 1;
  for(let i = n; i > 0; i--) {
    for(let j = n; j > n - i; j--) {
      arr[j] < arr[j - 1] && ([arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]);
    }
  }
  return ;
}

export const bubble_sort_v2 = (arr: number[]): void => {
  const n = arr.length - 1;
  for(let i = n; i > 0; i--) {
    for(let j = n; j > n - i; j--) {
      arr[j] < arr[j - 1] && swap(arr, j ,j - 1);
    }
  }
  return ;
}


export const bubble_sort_test = (arr: number[], cb: (arr:number[]) => void): number[] => {
  const n = arr.length, name = cb.name; 
  console.time(`${name}: ${n}`);
  cb(arr);
  console.timeEnd(`${name}: ${n}`)
  return arr;
} 

const arr = [1, 3, 5, 7, 3, 9, 8, 1, 2]

bubble_sort_v2(arr)

console.log(arr);