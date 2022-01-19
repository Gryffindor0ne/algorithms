/**
 * 수식최대화
 * https://programmers.co.kr/learn/courses/30/lessons/67257
 */

function solution(expression) {
  let result = [];
  let calcSet = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  const calc = [];
  const separated = [];
  expression = expression.split("");
  expression.forEach((e) => {
    if (e === "-" || e === "+" || e === "*") {
      if (calc.indexOf(e) === -1) calc.push(e);
    }
  });
  let unit = "";
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "-" ||
      expression[i] === "+" ||
      expression[i] === "*"
    ) {
      separated.push(unit);
      separated.push(expression[i]);
      unit = "";
      continue;
    }
    unit += expression[i];
  }
  separated.push(unit);

  const calculation = (a, b, calc) => {
    if (calc === "-") return parseInt(a) - parseInt(b);
    if (calc === "+") return parseInt(a) + parseInt(b);
    if (calc === "*") return parseInt(a) * parseInt(b);
  };

  if (calc.length === 2) {
    calcSet = [calc, [calc[1], calc[0]]];
  }
  if (calc.length === 1) calcSet = [calc];

  let newSet = [];
  for (let i = 0; i < calcSet.length; i++) {
    newSet = separated.slice();
    for (let j = 0; j < calcSet[i].length; j++) {
      while (newSet.includes(calcSet[i][j])) {
        for (let k = 1; k < newSet.length; k += 2) {
          if (newSet[k] === calcSet[i][j]) {
            let sum = calculation(newSet[k - 1], newSet[k + 1], newSet[k]);
            newSet.splice(k - 1, 3, sum);
            break;
          }
        }
      }
    }
    result.push(Math.abs(newSet[0]));
  }
  return Math.max(...result);
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
