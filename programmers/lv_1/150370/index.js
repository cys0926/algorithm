/* https://school.programmers.co.kr/learn/courses/30/lessons/150370 */

/**
 * redefine(재정의)
 * @input
 * today : string (오늘 날짜)
 * terms : string[] (타입과 유효기간이 담긴 배열)
 * privacies : string[] (개인정보 수집 일자와 약관종류가 담긴 배열)
 *
 * @return
 * answer : string[] (파기해야할 개인 정보를 오름차순으로 정렬한 배열)
 *
 * @condition
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const today1 = "2022.05.19";
const terms1 = ["A 6", "B 12", "C 3"];
const privacies1 = [
    "2021.05.02 A",
    "2021.07.01 B",
    "2022.02.19 C",
    "2022.02.20 C",
];

const today2 = "2020.01.01";
const terms2 = ["Z 3", "D 5"];
const privacies2 = [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
];

function solution(today, terms, privacies) {
    const TERMS_MAP = terms.reduce((acc, cur) => {
        const [type, term] = cur.split(" ");
        return { ...acc, [type]: Number(term) * 28 };
    }, {});

    function calcDate(num, idx) {
        if (idx === 0) return num * 28 * 12;
        if (idx === 1) return num * 28;
        if (idx === 2) return num;
    }

    return privacies.reduce((acc, cur, curIdx) => {
        const [date, type] = cur.split(" ");

        const expireDate =
            date.split(".").reduce((acc, cur, curIdx) => {
                const addDate = calcDate(Number(cur), curIdx);
                return acc + addDate;
            }, 0) + TERMS_MAP[type];

        const todayDate = today.split(".").reduce((acc, cur, curIdx) => {
            const addDate = calcDate(Number(cur), curIdx);
            return acc + addDate;
        }, 0);

        if (expireDate <= todayDate) {
            return [...acc, curIdx + 1];
        }

        return acc;
    }, []);
}

// function solution(today, terms, privacies) {
//     const TERMS_MAP = terms.reduce((acc, cur) => {
//         const [type, term] = cur.split(" ");
//         return {
//             ...acc,
//             [type]: {
//                 year: Math.floor(Number(term) / 12),
//                 month: Number(term) % 12,
//             },
//         };
//     }, {});
//
//     return privacies.reduce((acc, cur, curIdx) => {
//         const [date, type] = cur.split(" ");
//         const [year, month, day] = date
//             .split(".")
//             .map((value) => Number(value));
//
//         const expiredYear =
//             year +
//             TERMS_MAP[type].year +
//             Math.floor((month + TERMS_MAP[type].month - 1) / 12);
//         const expiredMonth = (month + TERMS_MAP[type].month) % 12 || 12;
//
//         const [currentYear, currentMonth, currentDay] = today
//             .split(".")
//             .map((value) => Number(value));
//
//         if (expiredYear < currentYear) {
//             return [...acc, curIdx + 1];
//         }
//
//         if (expiredYear === currentYear && expiredMonth < currentMonth) {
//             return [...acc, curIdx + 1];
//         }
//
//         if (
//             expiredYear === currentYear &&
//             expiredMonth === currentMonth &&
//             day <= currentDay
//         ) {
//             return [...acc, curIdx + 1];
//         }
//
//         return acc;
//     }, []);
// }

console.log(solution(today1, terms1, privacies1));
/**
 * 결과
 * @정확성
 *
 * @효율성
 */

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *  O(N)
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/
