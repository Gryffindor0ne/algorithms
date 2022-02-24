/***
 *
 * 괄호 회전하기
 * https://programmers.co.kr/learn/courses/30/lessons/76502
 */

function solution(s) {
  let result = 0;

  const checkedBrackets = (item) => {
    const stack = [];
    const opener = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    const closer = ")}]";

    for (let i = 0; i < item.length; i++) {
      if (item[i] in opener) {
        stack.push(item[i]);
      } else if (closer.includes(item[i])) {
        const head = stack.pop();
        const part = opener[head];
        if (part !== item[i]) return false;
      }
    }
    return stack.length === 0;
  };

  for (let j = 0; j < s.length; j++) {
    if (checkedBrackets(s)) result++;
    s = s.substr(1) + s.substr(0, 1);
  }
  return result;
}

console.log(solution("}]()[{"));
console.log(solution("[](){}"));
console.log(solution("}}}"));
