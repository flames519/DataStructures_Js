export const createTestArray = (n: number) => Array
  .from({ length: n })
  .map(() => Math.floor(Math.random() * n + n));

  export const createSortTestArray = (n: number) => Array
  .from({ length: n })
  .map((_, i) => i + 1);