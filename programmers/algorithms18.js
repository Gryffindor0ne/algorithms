/*

문자열 내 마음대로 정렬하기
https://programmers.co.kr/learn/courses/30/lessons/12915

*/

function solution(strings, n) {
  let answer = [];

  //n 인덱스 문자 찾기
  let letter = strings
    .map((el) => el.slice(n, n + 1))
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

  // 중복제거
  const set = new Set(letter);
  const newLetter = [...set];

  newLetter.forEach((e) => {
    const checker = strings.filter((point) => point.slice(n, n + 1) === e);
    if (checker.length > 1) {
      checker.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
    }
    answer.push(...checker);
  });

  return answer;
}
console.log(solution(["abce", "abcd", "cdx"], 2));
