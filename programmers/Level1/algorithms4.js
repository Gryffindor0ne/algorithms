/*

음양 더하기

https://programmers.co.kr/learn/courses/30/lessons/76501
 
 */

function solution(absolutes, signs) {
  const newArr = absolutes.map((el, idx) => {
    if (signs[idx] === false) {
      return el * -1;
    }
    return el;
  });

  const result = newArr.reduce((acc, cur) => acc + cur);

  return result;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
