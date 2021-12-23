/*

이상한 문자 만들기

https://programmers.co.kr/learn/courses/30/lessons/12930

*/

function solution(s) {
  let result = [];

  const changeWord = (word) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      i % 2 === 0
        ? (newWord += word[i].toUpperCase())
        : (newWord += word[i].toLowerCase());
    }
    return newWord;
  };

  s.split(" ").forEach((el) => {
    result.push(changeWord(el));
  });

  return result.join(" ");
}



console.log(solution("try hello world"));
