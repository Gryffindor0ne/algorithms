/**
 * 영어 끝말잇기
 * https://programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n, words) {
  for (let i = 0; i < words.length; i++) {
    if (i === 0) continue;
    let used = words.slice(0, i);
    if (
      words[i].slice(0, 1) !== words[i - 1].slice(-1) ||
      used.includes(words[i]) ||
      words[i].length === 1
    )
      return [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)];
  }
  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
