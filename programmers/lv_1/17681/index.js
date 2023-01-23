/* https://school.programmers.co.kr/learn/courses/30/lessons/17681 */

/**
 * redefine(재정의)
 *
 * @input
 *  n : number (지도의 한 변 크기)
 *  arr1 : number[] (벽을 1, 공백을 0으로 부호화했을때 얻어지는 이진수에 해당하는 값의 배열)
 *  arr2 : number[] (벽을 1, 공백을 0으로 부호화했을때 얻어지는 이진수에 해당하는 값의 배열)
 *
 * @return
 *  answer : string[] (원래의 비밀 지도)
 *
 * @condition
 *  1. 1<=n<=16
 *  2. 벽은 "#"으로 한다.
 *  3. arr1, arr2 중 하나라도 벽이 있으면
 * @algorithm
 *
 * @logic(psuedo)
 * 1. arr1과 arr2를 각각 이진수로 변환한다.
 * 2. arr1과 arr2를 동시에 순회하며 둘 중 하나라도 1이 있으면 그 위치를 "#"으로 표현한다.
 */

// solution(구현)
const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let answer = arr1.map((value, index) => {
        return (value | arr2[index])
            .toString(2)
            .padStart(n, 0)
            .replace(/0/g, " ")
            .replace(/1/g, "#");
    });
    return answer;
}
console.log(solution(n, arr1, arr2));

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
