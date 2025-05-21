export function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j as number] = i - (j as number);
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const i = stack.pop();
    answer[i as number] = n - 1 - (i as number);
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
console.log(solution([1, 6, 9, 5, 3, 2, 7]));
