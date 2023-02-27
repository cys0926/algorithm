/* https://school.programmers.co.kr/learn/courses/30/lessons/12928 */

/**
 * redefine(재정의)
 * @input
 *
 * @return
 *
 * @condition
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const n1 = 12;
const n2 = 5;

function solution(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            result += i;
        }
    }
    return result;
}

solution(n1);

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
