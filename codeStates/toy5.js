/***
 * 
 * 코드스테이츠
 * https://urclass.codestates.com/codeproblem/ecff6b4c-be78-4cc6-9005-920976f1e826
 * 
 * 
 * 
balancedBrackets

문제
문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

다음 단계에 맞춰 함수를 작성해 보세요
- 괄호의 종류를 단 한가지로 한정합니다.
- 괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
- 괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.
 */

const balancedBrackets = (item) => {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closer = "}])";

  for (let i = 0; i < item.length; i++) {
    if (item[i] in opener) {
      stack.push(item[i]);
    } else if (closer.includes(item[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== item[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(balancedBrackets("(((((((((())))))))))"));
console.log(balancedBrackets("[(]{)}"));
console.log(balancedBrackets("[({})]"));
