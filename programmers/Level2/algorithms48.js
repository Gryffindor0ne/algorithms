/**
 * [3차] 파일명 정렬
 * https://programmers.co.kr/learn/courses/30/lessons/17686
 */

function solution(files) {
  const fileNames = [];

  for (let i = 0; i < files.length; i++) {
    const separated = {
      head: "",
      number: "",
      tail: "",
    };
    let headUnit = "";
    let numUnit = "";
    for (let j = 0; j < files[i].length; j++) {
      if (
        typeof parseInt(files[i][j]) === "number" &&
        !isNaN(parseInt(files[i][j])) &&
        numUnit.length <= 5
      ) {
        if (!separated["head"]) separated["head"] = headUnit.toUpperCase();
        numUnit += files[i][j];
        if (files[i].length === j + 1) {
          separated["number"] = parseInt(numUnit);
          fileNames.push([files[i], separated]);
        }
      } else if (typeof files[i][j] === "string") {
        if (!separated["head"]) {
          headUnit += files[i][j];
        } else {
          separated["number"] = parseInt(numUnit);
          separated["tail"] = files[i].slice(j);
          fileNames.push([files[i], separated]);
          break;
        }
      }
    }
  }
  fileNames.sort((a, b) => {
    if (a[1].head > b[1].head) {
      return 1;
    }
    if (a[1].head < b[1].head) {
      return -1;
    }
    if (a[1].head === b[1].head) {
      if (a[1].number > b[1].number) return 1;
      if (a[1].number < b[1].number) return -1;
      return 0;
    }
  });

  return fileNames.map((e) => e[0]);
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
