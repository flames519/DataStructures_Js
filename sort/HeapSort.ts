import { Heap } from "../Heap/heap_array"

export const  heap_sort = (arr: number[]): void => {
    const  n = arr.length,
        heap = new Heap(n, false);
    let i = -1;
    while (++i < n) heap.add(arr[i]);
    i = -1;
    while (++i < n) arr[i] = heap.remove();
}

export const  heap_sort_v2 = (arr: number[], l: number, r: number, comp: () => boolean): void => {
    const  n = r - l,
        heap = new Heap(n, false);
    let i = l - 1;
    while (++i <= n) heap.add(arr[i]);
    i = l - 1;
    while (++i <= n) arr[i] = heap.remove();
}

export const heap_sort_test = (arr: number[], cb: (arr:number[]) => void): number[] => {
    const n = arr.length, name = cb.name; 
    console.time(`${name}: ${n}`);
    cb(arr);
    console.timeEnd(`${name}: ${n}`)
    return arr;
}