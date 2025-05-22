// export function solution(arr1, arr2) {
//   let merged: number[] = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     const val1 = arr1[i];
//     const val2 = arr2[j];

//     if (val1 < val2) {
//       merged.push(val1);
//       i++;
//     } else {
//       merged.push(val2);
//       j++;
//     }
//   }

//   if (i < arr1.length) {
//     const left = arr1.slice(i);
//     console.log("left: ", left);
//     merged = [...merged, ...left];
//   }

//   if (j < arr2.length) {
//     const left = arr2.slice(j);
//     console.log("left: ", left);
//     merged = [...merged, ...left];
//   }

//   return merged;
// }

export function solution(arr1, arr2) {
  let merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const val1 = arr1[i];
    const val2 = arr2[j];

    if (val1 < val2) {
      merged.push(val1);
      i++;
    } else {
      merged.push(val2);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(solution([1, 3, 5], [2, 4, 6]));
console.log(solution([1, 2, 3], [4, 5, 6]));
