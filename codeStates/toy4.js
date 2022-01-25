/**
 * 코드스테이츠 문제풀이
 *
 * tiling
 * https://urclass.codestates.com/codeproblem/c53e45aa-095e-4742-967d-d22cb1ba9d6b
 */

/*
 * 문제
세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 
이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.
 */

let tiling = function (n) {
  let answer = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    answer.push(answer[i - 1] + answer[i - 2]);
  }
  return answer[n];
};

console.log(tiling(4));
console.log(tiling(10));
console.log(tiling(30));
