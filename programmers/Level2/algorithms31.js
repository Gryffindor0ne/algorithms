/***
 * 튜플
 * https://programmers.co.kr/learn/courses/30/lessons/64065
 */

// 내 풀이
function solution(s) {
  let result = [];
  let reDesign = [];
  let unit = [];
  let store = "";
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "{") continue;
    if (s[i] === "}") {
      unit.push(parseInt(store));
      store = "";
      reDesign.push(unit);
      unit = [];
    }
    if (typeof parseInt(s[i]) === "number" && !isNaN(parseInt(s[i])))
      store += s[i];
    if (s[i] === ",") {
      if (s[i - 1] === "}") continue;
      unit.push(parseInt(store));
      store = "";
    }
  }
  reDesign.sort((a, b) => a.length - b.length);

  for (let j = 0; j < reDesign.length; j++) {
    const newEl = reDesign[j].filter((e) => !result.includes(e));
    result.push(...newEl);
  }
  return result;
}

// 다른 사람의 풀이 참고하여 더 간결하게 다시 짬.
// 아직 갈 길이 멀다 ㅜ

function solution(s) {
  let result = [];
  let reDesign = [];
  s.slice(2, -2)
    .split("},{")
    .forEach((e) => {
      reDesign.push(e.split(",").map((el) => parseInt(el)));
    });

  reDesign.sort((a, b) => a.length - b.length);

  for (let j = 0; j < reDesign.length; j++) {
    const newEl = reDesign[j].filter((e) => !result.includes(e));
    result.push(...newEl);
  }
  return result;
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
