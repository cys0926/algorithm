/* https://school.programmers.co.kr/learn/courses/30/lessons/43165 */

/**
 * redefine(재정의)
 * @input
 *  numbers : number[] (사용할 수 있는 숫자가 담긴 배열)
 *  target : number (타겟 넘버)
 *
 * @return
 *  answer : number (numbers를 더하거나 빼서 타겟 넘버를 만들 수 있는 방법의 수)
 *
 * @condition
 *  1. numbers의 순서는 변경할 수 없다.

 *
 * @algorithm
 *
 * @logic(psuedo)
 *
 */

// solution(구현)
const numbers1 = [1, 1, 1, 1, 1];
const target1 = 3;
const numbers2 = [4, 1, 2, 1];
const target2 = 4;

function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;

    const dfs = (count, sum) => {
        if (count === length) {
            if (target === sum) {
                answer++;
            }
            return;
        }

        dfs(count + 1, sum + numbers[count]);
        dfs(count + 1, sum - numbers[count]);
    };

    dfs(0, 0);

    return answer;
}

solution(numbers2, target2);

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
