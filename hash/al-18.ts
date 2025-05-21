export function countSort(arr, k) {
  const table = new Array(k + 1).fill(0);

  for (const num of arr) {
    if (num <= k) {
      table[num] = 1;
    }
  }

  return table;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);

  for (const num of arr) {
    const complement = target - num;

    if (hashtable[complement] === 1 && num !== complement) {
      return true;
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
