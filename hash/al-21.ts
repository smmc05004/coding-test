export function isSameObj(wantObj, discountObj) {
  const wantKeys = Object.keys(wantObj);
  const discountKeys = Object.keys(discountObj);

  if (wantKeys.length !== discountKeys.length) return false;

  for (const key in wantObj) {
    if (wantObj[key] !== discountObj[key]) return false;
  }

  return true;
}

export function solution(want, number, discount) {
  const wantObj = {};
  let count = 0;

  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const discountObj = {};

    for (let j = i; j < i + 10; j++) {
      discountObj[discount[j]] = (discountObj[discount[j]] || 0) + 1;
    }

    if (isSameObj(wantObj, discountObj)) {
      count++;
    }
  }
  return count;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
