// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let rate = [];
  let count = 0;
  stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i++) {
    stages.forEach((el) => {
      if (i === el) count++;
    });
    rate.push([i, count / stages.length]);
    stages.splice(0, count);
    count = 0;
  }

  let rateList = rate.sort((a, b) => b[1] - a[1]);
  for (let j = 0; j < rateList.length; j++) {
    rateList[j] = rateList[j][0];
  }

  return rateList;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
