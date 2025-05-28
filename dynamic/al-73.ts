export function solution(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib[n] % 1234567;
}

console.log(solution(3));
console.log(solution(5));
