/**
 * 소수찾기
 * https://programmers.co.kr/learn/courses/30/lessons/42839
 */

function solution(numbers) {
  let stan = "";
  let count = 0;
  let check = new Array(7).fill(false);
  let arr = [];

  // 소수찾아 카운트
  const isPrime = (num) => {
    if (num === 0 || num === 1) return;
    for (let k = 2; k <= Math.sqrt(num); k++) {
      if (num % k === 0) return;
    }
    count++;
  };

  // 경우의 수 모든 찾는 재귀
  const recur = (n, stan, len) => {
    // 탈출조건 : 만들고 있는 자릿수와 동일할 때
    if (stan.length === len) {
      if (!arr.includes(parseInt(stan))) arr.push(parseInt(stan));
      return;
    }

    for (let l = 0; l < n.length; l++) {
      if (check[l]) continue;
      stan += n.charAt(l);
      check[l] = true;
      recur(n, stan, len);
      check[l] = false;
      stan = stan.substr(0, stan.length - 1);
    }
  };

  // 경우의 수 다 찾기
  for (let i = 1; i <= numbers.length; i++) {
    recur(numbers, stan, i);
  }

  // 경우의 수 중 소수 찾기
  for (let j = 0; j < arr.length; j++) {
    isPrime(arr[j]);
  }
  return count;
}

console.log(solution("013"));
