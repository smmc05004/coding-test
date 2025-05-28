export function solution(n: number) {
  return n.toString(2).replace(/0/g, "").length;
}

// export function solution(n: number) {
//   return n
//     .toString(2)
//     .split("")
//     .filter((c) => c === "1").length;
// }

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
