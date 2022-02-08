/***
 *
 * [Queue] 박스 포장
 * https://urclass.codestates.com/codeproblem/10a924c1-c7fa-4cec-a0a1-02ffd2cc7190
 */

/**
 문제
마트에서 장을 보고 박스를 포장하려고 합니다. 박스를 포장하는 데는 폭이 너무 좁습니다. 그렇기에 한 줄로 서 있어야 하고, 들어온 순서대로 한 명씩 나가야 합니다.

불행 중 다행은, 인원에 맞게 포장할 수 있는 기구들이 놓여 있어, 모두가 포장을 할 수 있다는 것입니다. 짐이 많은 사람은 짐이 적은 사람보다 포장하는 시간이 길 수밖에 없습니다.

뒷사람이 포장을 전부 끝냈어도 앞사람이 끝내지 못하면 기다려야 합니다. 앞사람이 포장을 끝내면, 포장을 마친 뒷사람들과 함께 한 번에 나가게 됩니다.

만약, 앞사람의 박스는 5 개고, 뒷사람 1의 박스는 4 개, 뒷사람 2의 박스는 8 개라고 가정했을 때, 뒷사람 1이 제일 먼저 박스 포장을 끝내게 되어도 앞사람 1의 포장이 마칠 때까지 기다렸다가 같이 나가게 됩니다.

이때, 통틀어 최대 몇 명이 한꺼번에 나가는지 알 수 있도록 함수를 구현해 주세요.
 */

function paveBox(boxes) {
  let pass = [];
  let count = 0;
  pass.push(boxes[0]);

  for (let i = 1; i < boxes.length; i++) {
    if ((pass.length === 0) | (pass[0] >= boxes[i])) {
      pass.push(boxes[i]);
      continue;
    } else {
      if (count < pass.length) {
        count = pass.length;
      } else {
        count = 1;
      }
      pass = [];
    }
    pass.push(boxes[i]);
  }
  return count < pass.length ? pass.length : count;
}

console.log(paveBox([80, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(paveBox([80, 30, 40, 55, 66, 21, 8, 25, 44, 77, 92]));
console.log(paveBox([1, 5, 7, 9]));
