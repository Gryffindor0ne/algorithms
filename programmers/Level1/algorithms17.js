/*

다트게임

https://programmers.co.kr/learn/courses/30/lessons/17682

*/

function solution(dartResult) {
  // dartResult를 구분하는 것

  let answer = [];

  dartResult = dartResult.split("");
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    let checker = parseInt(dartResult[i]);
    if (!isNaN(checker)) {
      if (score !== 0) {
        answer.push(score);
      }
      if (checker === 1 && parseInt(dartResult[i + 1]) === 0) {
        score = 10;
        i++;
      } else {
        score = checker;
      }
    }
    if (dartResult[i] === "S") {
      score = Math.pow(score, 1);
    }
    if (dartResult[i] === "D") {
      score = Math.pow(score, 2);
    }
    if (dartResult[i] === "T") {
      score = Math.pow(score, 3);
    }
    if (dartResult[i] === "#") {
      score = score * -1;
    }
    if (dartResult[i] === "*") {
      score = score * 2;
      if (answer.length !== 0)
        answer.splice(answer.length - 1, 1, answer[answer.length - 1] * 2);
    }
  }
  answer.push(score);
  const result = answer.reduce((a, c) => a + c);

  return result;
}


console.log(solution("1S2D*3T"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
