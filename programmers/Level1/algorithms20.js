/*

최대공약수와 최소공배수

https://programmers.co.kr/learn/courses/30/lessons/12940

*/

function solution(n, m) {
  let divisor = [];
  let multiple = [];
  let maxDivisor = 0;
  let minMultiple = 0;
  const [s, l] = [n, m].sort((a, b) => a - b);

  const makeDivisor = (unit) => {
    for (let i = 1; i <= unit; i++) {
      if (unit % i === 0) {
        divisor.push(i);
      }
    }
  };
  makeDivisor(l);

  for (let j = 1; j <= s; j++) {
    if (s % j === 0) {
      if (divisor.includes(j)) {
        maxDivisor = j;
      }
    }
  }

  const makeMultiple = (unit) => {
    let multiNum = unit;
    while (multiNum <= n * m) {
      multiple.push(multiNum);
      multiNum += unit;
    }
  };

  makeMultiple(s);

  let stan = l;
  while (stan <= n * m) {
    if (multiple.includes(stan)) {
      minMultiple = stan;
      break;
    }
    stan += l;
  }

  return [maxDivisor, minMultiple];
}



console.log(solution(3, 12));
console.log(solution(2, 5));
