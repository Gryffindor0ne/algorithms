/**
 * n^2 배열 자르기
 * https://programmers.co.kr/learn/courses/30/lessons/87390
 */

/*
 첫번째 풀이 

 기본테스트는 통과하는데 ...
 정확성, 효율성 테스트에서 거의 실패 ㅜ

function solution(n, left, right) {
  if (n === 1) return [1];
  let matrix = new Array(n).fill(0).map((e) => new Array(n).fill(0));
  let newMatrix = [];

  matrix.forEach((e, row) => {
    e.forEach((el, col) => {
      matrix[row][col] = Math.max(row, col) + 1;
    });
  });

  for (let i = 0; i < n; i++) {
    if (newMatrix.length > right) break;
    newMatrix.push(...matrix[i]);
  }
  let result = newMatrix.slice(left, right + 1);
  return result;
}

*/

function solution(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    result.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return result;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));

/*

풀이 원리

[
[1,2,3]
[2,2,3]
[3,3,3]
]

[
[0,0],[0,1],[0,2]
[1,0],[1,1],[1,2]
[2,0],[2,1],[2,2]
]

값은 언제나 열과 행의 값 중 가장 큰 값에 1을 더한 값이 된다. 
이 원리를 이용하여 찾으면 간단해진다.

행의 값은 매트릭스 크기로 순서를 나눈 값이 되고
열의 값은 매트릭스 크기로 순서를 나눈 나머지가 된다.

 */
