/**
 * 가장 큰 수
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 */

/*
  처음 풀이... 기본 테스트만 통과. 

 function solution(numbers) {
  let result = [];
  let newArr = numbers.map((el) => {
    return el.toString().split("");
  });

  while (newArr.length !== 0) {
    let maxNum = Math.max(...newArr.map((e) => e[0]));
    let selectArr = newArr
      .filter((e) => e[0] === maxNum.toString())
      .sort()
      .reverse();

    if (selectArr.filter((e) => e.length === 1)) {
      let popItem = selectArr.pop();
      for (let i = 0; i < selectArr.length; i++) {
        if (selectArr[i][1] < maxNum) {
          selectArr.splice(i, 0, popItem);
          break;
        }
      }
      if (!selectArr.includes(popItem)) selectArr.push(popItem);
    }
    selectArr.forEach((el) => {
      result.push(el.join(""));
    });
    newArr = newArr.filter((e) => e[0] !== maxNum.toString());
  }

  return result.join("");
}

 */

/**
 * 두번째 풀이
 * 배열을 따로 생성하여 arr[0]로 정렬하여 arr[1]로 리턴!
 * ex) [3,30,34,5,9] => [[3333,'3'], [3030,'30'],[3434, '34'],[5555,'5'],[9999,'9']]
 */

function solution(numbers) {
  if (numbers.reduce((a, c) => a + c) === 0) return "0";
  // [0,0,0]과 같은 상황 처리!
  const newNums = [];
  numbers = numbers.map((e) => e.toString());
  numbers.forEach((e) => {
    newNums.push([parseInt(e.repeat(4).slice(0, 4)), e]);
  });
  newNums.sort((a, b) => b[0] - a[0]);
  return newNums.map((e) => e[1]).join("");
}

console.log(solution([0, 0, 0]));
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([9, 999, 998, 91]));
console.log(solution([121, 12]));
