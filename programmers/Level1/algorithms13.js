/*

예산
https://programmers.co.kr/learn/courses/30/lessons/12982

*/

function solution(d, budget) {
  let count = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  let total = d.reduce((a, c) => a + c);

  if (total > budget) {
    for (let i = 0; i < d.length; i++) {
      sum += d[i];
      if (sum <= budget) {
        count++;
      } else {
        return count;
      }
    }
  }
  return d.length;
}


console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
