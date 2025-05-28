// export function solution(topping) {
//   let count = 0;

//   for (let i = 0; i < topping.length - 1; i++) {
//     const a = topping.slice(0, i);
//     const b = topping.slice(i);

//     if (new Set(a).size === new Set(b).size) {
//       count++;
//     }
//   }

//   return count;
// }

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
