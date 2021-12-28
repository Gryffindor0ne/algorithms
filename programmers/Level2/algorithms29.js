/*

기능개발
https://programmers.co.kr/learn/courses/30/lessons/42586

*/

// 내가 푼 코드

function solution(progresses, speeds) {
  // 93 -> +1
  // 30 -> +30
  // 55 -> +5
  // [94, 60, 60] -> [95,90,65] -> [96,120,70] -> [97,0,75] -> [98,0,80]->[99,0,85]->[100,0,90] ->[0,0,95]
  // [0,0,100]

  const result = [];
  const queue = new Array(progresses.length).fill(0);

  while (queue.length !== 0) {
    const newProgresses = progresses.map((el, idx) => {
      return (el += speeds[idx]);
    });

    newProgresses.forEach((el, idx) => {
      if (el >= 100) {
        queue[idx] = 1;
      }
    });
    if (queue[0] === 1) {
      let count = 1;
      for (let i = 1; i < queue.length; i++) {
        if (queue[i] !== 1) {
          break;
        }
        count++;
      }
      queue.splice(0, count);
      newProgresses.splice(0, count);
      speeds.splice(0, count);
      result.push(count);
    }
    progresses = newProgresses;
  }
  return result;
}

// 다른 사람 풀이 중 더 좋은 코드 참고하여 다시 푼 코드

function solution(progresses, speeds) {
  const result = [];

  while (speeds.length !== 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    count > 0 && result.push(count);
  }
  return result;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
