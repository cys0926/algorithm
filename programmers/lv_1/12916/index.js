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
function solution(s) {
    let p = 0;
    let y = 0;
    s.forEach((v) => {
        if (["y", "Y"].includes(v)) {
            y++;
        } else if (["p", "P"].includes(v)) {
            p++;
        }
    });

    return p === y;
}

console.log(Array(22));
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
