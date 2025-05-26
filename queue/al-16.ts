export function solution(progresses, speeds) {
  const answer: number[] = [];
  const n = progresses.length;

  const daysLeft = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let count = 0;
  let maxDay = daysLeft[0];

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
