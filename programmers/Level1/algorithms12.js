/*

폰켓몬
https://programmers.co.kr/learn/courses/30/lessons/1845

*/

function solution(nums) {
  const choiceNum = nums.length / 2;

  const newNums = [...new Set(nums)];

  return choiceNum > newNums.length ? newNums.length : choiceNum;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2, 6, 6, 6]));
