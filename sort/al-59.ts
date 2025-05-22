export function solution(numbers) {
  const sorted = numbers.sort((a, b) => {
    const val1 = String(a) + String(b);
    const val2 = String(b) + String(a);

    return val1 > val2 ? -1 : 1;
  });

  const answer = sorted.join("");

  return Number(answer) === 0 ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
