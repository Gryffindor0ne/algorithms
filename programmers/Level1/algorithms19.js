/*

소수찾기

https://programmers.co.kr/learn/courses/30/lessons/12921

*/

function solution(n) {
  let primes = [0, 0];

  for (let i = 2; i <= n; i++) {
    primes[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (primes[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      primes[j] = 0;
    }
  }
  return primes.filter((e) => e !== 0).length;
}



console.log(solution(10));
