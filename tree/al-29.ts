export function solution(enroll, referral, seller, amount) {
  let parent = {};
  let total = {};

  for (let i = 0; i < enroll.length; i++) {
    const en = enroll[i];
    parent[en] = referral[i];
    total[en] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let curName = seller[i];

    while (money > 0 && curName !== "-") {
      const percent10 = Math.floor(money / 10);
      total[curName] += money - percent10;
      curName = parent[curName];
      money = percent10;
    }
  }

  // 더 빠름
  // const profitArr = Array(seller.length).fill(0);
  // for (let i = 0; i < enroll.length; i++) {
  //   const money = total[enroll[i]];

  //   if (!money) continue;

  //   profitArr[i] = money;
  // }

  // return profitArr;

  const result = enroll.map((name) => total[name]);
  return result;
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
// console.log(
//   solution(
//     ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//     ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//     ["sam", "emily", "jaimie", "edward"],
//     [2, 3, 5, 4]
//   )
// );
