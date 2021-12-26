/*

위장
https://programmers.co.kr/learn/courses/30/lessons/42578

*/

function solution(clothes) {
  const allClothes = {};

  clothes.forEach((el) => {
    if (!allClothes[el[1]]) {
      allClothes[el[1]] = [];
    }
    allClothes[el[1]].push(el[0]);
  });
  const result = [];

  for (let i in allClothes) {
    result.push(allClothes[i].length + 1);
  }
  return result.reduce((a, c) => a * c) - 1;
}

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
