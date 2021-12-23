//
//https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = "";
  let usefulItem = "0123456789abcdefghijklmnopqrstuwvxyz-_.";
  let checkArr = [];

  new_id
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (usefulItem.includes(el)) {
        checkArr.push(usefulItem[usefulItem.indexOf(el)]);
      }
    });
  new_id = checkArr;

  if (new_id.length > 1) {
    new_id = new_id
      .join("")
      .replace(/\.+(?=\.)/g, "")
      .split("");
  }

  if (new_id[0] === ".") {
    new_id.shift();
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id.pop();
  }
  if (new_id.length === 0) {
    new_id = ["a"];
  }
  if (new_id.length >= 16) {
    new_id.splice(15);
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id.pop();
  }
  if (new_id.length <= 2) {
    for (let i = new_id.length; i < 3; i++) {
      new_id.push(new_id[new_id.length - 1]);
    }
  }

  answer = new_id.join("");
  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
