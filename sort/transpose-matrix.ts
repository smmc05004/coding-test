export function matrix(arr) {
  const rows = arr.length;
  const columns = arr[0].length;

  const transpose = Array.from({ length: rows }, () => Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      transpose[j][i] = arr[i][j];
    }
  }

  return transpose;
}

console.log(
  matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
