export function solution(nums) {
  const uniqueNums = new Set(nums);
  const uniqueSize = uniqueNums.size;

  const k = nums.length / 2;

  return Math.min(uniqueSize, k);
}

console.log(solution([3, 1, 2, 3]));
