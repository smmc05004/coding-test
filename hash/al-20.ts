export function solution(participant, completion) {
  //   const pObject = {};

  //   for (const p of participant) {
  //     pObject[p] = (pObject[p] || 0) + 1;
  //   }

  //   for (const c of completion) {
  //     pObject[c] -= 1;
  //   }

  //   for (const key in pObject) {
  //     const value = pObject[key];

  //     if (value !== 0) return key;
  //   }

  const obj = {};
  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
