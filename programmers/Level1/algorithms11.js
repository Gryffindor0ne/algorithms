/*

모의고사

https://programmers.co.kr/learn/courses/30/lessons/42840

*/

function solution(answers) {
  let answer = [];
  let count = {};
  const personType1 = [1, 2, 3, 4, 5];
  const personType2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const personType3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === personType1[i % 5]) {
      Object.keys(count).includes("1") ? (count[1] += 1) : (count[1] = 1);
    }
    if (answers[i] === personType2[i % 8]) {
      Object.keys(count).includes("2") ? (count[2] += 1) : (count[2] = 1);
    }
    if (answers[i] === personType3[i % 10]) {
      Object.keys(count).includes("3") ? (count[3] += 1) : (count[3] = 1);
    }
  }

  const maxValue = Math.max(...Object.values(count));

  for (let key in count) {
    if (count[key] === maxValue) {
      answer.push(parseInt(key));
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 2, 3, 2, 2]));
