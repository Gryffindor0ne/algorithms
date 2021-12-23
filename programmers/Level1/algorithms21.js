/*

시저 암호

https://programmers.co.kr/learn/courses/30/lessons/12926

*/

function solution(s, n) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alpha2 = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else if (alpha.indexOf(s[i]) < 0) {
      const findIdx = alpha2.indexOf(s[i]);
      const check = findIdx + n;
      const idx = check > 25 ? check - 26 : check;

      answer += alpha2[idx];
    } else {
      const findIdx = alpha.indexOf(s[i]);
      const check = findIdx + n;
      const idx = check > 25 ? check - 26 : check;

      answer += alpha[idx];
    }
  }

  return answer;
}



console.log(solution("a B z", 4));
