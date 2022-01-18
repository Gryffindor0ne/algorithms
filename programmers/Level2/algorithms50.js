/**
 * 땅따먹기
 * https://programmers.co.kr/learn/courses/30/lessons/12913
 */

/*

첫번째 풀이 _ 기본테스트만 통과

 function solution(land) {
   let result = 0;
   
while(land.length !== 0) {
    let maxNum = Math.max(...land[0])
    let targetIndex = land[0].indexOf(maxNum) 
    result += maxNum
    
    if (land.length > 1) {
    land.shift()
    land[0].splice(targetIndex,1)
    } else {
    land.shift()   
    }      
}
  return result;
}


 */

// 통과 코드  //

function solution(land) {
  let result = 0;
  let landLen = land.length;

  for (let i = 1; i < landLen; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  result = Math.max(...land[landLen - 1]);
  return result;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
