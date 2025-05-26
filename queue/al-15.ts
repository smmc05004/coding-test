class Queue {
  items: number[];
  rear: number;
  front: number;

  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }
}

export function solution(N, K) {
  const queue = new Queue();

  for (let i = 0; i < N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K; i++) {
      const poped = queue.pop();
      queue.push(poped);
    }
    queue.pop();
  }

  return queue.pop();
}

console.log(solution(5, 2));
