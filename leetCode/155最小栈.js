class MinStack {
  constructor() {
    this.stack = [];
    this.helper = [];
  }

  push(val) {
    this.stack.push(val);
    const helperLength = this.helper.length;
    if (!helperLength || this.helper[helperLength - 1] >= val) {
      this.helper.push(val);
    } else {
      this.helper.push(this.helper[helperLength - 1]);
    }
  }

  pop() {
    this.stack.pop();
    this.helper.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.helper[this.stack.length - 1];
  }
}
