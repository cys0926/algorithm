/* https://school.programmers.co.kr/learn/courses/30/lessons/42862 */

/**
 * redefine(재정의)
 * @input
 *  n : number (전체 학생 수)
 *  lost : number[] (체육복을 도난당한 학생들의 번호가 담긴 배열)
 *  reserve : number[] (여벌의 체육복을 가져온 학생들의 번호가 담긴 배열)
 *
 * @return
 *  answer : number (체육수업을 들을 수 있는 학생의 최댓값)
 *
 * @condition
 *  0. 바로 앞번호나 바로 뒷번호의 학생에게만 체육복을 빌려 줄 수 있다.
 *  1. 2 <= n <= 30
 *  2. 1 <= lost.length <= n
 *  3. 1 <= reserve.length <= n
 *  4. 여별의 체육복을 가져온 학생이 도난당한 경우, 남은 체육복은 하나이므로 빌려줄 수 없다.
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const n1 = 5;
const lost1 = [2, 3, 4];
const reserve1 = [1, 3, 5];
const n2 = 5;
const lost2 = [2, 4];
const reserve2 = [3];
const n3 = 3;
const lost3 = [3];
const reserve3 = [1];

function solution(n, lost, reserve) {
    // console.log("lost", lost);
    // console.log("reserve", reserve);
    const studentArray = new Array(n).fill(1);
    lost.forEach((value) => studentArray[value - 1]--);
    reserve.forEach((value) => studentArray[value - 1]++);
    // console.log(studentArray);
    for (let i = 0; i < studentArray.length; i++) {
        if (studentArray[i - 1] === 2 && studentArray[i] === 0) {
            studentArray[i - 1]--;
            studentArray[i]++;
            continue;
        }
        if (studentArray[i] === 0 && studentArray[i + 1] === 2) {
            studentArray[i + 1]--;
            studentArray[i]++;
        }
    }

    // console.log(studentArray);
    return studentArray.filter((value) => value > 0).length;
}

console.log(solution(n1, lost1, reserve1));

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.16ms, 33.5MB)
 * 테스트 2 〉  통과 (0.23ms, 33.4MB)
 * 테스트 3 〉  통과 (0.16ms, 33.5MB)
 * 테스트 4 〉  통과 (0.09ms, 33.4MB)
 * 테스트 5 〉  통과 (0.27ms, 33.5MB)
 * 테스트 6 〉  통과 (0.08ms, 33.5MB)
 * 테스트 7 〉  통과 (0.18ms, 33.7MB)
 * 테스트 8 〉  통과 (0.13ms, 33.5MB)
 * 테스트 9 〉  통과 (0.09ms, 33.7MB)
 * 테스트 10 〉  통과 (0.17ms, 33.5MB)
 * 테스트 11 〉  통과 (0.12ms, 33.6MB)
 * 테스트 12 〉  통과 (0.08ms, 33.6MB)
 * 테스트 13 〉  통과 (0.12ms, 33.5MB)
 * 테스트 14 〉  통과 (0.08ms, 33.7MB)
 * 테스트 15 〉  통과 (0.08ms, 33.6MB)
 * 테스트 16 〉  통과 (0.08ms, 33.5MB)
 * 테스트 17 〉  통과 (0.13ms, 33.5MB)
 * 테스트 18 〉  통과 (0.09ms, 33.4MB)
 * 테스트 19 〉  통과 (0.08ms, 33.5MB)
 * 테스트 20 〉  통과 (0.08ms, 33.7MB)
 * 테스트 21 〉  통과 (0.08ms, 33.6MB)
 * 테스트 22 〉  통과 (0.08ms, 33.4MB)
 * 테스트 23 〉  통과 (0.10ms, 33.5MB)
 * 테스트 24 〉  통과 (0.09ms, 33.5MB)
 * 테스트 25 〉  통과 (0.09ms, 33.7MB)
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
