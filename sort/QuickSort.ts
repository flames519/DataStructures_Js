/**
 * 
 * @param arr 排序数组
 * @param l 左指针
 * @param r 右指针
 */

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

export const quick_sort_test = (arr: number[], cb: (arr:number[], l:number, r: number) => void): number[] => {
  const n = arr.length, name = cb.name; 
  console.time(`${name}: ${n}`);
  cb(arr, 0, n - 1);
  console.timeEnd(`${name}: ${n}`)
  return arr;
} 