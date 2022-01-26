/***
 * 큰 수 만들기
 * https://programmers.co.kr/learn/courses/30/lessons/42883
 */

function solution(number, k) {
  const result = [];
  const len = number.length;
  for (let i = 0; i < len; i++) {
    let checkNum = number[i] * 1;
    while (k > 0 && result.length && result[result.length - 1] * 1 < checkNum) {
      result.pop();
      k--;
    }
    result.push(number[i]);
  }
  return result.join("").slice(0, len - k);
}

console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("987654321", 8));
console.log(solution("77777", 1));
