export function solution(nums) {
  const uniqueNums = new Set(nums);
  const uniqueSize = uniqueNums.size;

  const numSize = nums.length / 2;

  return Math.min(uniqueSize, numSize);
}

console.log(solution([3, 1, 2, 3]));
