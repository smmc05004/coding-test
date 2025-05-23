// export function solution(arr, n) {
//   let result: number[][] = arr.map((row) => [...row]);

//   // 90도 회전
//   function rotate(copiedArr) {
//     const answer: number[][] = [];

//     const rows = copiedArr.length;
//     const colums = copiedArr[0].length;

//     for (let i = 0; i < colums; i++) {
//       const row: number[] = [];
//       for (let j = rows - 1; j > -1; j--) {
//         row.push(copiedArr[j][i]);
//       }
//       answer.push(row);
//     }

//     return answer;
//   }

//   for (let i = 0; i < n; i++) {
//     result = rotate(result.map((row) => [...row]));
//   }

//   return result;
// }

export function solution(arr, n) {
  function rotate(arr) {
    const n = arr.length;

    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = arr[i][j];
      }
    }
    return rotated;
  }

  let rotated = arr.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    rotated = rotate(rotated);
  }

  return rotated;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);
