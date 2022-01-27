/***
 *
 * 예상 대진표
 * https://programmers.co.kr/learn/courses/30/lessons/12985
 */

function solution(n, a, b) {
  let count = 0;

  while (a !== b) {
    count++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return count;
}

console.log(solution(8, 4, 7));
