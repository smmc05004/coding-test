export const solution = (arr: number[]) => {
  const uniqueArr = [...new Set(arr)];

  uniqueArr.sort((a, b) => (a > b ? 1 : -1));

  return uniqueArr;
};

solution([4, 2, 2, 1, 3, 4]);
solution([2, 1, 1, 3, 2, 5, 4]);
