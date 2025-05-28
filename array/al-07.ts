export function isInBoundary(x, y, width, height) {
  return -width <= x && x <= width && -height <= y && y <= height;
}

export function solution(dirs) {
  let x = 0;
  let y = 0;

  const width = 5;
  const height = 5;

  const move = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  const foot = new Set();

  for (const dir of dirs) {
    const [dx, dy] = move[dir];

    const tx = x + dx;
    const ty = y + dy;

    if (isInBoundary(tx, ty, width, height)) {
      foot.add(`${x},${y}->${tx},${ty}`);

      x = tx;
      y = ty;
    }
  }

  return foot.size;
}

// console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
