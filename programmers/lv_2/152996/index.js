/* 문제 링크 */

/**
 * redefine(재정의)
 * @input
 *  weights : number[] (사람들의 몸무게 목록)
 *
 * @return
 *  answer : number (시소 짝꿍의 수)
 *
 * @condition
 *
 * @algorithm
 *
 *
 * @logic(psuedo)
 *  1. 뭄무게 별 사람 수룰 구한다.
 *  2. 같은 몸무게인 사람들끼리는 시소 짝꿍이 된다 (ex. 100키로 5명 => 시소짝꿍 10쌍 생성 (5 * 4 / 2) )
 *  3. 무거운 사람과 시소짝꿍이려면 무거운 사람과 가벼운 사람의 비율이 1.5배, 2배, 4/3배 뿐이다.
 *  4. 해당 비율을 만족하는 사람 수만큼 시소 짝꿍이 된다. (ex. 100키로 2명, 150키로 3명 => 1.5배 비율을 만족하므로 6쌍 생성 ( 2 * 3 )
 *      4-1. 0.5배, 2/3배, 3/4배 비율을 만족하는 경우는 무거운 사람이 기준이 되었을 때 발생하는데,
 *           이 경우는 어차피 모든 loop 를 돌면서 작은 사람을 기준으로 했을때와 중복만 발생시킬 뿐이다.
 *
 *
 */

// solution(구현)
const weights = [100, 180, 360, 100, 270];

function solution(weights) {
    let answer = 0;
    const weightsMap = new Map();
    const possible = [1.5, 2, 4 / 3];

    weights.forEach((weight) => {
        weightsMap.set(weight, (weightsMap.get(weight) || 0) + 1);
    });

    weightsMap.forEach((count, weight) => {
        answer += (count * (count - 1)) / 2;

        possible.forEach((ratio) => {
            answer +=
                weightsMap.has(ratio * weight) &&
                count * weightsMap.get(ratio * weight);
        });
    });

    return answer;
}



solution(weights);

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.08ms, 33.4MB)
 * 테스트 2 〉  통과 (0.09ms, 33.5MB)
 * 테스트 3 〉  통과 (0.17ms, 33.4MB)
 * 테스트 4 〉  통과 (1.98ms, 36MB)
 * 테스트 5 〉  통과 (2.49ms, 36.4MB)
 * 테스트 6 〉  통과 (2.93ms, 37.2MB)
 * 테스트 7 〉  통과 (24.40ms, 38.4MB)
 * 테스트 8 〉  통과 (24.54ms, 38.9MB)
 * 테스트 9 〉  통과 (4.49ms, 37.1MB)
 * 테스트 10 〉  통과 (5.64ms, 37.4MB)
 * 테스트 11 〉  통과 (5.28ms, 37.4MB)
 * 테스트 12 〉  통과 (3.34ms, 37.4MB)
 * 테스트 13 〉  통과 (4.15ms, 37.3MB)
 * 테스트 14 〉  통과 (4.14ms, 37.1MB)
 * 테스트 15 〉  통과 (3.57ms, 36.8MB)
 * 테스트 16 〉  통과 (0.08ms, 33MB)
 * 테스트 17 〉  통과 (0.08ms, 33.4MB)
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
