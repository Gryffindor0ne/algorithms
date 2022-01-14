/**
 * 방문 길이
 * https://programmers.co.kr/learn/courses/30/lessons/49994
 */

function solution(dirs) {
  let result = 0;
  const position = [0, 0];
  const record = [];
  let current = [];

  for (let i = 0; i < dirs.length; i++) {
    current = position.slice();

    switch (dirs[i]) {
      case "U":
        if (position[1] < 5) position[1]++;
        break;
      case "D":
        if (position[1] > -5) position[1]--;
        break;
      case "L":
        if (position[0] > -5) position[0]--;
        break;
      case "R":
        if (position[0] < 5) position[0]++;
        break;
    }
    if (position.join("") !== current.join("")) {
      let move = [...current, ...position].join("");
      if (record.indexOf(move) === -1) {
        record.push(move);
        record.push([...position, ...current].join(""));
        result++;
      }
    }
  }
  return result;
}

console.log(solution("ULURRDLLU"));
