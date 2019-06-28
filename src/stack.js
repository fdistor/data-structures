module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }
};
