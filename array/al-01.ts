export const solution = (arr: number[]) => {
  arr.sort((a, b) => (a > b ? 1 : -1));
  console.log("---------");
};

solution([1, 2, 3]);
