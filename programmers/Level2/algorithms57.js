/***
 *
 * 괄호 변환
 * https://programmers.co.kr/learn/courses/30/lessons/60058
 */

function solution(p) {
  const blacket = ["(", ")"];

  const findRightBlacket = (item) => {
    const rightBlacketCheck = item.reduce((acc, next) => {
      if (acc[acc.length - 1] === "(" && next === ")")
        return acc.slice(0, acc.length - 1);
      else {
        return acc + next;
      }
    });
    return rightBlacketCheck.length ? false : true;
  };

  const checkBlacket = (str) => {
    if (str === "") return "";
    let w = str.split("");
    let u = [];
    let v = [];
    let counter = {};

    for (let i = 0; i < w.length; i++) {
      u.push(w[i]);

      blacket.forEach((item, idx) => {
        if (item === u[i]) {
          if (counter[idx]) {
            counter[idx]++;
          } else {
            counter[idx] = 1;
          }
        }
      });

      let value = Object.values(counter);
      if (value[0] === value[1]) {
        break;
      }
    }
    v = w.slice(u.length);

    if (findRightBlacket(u)) return u.concat(checkBlacket(v.join(""))).join("");
    else {
      let created = "";
      created = "(" + checkBlacket(v.join("")) + ")";
      let reverse = [];
      u.slice(1, -1).forEach((item) => {
        item === blacket[0]
          ? reverse.push(blacket[1])
          : reverse.push(blacket[0]);
      });
      created += reverse.join("");
      return created;
    }
  };
  return checkBlacket(p);
}

console.log(solution("(()())()"));
console.log(solution("()))((()"));
