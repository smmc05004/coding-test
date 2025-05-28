export function solution(record) {
  const idObj = {};
  const msges: string[] = [];

  for (const m of record) {
    const [action, uid, nickName] = m.split(" ");

    if (nickName) {
      idObj[uid] = nickName;
    }
  }

  for (const m of record) {
    const [action, uid] = m.split(" ");

    const name = idObj[uid];

    switch (action) {
      case "Enter":
        msges.push(`${name}님이 들어왔습니다.`);
        break;
      case "Leave":
        msges.push(`${name}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  }

  return msges;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
