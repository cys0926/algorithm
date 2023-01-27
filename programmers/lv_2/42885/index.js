/* https://school.programmers.co.kr/learn/courses/30/lessons/42885 */

/**
 * redefine(재정의)
 *
 * @input
 *  people : number[] (사람들의 몸무게를 담은 배열)
 *  limit : number (구명보트의 무게 제한)
 *
 * @return
 *  answer : number (모든 사람을 구출하기 위해 필요한 구명 보트 개수의 최솟값)
 *
 * @condition
 *  1. 구명보트에는 최대 2명만 탈 수 있다.
 *
 *
 * @algorithm
 *
 *
 * @logic(psuedo)
 *
 */

// solution(구현)
const people1 = [70, 50, 80, 50];
const limit1 = 100;

const people2 = [70, 80, 50];
const limit2 = 100;

const people3 = [40, 40, 40, 40, 40, 40, 40, 40];
const limit3 = 80;

function solution(people, limit) {
    people.sort((a, b) => b - a);
    let count = 0;
    let firstIndex = 0;
    let lastIndex = people.length - 1;
    while (firstIndex < lastIndex) {
        if (people[firstIndex] + people[lastIndex] <= limit) {
            lastIndex--;
        }
        firstIndex++;
        count++;
    }
    return firstIndex === lastIndex ? count + 1 : count;
}

console.log(solution(people1, limit1));

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
