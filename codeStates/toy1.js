/**
 * 코드스테이츠 문제 풀이 *
 *
 * orderOfPresentation
 * https://urclass.codestates.com/codeproblem/55af3996-a362-4344-9da3-dcb858130220
 */

/*
orderOfPresentation
문제
말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.

선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.

김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤 발표 순서를 말하면 

이 발표 순서가 몇 번째 경우의 수인지를 대답해야 합니다.

총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.

모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.

ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

// 주어진 배열을 순회하면서 열외사항의 경우의 수를 제거한다.

function orderOfPresentation(N, K) {
  const fac = (num) => {
    return num < 2 ? 1 : num * fac(num - 1);
  };

  let order = 0;
  const checker = new Array(N + 1).fill(false);

  for (let i = 0; i < N; i++) {
    let choiceNum = K[i];
    checker[K[i]] = true;
    let excep = checker.slice(1, choiceNum);
    let valid = excep.filter((e) => e === false).length;
    let excepOrder = valid * fac(N - i - 1);
    order += excepOrder;
  }
  return order;
}

console.log(orderOfPresentation(3, [2, 3, 1]));

console.log(orderOfPresentation(5, [1, 3, 2, 4, 5]));

console.log(orderOfPresentation(9, [7, 8, 5, 6, 9, 4, 1, 2, 3]));
