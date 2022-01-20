/**
 * H-index
 * https://programmers.co.kr/learn/courses/30/lessons/42747
 */

/*
첫번째 풀이 _ 기본테스트만 통과 _

function solution(citations) {
  
    const count = {}
      citations.forEach((e) => {
          citations.forEach((item)=> {
              if (item === e) {
                  count[e] ? count[e]++ :  count[e] = 1 
              }
        })         
  })
    const order = Object.keys(count).sort((a,b) => a-b)
    
    for (let i=1; i< order.length; i++){
        count[order[i]] = count[order[i-1]] + count[order[i]]
    }
    
    for (let key in count){
        if (parseInt(key) === count[key]) return count[key]
    }  

}


*/

function solution(citations) {
  citations = citations.sort((a, b) => a - b);
  let len = citations.length;
  let result = 0;

  for (let i = 0; i < len; i++) {
    let h_index = len - i;
    if (citations[i] >= h_index) {
      result = h_index;
      break;
    }
  }
  return result;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([0, 0, 0, 0, 0, 0, 0]));
console.log(solution([0, 0, 0, 1]));
console.log(solution([1, 1, 5, 7, 6]));
