/***
 *
 * [3차] 방금그곡
 * https://programmers.co.kr/learn/courses/30/lessons/17683
 */

function solution(m, musicinfos) {
  musicinfos = musicinfos
    .map((music) => music.split(","))
    .map((e) => {
      let past = e[1].split(":");
      past = past[0] * 60 + past[1] * 1;
      let start = e[0].split(":");
      start = start[0] * 60 + start[1] * 1;
      e.splice(0, 2, past - start);
      return e;
    });

  const changeMelody = (melody) => {
    let changeM = [];
    melody = melody.split("");
    for (let i = 0; i < melody.length; i++) {
      if (melody[i] === "#") {
        let previous = changeM.pop();
        changeM.push(previous.toLowerCase());
      } else {
        changeM.push(melody[i]);
      }
    }
    return changeM.join("");
  };

  musicinfos.forEach((music) => {
    music[2] = changeMelody(music[2]);
  });

  let resultMelody = [];
  const newMelody = (time, name, melody) => {
    let len = melody.length;
    let newM = melody[0];
    if (time < len) resultMelody.push([time, name, melody.slice(0, time)]);
    else {
      for (let i = 1; i < time; i++) {
        newM += melody[i % len];
      }
      resultMelody.push([time, name, newM]);
    }
  };

  musicinfos.forEach((e) => newMelody(e[0], e[1], e[2]));

  m = changeMelody(m);

  let resultArr = [];
  resultMelody.forEach((e) => {
    if (e[2].includes(m)) {
      resultArr.push(e);
    }
  });

  if (!resultArr.length) return "(None)";

  resultArr.sort((a, b) => {
    if (a[0] === b[0]) return 0;
    return b[0] - a[0];
  });
  return resultArr[0][1];
}

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);

console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
