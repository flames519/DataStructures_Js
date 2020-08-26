const Queue = require('../index')
let queue = new Queue()
test('Queue', () => {
  expect(queue.enqueue(1)).toBe(true);
  expect(queue.enqueue(2)).toBe(true);
  expect(queue.enqueue(3)).toBe(true);
  expect(queue.head()).toBe(1);
  expect(queue.size()).toBe(3);
  expect(queue.isEmpty()).toBe(false);
  expect(queue.dequeue(1)).toBe(1);
  expect(queue.head()).toBe(2);
  expect(queue.size()).toBe(2);
  expect(queue.isEmpty()).toBe(false);
  expect(queue.clear()).toBe(true);
  expect(queue.isEmpty()).toBe(true);
})
