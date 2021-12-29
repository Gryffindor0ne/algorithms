/**
 * 프린터
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 */

function solution(priorities, location) {
  let checker = new Array(priorities.length).fill(false);
  checker[location] = true;
  let count = 0;

  while (checker.includes(true)) {
    if (priorities[0] !== Math.max(...priorities)) {
      priorities.push(priorities.shift());
      checker.push(checker.shift());
    } else {
      priorities.shift();
      checker.shift();
      count++;
    }
  }
  return count;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
