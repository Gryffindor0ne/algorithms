/**
 * 코드스테이츠 문제풀이
 *
 * isSubsetOf
 * https://urclass.codestates.com/codeproblem/a4cb0a65-985a-40fb-8063-103167db909a
 */

/*
isSubsetOf

문제
두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

*/

// 레퍼런스 참고해서 품

const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findNum = (arr, target, start) => {
    for (let i = start; i < arr.length; i++) {
      if (arr[i] === target) return i;
      else if (arr[i] > target) return -1;
    }
    return -1;
  };

  let idx = 0;
  for (let j = 0; j < sample.length; j++) {
    idx = findNum(base, sample[j], idx);
    if (idx === -1) return false;
  }
  return true;
};

console.log(isSubsetOf([1, 2, 3, 4, 5], [1, 3]));
console.log(isSubsetOf([10, 99, 123, 7], [7, 99, 123, 1011]));
