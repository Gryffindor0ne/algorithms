/**
 * 숫자의 표현
 * https://programmers.co.kr/learn/courses/30/lessons/12924
 */

function solution(n) {
  let count = 1;
  let target = Math.floor(n / 2);
  for (let i = 1; i <= target; i++) {
    let sum = 0;
    for (let j = i; j <= target + 1; j++) {
      sum += j;
      if (sum === n) {
        count += 1;
        break;
      }
      if (sum > n) break;
    }
  }
  return count;
}

console.log(solution(15));
