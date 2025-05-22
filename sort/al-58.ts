// export function solution(arr, commands) {
//   const answer: number[] = [];

//   for (let i = 0; i < commands.length; i++) {
//     const command = commands[i];

//     const sliced = arr.slice(command[0] - 1, command[1]);
//     sliced.sort((a, b) => a - b);

//     answer.push(sliced[command[2] - 1]);
//   }

//   return answer;
// }

export function solution(arr, commands) {
  const answer: number[] = [];

  for (const command of commands) {
    const [i, j, k] = command;

    const sliced = arr.slice(i - 1, j);
    sliced.sort((a, b) => a - b);

    answer.push(sliced[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
