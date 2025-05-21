export function polynomialHash(str: string) {
  const p = 31;
  const m = 1_000_000_007;

  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str[i].charCodeAt(0)) % m;
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
