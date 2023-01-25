/* https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript */

/**
 * redefine(재정의)
 * @input
 *  arr : number[] (숫자가 담긴 배열)
 *
 * @return
 *  answer : number[] (arr 에서 연속된 수를 하나만 남긴 배열)
 *
 * @condition
 *  0<=arr[i]<=9
 *
 * @algorithm
 *
 * @logic(psuedo)
 *  1. arr.filter 메소드를 통해 다음 원소가 현재 원소와 다른 경우에만 return 한다.
 *
 */

// solution(구현)
const arr1 = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

function solution(arr) {
    return arr.filter((value, index) => value !== arr[index + 1]);
}

solution(arr1);

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.04ms, 33.4MB)
 * 테스트 2 〉  통과 (0.04ms, 33.5MB)
 * 테스트 3 〉  통과 (0.05ms, 33.6MB)
 * 테스트 4 〉  통과 (0.04ms, 33.6MB)
 * 테스트 5 〉  통과 (0.05ms, 33.5MB)
 * 테스트 6 〉  통과 (0.05ms, 33.2MB)
 * 테스트 7 〉  통과 (0.06ms, 33.4MB)
 * 테스트 8 〉  통과 (0.05ms, 33.5MB)
 * 테스트 9 〉  통과 (0.07ms, 33.6MB)
 * 테스트 10 〉  통과 (0.07ms, 33.5MB)
 * 테스트 11 〉  통과 (0.07ms, 33.5MB)
 * 테스트 12 〉  통과 (0.07ms, 33.5MB)
 * 테스트 13 〉  통과 (0.05ms, 33.6MB)
 * 테스트 14 〉  통과 (0.07ms, 33.4MB)
 * 테스트 15 〉  통과 (0.05ms, 33.5MB)
 * 테스트 16 〉  통과 (0.05ms, 33.5MB)
 * 테스트 17 〉  통과 (0.03ms, 33.5MB)
 *
 * @효율성
 * 테스트 1 〉  통과 (23.40ms, 83.4MB)
 * 테스트 2 〉  통과 (47.96ms, 81.6MB)
 * 테스트 3 〉  통과 (26.50ms, 83.3MB)
 * 테스트 4 〉  통과 (23.50ms, 83.4MB)
 *
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
