/***
 *
 * 신고 결과 받기
 * https://programmers.co.kr/learn/courses/30/lessons/92334
 */

function solution(id_list, report, k) {
  const newReport = [];
  const reportList = {};
  const reportMailService = {};
  const result = [];
  report = Array.from(new Set(report));

  report.forEach((e) => {
    newReport.push(e.split(" "));
  });

  newReport.forEach((e) => {
    if (reportList[e[1]]) reportList[e[1]]++;
    else {
      reportList[e[1]] = 1;
    }
  });
  for (let key in reportList) {
    if (reportList[key] < k) delete reportList[key];
  }

  let reportPerson = Object.keys(reportList);

  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < newReport.length; j++) {
      if (id_list[i] === newReport[j][0]) {
        if (reportPerson.includes(newReport[j][1])) {
          if (reportMailService[id_list[i]]) {
            reportMailService[id_list[i]]++;
          } else {
            reportMailService[id_list[i]] = 1;
          }
        }
      }
    }
  }

  id_list.forEach((id) =>
    reportMailService[id] ? result.push(reportMailService[id]) : result.push(0)
  );
  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
