/*

소수 만들기

https://programmers.co.kr/learn/courses/30/lessons/12977

*/

function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  function isPrime(num) {
    for (let n = 2; n < num / 2; n++) {
      if (num % n === 0) {
        return false;
      }
    }
    return true;
  }

  return count;
}

// <------------> //

function solution(nums) {
  // nums 3개 이상 50개 이하 -> 3개의 수가 만들어지는 경우의 조합 구하기
  // 구해진 조합 중 합이 소수가 되는 조합 카운트
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      results.push(...attached);
    });
    return results;
  };

  let newArr = [];
  let count = 0;
  const resultArr = getCombinations(nums, 3);

  resultArr.forEach((el) => {
    let sum = el.reduce((acc, cur) => acc + cur);
    newArr.push(sum);
  });

  newArr.forEach((el) => {
    if (isPrime(el)) {
      count++;
    }
  });

  function isPrime(num) {
    for (let n = 2; n < num / 2; n++) {
      if (num % n === 0) {
        return false;
      }
    }
    return true;
  }

  return count;
}

// 두 가지 방법으로 풀어봤다. 첫번째 방법이 더 효율적인 방법.
