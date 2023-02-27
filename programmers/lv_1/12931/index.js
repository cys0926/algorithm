/* 문제 링크 */

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
const n1 = 123;
const n2 = 987;

function solution(n) {
    return [...String(n)].reduce((p, c) => Number(p) + Number(c), 0);
}

console.log(solution(n1));

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
