/* 문제 링크 */

/**
 * redefine(재정의)
 * @input
 *  n : n번째 유사 칸토어
 *  l : 폐구간의 시작
 *  r : 폐구간의 끝
 *
 * @return
 *  result : number (폐구간 내 1의 개수)
 *
 * @condition
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// 1 => 11011
// 11011 => 11011 11011 00000 11011 11011
// 11011 11011 00000 11011 11011 => 11011 11011 00000 11011 11011   11011 11011 00000 11011 11011   00000 00000 00000 00000 00000    11011 11011 00000 11011 11011    11011 11011 00000 11011 11011

// solution(구현)
const n = 2;
const l = 4;
const r = 17;

// [2 * 5^n-1, 3 * 5^n-1) => 0
//
// n = 0
// a0 = 1
//
// n = 1
// a1 = 4
//
// n = 2
// a2 = 4^2
//
// n = 3
// a3 = 4^3
//
// n = 4
// a4 = 4^4 => 4^3 + 4^3 + 4^3 + 4^3

function solution(n, l, r) {
    let answer = 0;
    const FIVE_TO_THE_N_MINUS_ONE_POWER = Math.pow(5, n - 1);
    const FOUR_E_TO_THE_N_MINUS_ONE_POWER = Math.pow(4, n - 1);

    const shareL = Math.trunc(l / FIVE_TO_THE_N_MINUS_ONE_POWER);
    const restL = Math.trunc(l % FIVE_TO_THE_N_MINUS_ONE_POWER);
    const shareR = Math.trunc(r / FIVE_TO_THE_N_MINUS_ONE_POWER);
    const restR = Math.trunc(r % FIVE_TO_THE_N_MINUS_ONE_POWER);

    const bundle =
        shareL < 2 && 2 < shareR ? shareR - shareL - 2 : shareR - shareL - 3;

    answer += FOUR_E_TO_THE_N_MINUS_ONE_POWER * bundle;

    console.log(answer);

    console.log(shareL, restL);
    console.log(shareR, restR);
}

solution(n, l, r);

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
