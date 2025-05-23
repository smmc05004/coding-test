export function solution(topping) {
  let answer = 0;

  const toppingMap = new Map();

  for (const t of topping) {
    toppingMap.set(t, (toppingMap.get(t) || 0) + 1);
  }

  const brotherSet = new Set();

  for (const t of topping) {
    brotherSet.add(t);
    toppingMap.set(t, toppingMap.get(t) - 1);

    if (toppingMap.get(t) === 0) {
      toppingMap.delete(t);
    }

    if (brotherSet.size === toppingMap.size) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
