export function solution(n, words) {
  let prevWord = words[0][0];
  const usedWord = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (usedWord.has(word) || prevWord !== word[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    } else {
      usedWord.add(word);

      prevWord = word.slice(-1);
    }
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encorage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
