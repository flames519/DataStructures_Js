const Queue = require(".");

function fn(len, arrA, arrB) {
  const qa = new Queue(len), qb = new Queue(len);
  for (let i = 0; i < len; i++) {
    while(!qa.isEmpty() && arrA[qa.tail()] > arrA[i]) qa.pop_back();
    while(!qb.isEmpty() && arrB[qb.tail()] > arrB[i]) qb.pop_back();
    qa.enqueue(i);
    qb.enqueue(i);
    if(qa.size() !== qb.size()) {
      return i;
    }
  }
  return len;
}

console.log(fn(5, [3, 1, 5, 2, 4], [5, 2, 4, 3, 1]));