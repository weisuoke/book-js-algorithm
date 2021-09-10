class MyStack {
  private queue1: any[];

  private queue2: any[];

  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x: number): void {
    this.queue1.push(x);
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const ans = this.queue1.shift();
    while (this.queue2.length) {
      this.queue1.push(this.queue2.shift());
    }
    return ans;
  }

  top() {
    return this.queue1.slice(0)[0];
  }

  empty() {
    return !this.queue1.length;
  }
}

export default MyStack;
