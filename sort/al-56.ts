export function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    }

    return a[n] > b[n] ? 1 : -1;
  });

  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
