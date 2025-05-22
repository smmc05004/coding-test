// export function solution(n) {
//   const numArr = String(n).split("");

//   numArr.sort((a, b) => (Number(a) < Number(b) ? 1 : -1));

//   return Number(numArr.join(""));
// }

export function solution(n) {
  const digits = Array.from(String(n), Number);

  digits.sort((a, b) => b - a);

  return Number(digits.join(""));
}

console.log(solution(118372));
