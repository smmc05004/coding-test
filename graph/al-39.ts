export class Queue<T> {
  items: T[] = [];
  front = 0;
  rear = 0;

  push(item: T) {
    this.items.push(item);
    this.rear++;
  }

  pop(): T {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

export function solution(graph, start) {
  const adjList = {};

  for (const [u, v] of graph) {
    if (!adjList[u]) {
      adjList[u] = [];
    }

    adjList[u].push(v);
  }

  const visited = new Set();
  const q = new Queue<string>();
  const result: string[] = [start];

  q.push(start);
  visited.add(start);

  while (!q.isEmpty()) {
    const node = q.pop();

    for (let neighbor of adjList[node] || []) {
      if (!visited.has(neighbor)) {
        q.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
);
