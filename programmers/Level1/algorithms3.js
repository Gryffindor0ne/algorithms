"use strict";

/*

크레인 인형뽑기 게임

https://programmers.co.kr/learn/courses/30/lessons/64061

*/

function solution(board, moves) {
  let answer = 0;
  let choice = [];
  /* 
    [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]    
    ]
    */

  // moves는 순서-> 1이면 0번째 인덱스 확인 (배열에서 순차적으로 주어진 숫자에서 -1 한 인덱스 서치, 0이 아닌 숫자 나오면 새로운 배열에 추가)
  // -> 인접한 숫자가 같으면 두 숫자 삭제하고 카운터 올림.

  moves.forEach((step) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][step - 1] !== 0) {
        choice.push(board[i][step - 1]);
        board[i][step - 1] = 0;
        break;
      }
    }
    if (
      choice.length !== 0 &&
      choice[choice.length - 1] === choice[choice.length - 2]
    ) {
      choice.splice(choice.length - 2);
      answer += 2;
    }
  });
  return answer;
}
