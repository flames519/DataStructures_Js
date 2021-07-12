import { heap_sort_v2 } from "./HeapSort";
import { insert_sort_v2 } from "./InsertSort";
import { getmid, swap } from "./utils";

export const quick_sort_v1 = (arr: number[], l: number, r: number): void =>  {
  if(l >= r) return;
  // ji vi
  const base = arr[l];
  let x = l, y = r;
  while(x < y) {
    while(y > x && arr[y] >= base) y--;
    if(arr[y] < base) arr[x++] = arr[y];
    while(x < y && arr[x] <= base) x++;
    if(arr[x] > base) arr[y--] = arr[x];
  }
  arr[x] = base;
  quick_sort_v1(arr, l, x - 1);
  quick_sort_v1(arr, y + 1, r);
  return;
}

export const quick_sort_v2 = (arr: number[], l: number, r: number): void =>  {
  
  while(l < r) {
    const base = arr[l];
    let x = l, y = r;
    while(x < y) {
      while(y > x && arr[y] >= base) y--;
      if(arr[y] < base) arr[x++] = arr[y];
      while(x < y && arr[x] <= base) x++;
      if(arr[x] > base) arr[y--] = arr[x];
    }
    arr[x] = base;
    quick_sort_v2(arr, y + 1, r);
    r = x - 1;
  }
  return;
}

const threshold = 16;


export const __quick_sort_v3 = (arr: number[], l: number, r: number): void =>  {

  // 切片排序， 当排序区间小于 threshold 即趋向于有序排序
  while(r - l > threshold) {
    // 优化基准值 排除最高与最低
    const base = getmid(arr[l], arr[(l + r) >> 1], arr[r]);
    
    // 基于基准值排序
    let x = l, y = r;
    do {
      while(arr[y] > base) y--;
      while(arr[x] < base) x++;
      x <= y && swap(arr, x++, y--);
    } while(x <= y)
    // 左递归 减少递归次数 优化调用栈空间
    __quick_sort_v3(arr, x, r);
    r = y;
  }
  return;
}

export const quick_sort_v3 = (arr: number[], l: number, r: number): void =>  {
  __quick_sort_v3(arr, l, r);
  insert_sort_v2(arr, l, r);
}

export const __quick_sort_v4 = (arr: number[], l: number, r: number, __dep_limt: number): void =>  {
  
  if(__dep_limt === 0) {
    heap_sort_v2(arr, l, r, () => false)
    return;
  }

  --__dep_limt;
  // 切片排序， 当排序区间小于 threshold 即趋向于有序排序
  while(r - l > threshold) {
    // 优化基准值 排除最高与最低
    const base = getmid(arr[l], arr[(l + r) >> 1], arr[r]);
    
    // 基于基准值排序
    let x = l, y = r;
    do {
      while(arr[y] > base) y--;
      while(arr[x] < base) x++;
      x <= y && swap(arr, x++, y--);
    } while(x <= y)
    // 左递归 减少递归次数 优化调用栈空间
    __quick_sort_v4(arr, x, r, __dep_limt);
    r = y;
  }
  return;
}

export const quick_sort_v4 = (arr: number[], l: number, r: number): void =>  {
  __quick_sort_v4(arr, l, r, (Math.log(r) >> 1) << 2);
  insert_sort_v2(arr, l, r);
}

export const quick_sort_test = (arr: number[], cb: (arr:number[], l:number, r: number) => void): number[] => {
  const n = arr.length, name = cb.name; 
  console.time(`${name}: ${n}`);
  cb(arr, 0, n - 1);
  console.timeEnd(`${name}: ${n}`)
  return arr;
} 


// const arr = [1, 3, 2, 5, 8, 7, 6, 3, 1, 3, 2, 1, 10, 30, 26, 28, 38, 10, 27, 8, 90, 99, 8, 6, 56, 89, 22, 34, 88, 99, 9, 0, 12, 23, 365, 9]
// const n = arr.length;
// quick_sort_v3(arr, 0, n - 1)

// console.log(arr);

