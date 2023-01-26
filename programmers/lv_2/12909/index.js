/* https://school.programmers.co.kr/learn/courses/30/lessons/12909 */

/**
 * redefine(재정의)
 * @input
 *  s : string ("(" 또는 ")"로만 이루어진 문자열)
 *
 * @return
 *  answer : boolean (괄호가 올바르게 닫혀있는지 판단)
 *
 * @condition
 *
 * @algorithm
 *  stack
 *
 * @logic(psuedo)
 *  1. 열린 집합으로 시작하는 경우 count++
 *  2. 닫힌 집합이 나오는 경우 count --
 *  3. 만약 count가 0미만이 되는 경우 return false
 *  4. 최종 결과값이 0이면 true 아니면 false
 */

// solution(구현)
const s1 = "()()";
const s2 = "(())()";
const s3 = ")()(";
const s4 = "(()(";

function solution(s) {
    let count = 0;
    for (let str of s) {
        str === "(" ? count++ : count--;
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.04ms, 33.5MB)
 * 테스트 2 〉  통과 (0.04ms, 33.4MB)
 * 테스트 3 〉  통과 (0.07ms, 33.4MB)
 * 테스트 4 〉  통과 (0.06ms, 33.4MB)
 * 테스트 5 〉  통과 (0.05ms, 33.4MB)
 * 테스트 6 〉  통과 (0.05ms, 33.4MB)
 * 테스트 7 〉  통과 (0.05ms, 33.5MB)
 * 테스트 8 〉  통과 (0.05ms, 33.5MB)
 * 테스트 9 〉  통과 (0.05ms, 33.4MB)
 * 테스트 10 〉  통과 (0.05ms, 33.5MB)
 * 테스트 11 〉  통과 (0.05ms, 33.4MB)
 * 테스트 12 〉  통과 (0.20ms, 33.5MB)
 * 테스트 13 〉  통과 (0.22ms, 33.5MB)
 * 테스트 14 〉  통과 (0.21ms, 33.4MB)
 * 테스트 15 〉  통과 (0.13ms, 33.4MB)
 * 테스트 16 〉  통과 (0.13ms, 33.6MB)
 * 테스트 17 〉  통과 (0.14ms, 33.4MB)
 * 테스트 18 〉  통과 (0.14ms, 33.4MB)
 *
 * @효율성
 * 테스트 1 〉  통과 (6.45ms, 38.5MB)
 * 테스트 2 〉  통과 (5.96ms, 38.4MB)
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
