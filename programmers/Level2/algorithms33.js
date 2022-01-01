/**
 * 올바른 괄호
 * https://programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
  let stack = [];
  const bracket = ["left", "right"];
  let brackets = s.split("");
  brackets.forEach((e) => {
    e === "(" ? stack.push("left") : stack.push("right");

    if (stack.length >= 2) {
      if (
        bracket[0] === stack[stack.length - 2] &&
        bracket[1] === stack[stack.length - 1]
      ) {
        stack.splice(stack.length - 2, 2);
      }
    }
  });
  return stack.length === 0 ? true : false;
}

console.log(solution(")()("));
console.log(solution("(())()"));
