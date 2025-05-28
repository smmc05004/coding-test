// export function solution(s) {
//   let str = s;

//   let zeroCount = 0;
//   let tryCount = 0;

//   while (str !== "1") {
//     tryCount++;

//     const filter0 = str.replace(/1/g, "");
//     zeroCount += filter0.length;

//     const filter1 = str.replace(/0/g, "");

//     const binary = filter1.length.toString(2);
//     str = binary;
//   }

//   return [tryCount, zeroCount];
// }

export function solution(s) {
  let countTransform = 0;
  let countZero = 0;

  while (s !== "1") {
    s = s.split("");
    countTransform++;
    countZero += s.filter((c) => c === "0").length;
    s = s.filter((c) => c === "1").length.toString(2);
  }

  return [countTransform, countZero];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
