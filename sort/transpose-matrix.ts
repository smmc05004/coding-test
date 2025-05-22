export function matrix(arr) {
  const answer: number[][] = [];

  const rows = arr.length;
  const columns = arr[0].length;

  for (let i = 0; i < columns; i++) {
    const row: number[] = [];
    for (let j = 0; j < rows; j++) {
      row.push(arr[j][i]);
    }
    answer.push(row);
  }
  return answer;
}

console.log(
  matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
