/*
https://programmers.co.kr/learn/courses/30/lessons/67256
*/

function solution(numbers, hand) {
  // numbers 1,4,7 이면 L
  // numbers 3,6,9 이면 R
  // numbers 2,5,8,0 이면 현재 손 위치에서 번호에 가까운 손 사용 -> 같은 거리면 hand의 값 입력

  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let leftHand = [3, 0];
  let rightHand = [3, 2];
  let handLetter = hand === "right" ? "R" : "L";
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (numbers[i] === keypad[j][0]) {
        answer.push("L");
        leftHand = [j, 0];
        break;
      } else if (numbers[i] === keypad[j][2]) {
        answer.push("R");
        rightHand = [j, 2];
        break;
      } else if (numbers[i] === keypad[j][1]) {
        const [row, col] = leftHand;
        const [row2, col2] = rightHand;
        if (
          Math.abs(row - j) + Math.abs(col - 1) >
          Math.abs(row2 - j) + Math.abs(col2 - 1)
        ) {
          answer.push("R");
          rightHand = [j, 1];
          break;
        } else if (
          Math.abs(row - j) + Math.abs(col - 1) <
          Math.abs(row2 - j) + Math.abs(col2 - 1)
        ) {
          answer.push("L");
          leftHand = [j, 1];
          break;
        } else {
          answer.push(handLetter);
          handLetter === "R" ? (rightHand = [j, 1]) : (leftHand = [j, 1]);
          break;
        }
      }
    }
  }
  return answer.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
