export function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n] & 1_000_000_007;
}

console.log(solution(4));
