export function solution(numbers: number[]) {
  const answer: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  const result = [...new Set(answer)].sort((a, b) => a - b);
  return result;
}

// export function solution(numbers: number[]) {
//   const answer: number[] = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < i; j++) {
//       answer.push(numbers[i] + numbers[j]);
//     }
//   }

//   const result = [...new Set(answer)].sort((a, b) => a - b);
//   return result;
// }

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
