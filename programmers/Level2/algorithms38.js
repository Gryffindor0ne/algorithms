/**
 * 카펫
 * https://programmers.co.kr/learn/courses/30/lessons/42842
 */

function solution(brown, yellow) {
  const totalBox = brown + yellow;

  for (let i = Math.floor(totalBox / 2) - 1; i > 2; i--) {
    if (totalBox % i === 0) {
      let value = totalBox / i;
      if ((i - 2) * (value - 2) === yellow) return [i, value];
    }
  }
}

console.log(solution(10, 2));
console.log(solution(24, 24));
