export function polynomialHash(str: string) {
  const p = 31;
  const m = 1_000_000_007;

  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(
      "hashValue * p + str.charCodeAt(i): ",
      hashValue * p + str.charCodeAt(i)
    );
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

export function solution(stringList: string[], queryList: string[]) {
  const hashList = stringList.map((str) => polynomialHash(str));
  console.log("hashList: ", hashList);
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
