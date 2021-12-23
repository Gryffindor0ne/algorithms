/*

최소직사각형

https://programmers.co.kr/learn/courses/30/lessons/86491

*/

function solution(sizes) {
  let maxRow = 0;
  let maxCol = 0;

  sizes.forEach((el) => {
    const [row, col] = el;
    if (row < col) {
      el = [col, row];
    }
    if (maxRow < el[0]) maxRow = el[0];
    if (maxCol < el[1]) maxCol = el[1];
  });
  return maxRow * maxCol;
}

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
