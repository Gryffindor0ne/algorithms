/**
 * [3차] n진수 게임
 * https://programmers.co.kr/learn/courses/30/lessons/17687
 */

function solution(n, t, m, p) {
  let result = "";
  let createStr = "";
  let temp = 0;
  while (createStr.length <= t * m) {
    let newNum = temp.toString(n).toUpperCase();
    createStr += newNum;
    temp += 1;
  }
  for (let j = p; j <= t * m; j += m) {
    result += createStr.charAt(j - 1);
  }
  return result;
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
