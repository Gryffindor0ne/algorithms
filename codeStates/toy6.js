/***
 * 
 * 
 * 코드스테이츠 토이
 * https://urclass.codestates.com/codeproblem/54c08b2e-4c47-47fb-a76a-c3138bde00b1
 * 
 * 
 rotateMatrix
 
문제

2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

---

Advanced
세로와 가로의 길이가 각각 M, N인 2차원 M X N 배열을 시계방향으로 90도씩 K번 회전시킨 배열을 리턴해 보세요. 
회전수가 두 번째 입력으로 주어집니다.

 */

const rotateMatrix = function (matrix, rotation) {
  if (!matrix.length) return [];
  let times;
  rotation ? (times = rotation % 4) : (times = 1);

  while (times > 0) {
    let rowSize = matrix.length;
    let colSize = matrix[0].length;

    const newCreatedMatrix = [];
    for (let row = 0; row < colSize; row++) {
      newCreatedMatrix.push(Array(rowSize).fill(0));
    }

    matrix.forEach((item, row) => {
      item.forEach((unit, col) => {
        newCreatedMatrix[col][rowSize - row - 1] = unit;
      });
    });
    matrix = newCreatedMatrix;
    times--;
  }

  return matrix;
};

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

console.log(
  rotateMatrix(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ],
    104
  )
);

console.log(
  rotateMatrix(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ],
    14
  )
);
