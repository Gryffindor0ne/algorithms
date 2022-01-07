/**
 * [1차] 캐시
 * https://programmers.co.kr/learn/courses/30/lessons/17680
 */

function solution(cacheSize, cities) {
  let times = 0;
  const cache = [];
  cities = cities.map((e) => e.toUpperCase());
  if (cacheSize === 0) return cities.length * 5;

  for (let city of cities) {
    if (cache.length !== 0 && cache.includes(city)) {
      times += 1;
      cache.splice(cache.indexOf(city), 1);
    } else {
      times += 5;
      if (cache.length >= cacheSize) {
        cache.shift();
      }
    }
    cache.push(city);
  }
  return times;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);

console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);

console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
