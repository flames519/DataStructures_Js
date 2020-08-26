module.exports = class Stack {
  _stack = []

  push(element) {
    this._stack.push(element)
    return true
  }

  pop() {
    if (this.isEmpty()) return new Error("该栈为空")
    return this._stack.pop()
  }

  top() {
    if (this.isEmpty()) return new Error("该栈为空")
    return this._stack[this.size() - 1]
  }

  size() {
    return this._stack.length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    if (this.isEmpty()) return new Error("该栈为空")
    this._stack.splice(0, this.size())
    return true
  }

}
