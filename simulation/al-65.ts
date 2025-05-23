// export function solution(s: string) {
//   let zeroCount = 0;
//   let tryCount = 0;

//   function convertToBinary(num) {
//     let str = "";

//     while (num > 0) {
//       str = (num % 2) + str;
//       num = Math.floor(num / 2);
//     }

//     return str;
//   }

//   while (s !== "1") {
//     const s1 = s.replace(/0/g, "");
//     const oneLength = s1.length;

//     const s0 = s.replace(/1/g, "");
//     const zeroLength = s0.length;

//     s = convertToBinary(oneLength);

//     zeroCount += zeroLength;
//     tryCount++;
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
