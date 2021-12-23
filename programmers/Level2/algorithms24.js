/*

문자열 압축
https://programmers.co.kr/learn/courses/30/lessons/60057

*/

function solution(s) {
  let result = [];
  let answer = "";
  let count = 1;
  const unitNum = Math.floor(s.length / 2);
  if (s.length === 1) return 1;

  for (let i = 1; i <= unitNum; i++) {
    for (let j = 0; j < s.length; j += i) {
      let unit = s.slice(j, j + i);
      let compareUnit = s.slice(j + i, j + i * 2);

      if (unit === compareUnit) {
        count++;
      } else {
        count === 1 ? (answer += unit) : (answer += count + unit);
        count = 1;
      }
    }
    result.push(answer.length);
    answer = "";
  }

  return Math.min(...result);
}

console.log(solution("abcabcabcabcdededededede"));
console.log(solution("ababcdcdababcdcd"));
