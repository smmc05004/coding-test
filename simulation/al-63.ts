export function transposeMatrix(matrix) {
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

export function multiplyMatrices(matrix1, matrix2) {
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        const val1 = matrix1[i][k];
        const val2 = matrix2[k][j];

        result[i][j] += val1 * val2;
      }
    }
  }
  return result;
}

export function solution(matrix1, matrix2) {
  const multiply = multiplyMatrices(matrix1, matrix2);
  const result = transposeMatrix(multiply);

  return result;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ]
  )
);
