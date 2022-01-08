/**
 * 구명보트
 * https://programmers.co.kr/learn/courses/30/lessons/42885
 */

function solution(people, limit) {
  let result = 0;
  people.sort((a, b) => a - b);
  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) people.shift();
    people.pop();
    result++;
  }
  return result;
}

console.log(solution([70, 50, 80, 50], 100));
