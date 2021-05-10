export class Heap {
  protected __heap: number[];
  protected __head: number;
  protected __last: number;
  protected __size: number;
  protected __isMax: boolean;

  constructor(n: number, isMax: boolean = true) {
    this.__heap = new Array(n + 2);
    this.__size = n;
    this.__head = 0;
    this.__last = 0;
    this.__isMax = isMax;
  }

  protected compareWithFa(index: number) {
    if(index <= 1) return false;
    const fatherIndex = index >> 1;
    return this.__isMax ? this.__heap[index] > this.__heap[fatherIndex] : this.__heap[index] < this.__heap[fatherIndex] ;
  }

  protected heapify() {
    let index = this.__head, n = this.__last;
    while(true) {
      let maxPos = index;
      if(index * 2 < n && this.__heap[maxPos] < this.__heap[index * 2]) maxPos = index * 2;
      if(index * 2 + 1 < n && this.__heap[maxPos] < this.__heap[index * 2 + 1]) maxPos = index * 2 + 1;
      if(maxPos === index) break;
      [this.__heap[index], this.__heap[maxPos]] = [this.__heap[maxPos], this.__heap[index]];
      index = maxPos;
    }
  }

  protected heapify_min() {
    let index = this.__head, n = this.__last;
    while(true) {
      let minPos = index;
      if(index * 2 < n && this.__heap[minPos] > this.__heap[index * 2]) minPos = index * 2;
      if(index * 2 + 1 < n && this.__heap[minPos] > this.__heap[index * 2 + 1]) minPos = index * 2 + 1;
      if(minPos === index) break;
      [this.__heap[index], this.__heap[minPos]] = [this.__heap[minPos], this.__heap[index]];
      index = minPos;
    }
  }

  add(val: number) {
    if(this.__last === this.__size + 2) throw new Error("堆溢出");
    if(!this.count()) {
      this.__head++;
      this.__last++;
    }
    this.__heap[this.__last++] = val;
    let index = this.__last - 1;
    while(this.compareWithFa(index)) {
      [this.__heap[index], this.__heap[index >> 1]] = [this.__heap[index >> 1], this.__heap[index]]
      index >>= 1;
    }
  }

  remove() {
    const len = this.count();
    if(len === 0) throw new Error("堆为空");

    [this.__heap[this.__head], this.__heap[this.__last]] = [this.__heap[--this.__last], this.__heap[this.__head]];
    
    this.__isMax ? this.heapify() : this.heapify_min();
    return this.__heap[this.__last];
  }

  count() {
    return this.__last - this.__head;
  }

  output(n?: number) {
    // console.log(this.__heap.filter(i => i).join(" -> "), n);
    
    return this.__heap.join(" -> "); 
  }
  
}

// const arr = [9,8,3,5,6,7]
// const heap = new Heap(arr.length)
// for (const i of arr) {
//   heap.add(i)
// }
// console.log(heap.output())
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());


// const heap = new Heap(10,false);
//
// heap.add(9)
// heap.add(8)
// heap.add(3)
// heap.add(5)
// heap.add(6)
// heap.add(7)
// console.log(heap.output())
// heap.remove()
// heap.output(1)
// heap.remove()
// heap.output(2)
// heap.remove()
// heap.output(3)
// heap.remove()
// heap.output(4)
// heap.remove()
// heap.output(5)
// heap.remove()
// heap.output(6)

