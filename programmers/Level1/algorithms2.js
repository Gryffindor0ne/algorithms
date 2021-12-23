"use strict";

/*

숫자 문자열과 영단어

https://programmers.co.kr/learn/courses/30/lessons/81301

*/


function solution(s) {
  let answer = 0;
  const word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < word.length; i++) {
    s = s.replace(new RegExp(`${word[i]}`, "g"), i);
  }
  answer = parseInt(s);
  return answer;
}
