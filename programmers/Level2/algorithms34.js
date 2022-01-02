/**
 * 다음 큰 숫자
 * https://programmers.co.kr/learn/courses/30/lessons/12911
 */

function solution(n) {
  let stan = n.toString(2).split("");
  let count = stan.filter((e) => e === "1").reduce((a, c) => a + c);
  let m = n;

  while (n > 0) {
    m += 1;
    let stan2 = m.toString(2).split("");
    let count2 = stan2.filter((e) => e === "1").reduce((a, c) => a + c);
    if (count === count2) {
      return m;
    }
  }
}

console.log(solution(78));
console.log(solution(15));
