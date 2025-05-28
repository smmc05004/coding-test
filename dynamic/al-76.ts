export function solution(land: number[][]): number {
  const n = land.length;

  // 아래에서 위로 올라가며 누적
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < 4; j++) {
      // 바로 아래 행의 j번째 열은 제외하고 최대값 선택
      let max = 0;
      for (let k = 0; k < 4; k++) {
        if (k !== j) {
          max = Math.max(max, land[i + 1][k]);
        }
      }
      land[i][j] += max;
    }
  }

  return Math.max(...land[0]);
}

// export function solution(land) {
//   for (let i = 1; i < land.length; i++) {
//     for (let j = 0; j < 4; j++) {
//       const filterd = land[i - 1].filter((_, index) => index !== j);
//       const max = Math.max(...filterd);

//       land[i][j] += max;
//     }
//   }

//   return Math.max(...land[land.length - 1]);
// }

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
