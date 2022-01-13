/**
 * 스킬트리
 * https://programmers.co.kr/learn/courses/30/lessons/49993
 */

function solution(skill, skill_trees) {
  let result = 0;
  const progress = skill.split("");
  for (let list of skill_trees) {
    let sort = list.split("").filter((el) => {
      return progress.includes(el);
    });
    for (let i = 0; i < sort.length; i++) {
      if (sort[i] !== progress[i]) {
        result--;
        break;
      }
    }
    result++;
  }
  return result;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
