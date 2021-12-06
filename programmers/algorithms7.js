"use strict";

//https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  // lost, reserve 둘다 있으면 둘다 삭제.
  // reserve에서 확인한 수가 lost에 존재하면 각각 삭제한다.
  // 마지막에 lost 길이 확인하고 n에서 그 길이만큼 빼주면 된다.

  reserve.sort((a, b) => a - b);
  lost.sort((a, b) => a - b);
  let duplicate = [];

  lost.forEach((el) => {
    reserve.forEach((re) => {
      if (re === el) {
        duplicate.push(re);
      }
    });
  });
  duplicate.forEach((el) => {
    lost = lost.filter((e) => el !== e);
    reserve = reserve.filter((e) => el !== e);
  });

  reserve.forEach((el) => {
    if (lost.includes(el - 1)) {
      lost.splice(lost.indexOf(el - 1), 1);
    } else if (lost.includes(el + 1)) {
      lost.splice(lost.indexOf(el + 1), 1);
    }
  });

  return n - lost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
