// export function solution(s) {
//   const answer = new Set();
//   const numbers = s.slice(2, -2).split("},{");
//   numbers.sort((a, b) => a.length - b.length);

//   for (const element of numbers) {
//     const nums = element.split(",").map(Number);
//     for (const num of nums) {
//       if (!answer.has(num)) {
//         answer.add(num);
//       }
//     }
//   }

//   return Array.from(answer);
// }

export function solution(s) {
  const numbers = s.slice(2, -2).split("},{");
  numbers.sort((a, b) => a.length - b.length);
  const answer: number[] = [];

  for (const element of numbers) {
    const nums = element.split(",");
    for (const num of nums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,3,4},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
