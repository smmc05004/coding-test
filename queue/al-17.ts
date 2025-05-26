// export function solution(card1, card2, goal) {
//   let i = 0;
//   let j = 0;

//   for (const c of goal) {
//     if (card1[i] === c) {
//       i++;
//     } else if (card2[j] === c) {
//       j++;
//     } else {
//       return "No";
//     }
//   }

//   return "Yes";
// }

class Queue<T> {
  items: T[] = [];
  front = 0;
  rear = 0;

  constructor(items) {
    this.items = items;
    this.rear = items.length;
  }

  push(item: T) {
    this.items.push(item);
    this.rear++;
  }

  pop(): T {
    return this.items[this.front++];
  }

  firstItem() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

export function solution(card1, card2, goal) {
  const c1q = new Queue(card1);
  const c2q = new Queue(card2);
  const gq = new Queue(goal);

  while (!gq.isEmpty()) {
    const c = gq.firstItem();

    if (c === c1q.firstItem()) {
      c1q.pop();
      gq.pop();
    } else if (c === c2q.firstItem()) {
      c2q.pop();
      gq.pop();
    } else {
      return "No";
    }
  }

  return gq.isEmpty() ? "Yes" : "No";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
