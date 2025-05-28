// export function rotate(arr) {
//   const rows = arr.length;
//   const columns = arr[0].length;

//   const rotated = Array.from({ length: rows }, () => Array(columns).fill(0));

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       rotated[j][columns - 1 - i] = arr[i][j];
//     }
//   }

//   return rotated;
// }
// export function solution(arr, n) {
//   let copy = arr.map((row) => [...row]);

//   for (let i = 0; i < n; i++) {
//     copy = rotate(copy);
//   }

//   return copy;
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
    1
  )
);

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
