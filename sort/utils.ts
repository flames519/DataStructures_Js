export const createTestArray = (n: number) => Array
  .from({ length: n })
  .map(() => Math.floor(Math.random() * n + n));
