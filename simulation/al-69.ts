export function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const width = Math.abs(board[0] / 2);
  const height = Math.abs(board[1] / 2);

  function isInBoard(x, y, dx, dy) {
    const movex = x + dx;
    const movey = y + dy;

    return (
      -width <= movex && movex <= width && -height <= movey && movey <= height
    );
  }

  for (const k of keyinput) {
    const [dx, dy] = moves[k];

    if (isInBoard(x, y, dx, dy)) {
      x += dx;
      y += dy;
    }
  }

  return [x, y];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
