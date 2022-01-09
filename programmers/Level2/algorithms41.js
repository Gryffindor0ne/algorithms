/**
 * 이진 변환 반복하기
 * https://programmers.co.kr/learn/courses/30/lessons/70129
 */

function solution(s) {
  let times = 0;
  let count = 0;

  while (s !== "1") {
    let separated = s.split("");
    let sum = separated.reduce((a, c) => {
      if (c !== "0") {
        return a + c * 1;
      } else {
        count++;
        return a;
      }
    }, 0);
    times++;
    s = sum.toString(2);
  }
  return [times, count];
}

console.log(solution("110010101001"));
console.log(solution("1111111"));
