module.exports = class Queue {
  _queue = []

  enqueue(element) {
    this._queue.push(element)
    return true
  }

  dequeue() {
    if (this.isEmpty()) return new Error("该队列为空")
    return this._queue.shift()
  }

  push_front(element) {
    this._queue.unshift(element)
    return true
  }

  pop_back() {
    if (this.isEmpty()) return new Error("该队列为空")
    return this._queue.pop()
  }

  head() {
    if (this.isEmpty()) return new Error("该队列为空")
    return this._queue[0]
  }

  tail() {
    if (this.isEmpty()) return new Error("该队列为空")
    return this._queue[this.size() - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this._queue.length
  }

  clear() {
    if (this.isEmpty()) return new Error("该队列为空")
    this._queue.splice(0, this.size())
    return true
  }

}
