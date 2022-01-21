/***
 *  N * N 보드게임
 * 코드스테이츠 문제풀이
 * https://urclass.codestates.com/codeproblem/d58ceaba-d316-4b06-a9c0-e64804b8d59e
 */

/*
 N * N의 크기를 가진 보드판 게임

좌표 왼쪽 상단(0, 0)에 말을 놓는다.
말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
조작의 기회는 딱 한 번 주어진다.
조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
예시: UDDLLRRDRR, RRRRR
한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
방문한 곳을 또 방문해도 점수를 획득할 수 없다.
말은 보드 밖으로 나갈 수 없으며, 해당 조작은 무효가 된다.
예시: 2*2 보드판에서 UD를 조작한다면, U는 무효가 되고, D부터 시작한다.
칸 안의 숫자는 0부터 100,000 중에 하나이다.
음수는 없습니다.
획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
 
 */

function test(board, operation) {
  const martix = new Array(board.length)
    .fill(false)
    .map(() => new Array(board.length).fill(false));

  let current = [0, 0];
  let count = 0;
  for (let i = 0; i < operation.length; i++) {
    let [x, y] = current;
    switch (operation[i]) {
      case "U":
        x--;
        if (x >= 0 && !martix[x][y]) {
          current = [x, y];
          count += board[x][y];
          martix[x][y] = true;
          break;
        } else if (x >= 0 && martix[x][y]) {
          current = [x, y];
          break;
        } else {
          continue;
        }
      case "D":
        x++;
        if (x < board.length && !martix[x][y]) {
          current = [x, y];
          count += board[x][y];
          martix[x][y] = true;
          break;
        } else if (x < board.length && martix[x][y]) {
          current = [x, y];
          break;
        } else {
          continue;
        }
      case "L":
        y--;
        if (y >= 0 && !martix[x][y]) {
          current = [x, y];
          count += board[x][y];
          martix[x][y] = true;
          break;
        } else if (y >= 0 && martix[x][y]) {
          current = [x, y];
          break;
        } else {
          continue;
        }
      case "R":
        y++;
        if (y < board.length && !martix[x][y]) {
          current = [x, y];
          count += board[x][y];
          martix[x][y] = true;
          break;
        } else if (y < board.length && martix[x][y]) {
          current = [x, y];
          break;
        } else {
          continue;
        }
    }
  }
  return count;
}

console.log(
  test(
    [
      [111, 0, 1],
      [99, 1, 1],
      [1, 0, 0],
    ],
    "UUUDD"
  )
);

console.log(
  test(
    [
      [0, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
    ],
    "URDDRDRLL"
  )
);

console.log(
  test(
    [
      [999, 999, 999],
      [999, 999, 999],
      [999, 999, 999],
    ],
    "UUUUDUDUDUDUDUD"
  )
);
