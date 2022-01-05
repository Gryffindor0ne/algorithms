/**
 * 다리를 지나는 트럭
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 */

function solution(bridge_length, weight, truck_weights) {
  let count = 1;
  let queue = new Array(bridge_length - 1).fill(0);
  queue.push(truck_weights.shift());

  while (truck_weights.length > 0) {
    queue.shift();
    let limit = queue.reduce((a, c) => a + c);
    count++;
    if (weight >= limit + truck_weights[0]) {
      queue.push(truck_weights.shift());
    } else {
      queue.push(0);
    }
  }
  return count + queue.length;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

// 몇몇 테스트에서 시간이 오래 걸린다. 아마도 reduce 때문인듯. 다른 방식으로 풀어봐야겠다.
