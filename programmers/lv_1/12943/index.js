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
const n1 = 6;

function solution(num) {
    let count = 0;
    let n = num;
    while (count < 500) {
        if (n === 1) {
            return count;
        }
        switch (n % 2) {
            case 0:
                n = n / 2;
                break;
            case 1:
                n = n * 3 + 1;
                break;
        }
        count++;
    }
    return -1;
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
