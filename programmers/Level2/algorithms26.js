/*

짝지어 제거하기
https://programmers.co.kr/learn/courses/30/lessons/12973

*/

function solution(s) {
  s = s.split("");
  let storage = [];
  storage.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (storage[storage.length - 1] === s[i]) {
      storage.pop();
      continue;
    }
    storage.push(s[i]);
  }
  return storage.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
