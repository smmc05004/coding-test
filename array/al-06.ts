export function solution(N, stages) {
  const fail = {};
  let total = stages.length;

  const challenger = Array(N + 2).fill(0);

  for (const stage of stages) {
    challenger[stage] += 1;
  }

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fail[i] = 0;
      continue;
    }

    fail[i] = challenger[i] / total;
    total -= challenger[i];
  }

  const entries: [string, number][] = Object.entries(fail);
  const result = entries.sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
