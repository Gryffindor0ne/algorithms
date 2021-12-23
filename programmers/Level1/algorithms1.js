"use strict";
/*

로또의 최고 순위와 최저순위
 https://programmers.co.kr/learn/courses/30/lessons/77484
 
*/


function solution(lottos, win_nums) {
  let answer = [];
  let matched = 0;
  let zeroCheck = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCheck++;
    } else if (win_nums.includes(lottos[i])) {
      matched++;
    }
    answer = [
      matched + zeroCheck > 1 ? 7 - (matched + zeroCheck) : 6,
      matched > 1 ? 7 - matched : 6,
    ];
  }
  return answer;
}
