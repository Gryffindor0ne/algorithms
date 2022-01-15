/**
 * [3차] 압축
 * https://programmers.co.kr/learn/courses/30/lessons/17684
 */

function solution(msg) {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lzw = [];
  let str = [];
  let previous = [];
  msg = msg.split("");

  while (msg.length !== 0) {
    str.push(msg[0]);

    if (alphabet.includes(str.join(""))) {
      previous.push(msg.splice(0, 1));
    } else {
      lzw.push(alphabet.indexOf(previous.join("")));
      alphabet.push(str.join(""));
      str = [];
      previous = [];
    }
  }

  lzw.push(alphabet.indexOf(previous.join("")));
  return lzw;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));
