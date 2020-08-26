const Queue = require('../Queue')
module.exports = function Stack() {
  let queue_1 = new Queue()
  let queue_2 = new Queue()
  let data_queue, empty_queue
  let init_queue = () => {
    if (queue_1.isEmpty() && queue_2.isEmpty()) {
      data_queue = queue_1
      empty_queue = queue_2
    } else if (queue_1.isEmpty()) {
      data_queue = queue_2
      empty_queue = queue_1
    } else {
      data_queue = queue_1
      empty_queue = queue_2
    }
  }
  this.push = function (item) {
    init_queue()
    return data_queue.enqueue(item)
  }
  this.pop = function () {
    init_queue()
    while (data_queue.size() > 1) {
      empty_queue.enqueue(data_queue.dequeue())
    }
    return data_queue.dequeue()
  }
  this.top = function () {
    init_queue()
    return data_queue.tail()
  }
  this.size = function () {
    init_queue()
    return data_queue.size()
  }
  this.isEmpty = function () {
    init_queue()
    return data_queue.size() === 0
  }
  this.clear = function () {
    init_queue()
    return data_queue.clear()
  }
}
