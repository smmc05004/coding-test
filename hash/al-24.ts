export function solution(id_list, report, k) {
  const answer: number[] = [];

  const reportedObj = {};
  const countObj = {};

  for (let i = 0; i < report.length; i++) {
    const r = report[i];
    const [user, reportedId] = r.split(" ");

    if (!reportedObj[reportedId]) {
      reportedObj[reportedId] = new Set();
    }

    reportedObj[reportedId].add(user);
  }

  const keys = Object.keys(reportedObj);

  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const r = reportedObj[name];
    if (r?.size >= k) {
      for (const uid of reportedObj[name]) {
        countObj[uid] = (countObj[uid] || 0) + 1;
      }
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    const count = countObj[id_list[i]];
    answer.push(count || 0);
  }

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
