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

export const insert_sort_test = (arr: number[], cb: (arr:number[]) => void): number[] => {
  const n = arr.length, name = cb.name; 
  console.time(`${name}: ${n}`);
  cb(arr);
  console.timeEnd(`${name}: ${n}`)
  return arr;
} 

// const arr = [1, 3, 5, 7, 3]

// insert_sort(arr)