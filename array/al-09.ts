export function solution(decimal) {
  const stack: number[] = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);

    decimal = Math.floor(decimal / 2);
  }

  let answer = "";
  while (stack.length > 0) {
    answer += stack.pop();
  }

  return answer;
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
