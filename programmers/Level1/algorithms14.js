/*

2016년
https://programmers.co.kr/learn/courses/30/lessons/12901

*/

function solution(a, b) {
  let answer = "";
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let months = {
    29: [2],
    30: [4, 6, 9, 11],
    31: [1, 3, 5, 7, 8, 10, 12],
  };
  let sum = 0;
  for (let key in months) {
    months[key].forEach((el) => {
      if (el < a) {
        sum = sum + Number(key);
      }
    });
  }
  let checkedNum = (sum + b) % 7;
  answer = days[checkedNum];
  return answer;
}

console.log(solution(5, 24));
