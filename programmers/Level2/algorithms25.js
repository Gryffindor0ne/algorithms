/*

124 나라의 숫자
https://programmers.co.kr/learn/courses/30/lessons/12899

*/

function solution(n) {
  let country = [["1", "2", "4"]];

  const searchNum = (target) => {
    let findRow = Math.floor(target / 3);
    let fixCol = 0;
    if (target % 3 === 2) {
      fixCol = 1;
    } else if (target % 3 === 0) {
      fixCol = 2;
      findRow -= 1;
    }

    if (findRow === 0) return country[0][fixCol];

    const findNum = searchNum(findRow);
    const createNum = findNum + country[0][fixCol];

    return createNum;
  };
  return searchNum(n);
}

console.log(solution(1));
console.log(solution(4));
