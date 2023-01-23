/* https://school.programmers.co.kr/learn/courses/30/lessons/68935 */

/**
 * redefine(재정의)
 *
 * @input
 *  n : number (자연수)
 *
 * @return
 *  answer : number (10진법으로 표현)
 *
 * @condition
 *  1. 1<=n<=100,000,000
 *
 * @algorithm
 *  구현
 *
 * @logic(psuedo)
 *  1. n을 3진법으로 변환한다.
 *  2. 3진법으로 변환한 n을 뒤집는다.
 *  3. 10진법으로 변환한 후 출력한다.
 */

// solution(구현)
const n = 45;

function solution(n) {
    const answer = parseInt(n.toString(3).split("").reverse().join(""), 3);
    return answer;
}

solution(n);

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
