export const createTestArray = (n: number) => Array
  .from({ length: n })
  .map(() => Math.floor(Math.random() * n + n));

export const createSortTestArray = (n: number) => Array
  .from({ length: n })
  .map((_, i) => i + 1);

export const swap = (arr: number[],  i: number, j: number) => {
  let z = arr[i];
  arr[i] = arr[j];
  arr[j] = z;
}

export const swap_1 = (a: number, b: number) => {
  a ^= b;
  b ^= a;
  a ^= b;
}

export const getmid = (a: number, b: number, c: number): number => {
  // if(a < b) swap_1(a, b);
  // if(a < c) swap_1(a, c);
  // if(b < c) swap_1(b, c);
  if(a < b) a = (b ^= a ^= b) ^ a;
  if(a < c) a = (c ^= a ^= c) ^ a;
  if(b < c) b = (c ^= b ^= c) ^ b;
  return b;
}

export type sortFunction = (arr: number[]) => void;
export type sortFunction1 = (arr: number[], l: number, r: number) => void;