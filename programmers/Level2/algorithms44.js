/**
 * 점프와 순간 이동
 * https://programmers.co.kr/learn/courses/30/lessons/12980
 */

/*

처음 풀이.
기본 테스트만 통과!

function solution(n)
{
   let battery = 1
   while (n > 1) {
       if (n % 2 !== 0) {
           n = (n - 1) / 2
           battery++
       }
       n = n / 2
   }
    return battery 
}
*/

// 두번째 풀이 _ 이진법을 이용해 풀었다.

function solution(n) {
  const change = n.toString(2);
  return change.split("").reduce((a, c) => a + c * 1, 0);
}

console.log(solution(5));
console.log(solution(5000));
