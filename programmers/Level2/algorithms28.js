/*

오픈채팅방
https://programmers.co.kr/learn/courses/30/lessons/42888

*/

function solution(record) {
  const result = [];
  const process = [];
  const newData = {};

  record.forEach((el) => {
    const checker = el.split(" ");
    if (checker[0] === "Enter") {
      newData[checker[1]] = checker[2];
      process.push({ e: checker[1] });
    }
    if (checker[0] === "Leave") {
      process.push({ l: checker[1] });
    }
    if (checker[0] === "Change") {
      newData[checker[1]] = checker[2];
    }
  });
  process.map((el) => {
    for (let key in el) {
      if (key === "e") {
        result.push(`${newData[el[key]]}님이 들어왔습니다.`);
      }
      if (key === "l") {
        result.push(`${newData[el[key]]}님이 나갔습니다.`);
      }
    }
  });

  return result;
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
