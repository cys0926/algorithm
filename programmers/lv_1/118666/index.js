/* https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript */

/**
 * redefine(재정의)
 * @input
 * survey : string[] (survey의 타입으로 이루어진 배열)
 * choice : number[] (답변 번호로 이루어진 배열)
 *
 * @return
 *
 * @condition
 * 1. 점수가 동일한 경우 사전순으로 빠른 유형으로 판단
 * 2. 1 <= survey.length <= 1000
 * 3. survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나이다.
 * 4. 각 원소의 첫번째 캐릭터는 비동의, 두번째 캐릭터는 동의를 의미한다.
 *
 *
 * @algorithm
 *
 * @logic(psuedo)
 * 1. choices를 나타내는 맵을 만든다.
 * 2. survey를 순회하며 각 유형별로 점수를 계산한다.
 * 3. 점수가 동일한 경우 사전순으로 빠른 유형으로 판단한다.
 * 4. 점수가 가장 높은 유형을 반환한다.
 */

// solution(구현)

const survey1 = ["AN", "CF", "MJ", "RT", "NA"];
const choices1 = [5, 3, 2, 7, 5];

const survey2 = ["TR", "RT", "TR"];
const choices2 = [7, 1, 3];

function solution(survey, choices) {
    const PERSONALITY_MAP = new Map([
        ["RT", 0],
        ["CF", 0],
        ["JM", 0],
        ["AN", 0],
    ]);

    // const PERSONALITY_MAP = {
    //     RT: 0,
    //     CF: 0,
    //     JM: 0,
    //     NA: 0,
    // };

    survey.forEach((value, index) => {
        const reverse = value[0] < value[1] ? 1 : -1;
        const sortValue = reverse === 1 ? value : value[1] + value[0];
        const score = (choices[index] - 4) * reverse;
        PERSONALITY_MAP.set(sortValue, PERSONALITY_MAP.get(sortValue) + score);
        // PERSONALITY_MAP[sortValue] += score;
    });

    let result = "";
    PERSONALITY_MAP.forEach((value, key) => {
        if (value <= 0) {
            result += key[0];
        } else {
            result += key[1];
        }
    });
    return result;
    // return Object.entries(PERSONALITY_MAP)
    //     .map(([key, value]) => (value <= 0 ? key[0] : key[1]))
    //     .join("");
}

console.log(solution(survey1, choices1));

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
