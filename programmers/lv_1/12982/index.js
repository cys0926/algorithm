/* https://school.programmers.co.kr/learn/courses/30/lessons/12982 */

/**
 * redefine(재정의)
 *
 * @input
 *  d : number[] (부서별로 신청한 금액이 들어있는 배열)
 *  budget : number (예산)
 *
 * @return
 *  answer : number (최대 지원 가능한 부서 수)
 *
 * @condition
 *  1. 1<=d.length<=100
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const d1 = [1, 3, 2, 5, 4];
const budget1 = 9;
const d2 = [2, 2, 3, 3];
const budget2 = 1;

function solution(d, budget) {
    const sortArray = d.sort((a, b) => a - b);
    let answer = 0;
    let money = 0;
    for (let i = 0; i < sortArray.length; i++) {
        if (money + sortArray[i] > budget) {
            return answer;
        }
        money += sortArray[i];
        answer++;
    }
    return answer;
}

console.log(solution(d2, budget2));

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
