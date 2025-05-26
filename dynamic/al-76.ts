// export function solution(land) {
//   let selectedIdx = Number.MIN_SAFE_INTEGER;
//   let max = 0;

//   for (let i = 0; i < land.length; i++) {
//     const row = land[i];
//     const filteredRow = row.filter((_, i) => i !== selectedIdx);

//     const maxNum = Math.max(...filteredRow);
//     const maxIndex = row.indexOf(maxNum);

//     selectedIdx = maxIndex;

//     max += maxNum;
//   }

//   return max;
// }

export function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      const filterd = land[i - 1].filter((_, index) => index !== j);
      console.log("filterd: ", filterd);
      const max = Math.max(...filterd);
      console.log("max: ", max);

      land[i][j] += max;
    }
  }
  console.log("land: ", land);

  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
