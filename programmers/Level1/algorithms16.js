/*

비밀지도
https://programmers.co.kr/learn/courses/30/lessons/17681

*/
function solution(n, arr1, arr2) {
  // arr1, arr2의 인자를 이진법으로 변환한다.
  // 변환된 수가 n의 길이보다 짧으면 0으로 채운다. (앞쪽)
  // 같은 인덱스끼리 합친다. -> 둘다 1이거나 둘중 하나만 1이어도 1, 둘다 0일 경우만 0
  // 1은 # 0은 ""으로 대체한다.

  const result = [];
  const newArr1 = arr1.map((num) => num.toString(2).padStart(n, 0).split(""));
  const newArr2 = arr2.map((num) => num.toString(2).padStart(n, 0).split(""));

  newArr1.forEach((el, idx) => {
    const answer = [];
    el.forEach((num, i) => {
      if (num === "0" && newArr2[idx][i] === "0") {
        answer.push(" ");
      } else {
        answer.push("#");
      }
    });
    result.push(answer.join(""));
  });

  return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
