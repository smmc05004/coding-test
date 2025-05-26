export function solution(arr: number[]) {
  const uniqueArr = [...new Set(arr)];

  return uniqueArr.sort((a, b) => b - a);
}

solution([4, 2, 2, 1, 3, 4]);
solution([2, 1, 1, 3, 2, 5, 4]);
