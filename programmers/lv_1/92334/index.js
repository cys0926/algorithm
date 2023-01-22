const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
];
const k = 2;

function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    // report 중복 제거
    report = [...new Set(report)];
    // 신고 받은 사람을 key 값으로, 신고한 사람을 value 의 배열로 갖는 신고내역 동적 생성
    const reportMap = {};
    id_list.forEach((name) => (reportMap[name] = []));
    report.forEach((report) => {
        const [reporter, target] = report.split(" ");
        reportMap[target].push(reporter);
    });

    for (let target in reportMap) {
        if (reportMap[target].length >= k) {
            reportMap[target].forEach((reporter) => {
                answer[id_list.indexOf(reporter)]++;
            });
        }
    }
    return answer;
}

console.log(solution(id_list, report, k));
