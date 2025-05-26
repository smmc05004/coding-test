export function solution() {
  const a = Array.from({ length: 5 }, () => Array(3).fill(0));
  const b = new Array(5).fill(5).map(() => new Array(3).fill(0));
  console.log("a: ", a);
  console.log("b: ", b);
}

console.log(solution());
