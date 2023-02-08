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

const people = [70, 90]
const limit = 200

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
 * 테스트 1 〉  통과 (1.88ms, 35.4MB)
 * 테스트 2 〉  통과 (1.07ms, 33.5MB)
 * 테스트 3 〉  통과 (1.95ms, 33.5MB)
 * 테스트 4 〉  통과 (1.07ms, 33.5MB)
 * 테스트 5 〉  통과 (0.68ms, 33.6MB)
 * 테스트 6 〉  통과 (0.41ms, 33.6MB)
 * 테스트 7 〉  통과 (0.60ms, 33.5MB)
 * 테스트 8 〉  통과 (0.19ms, 33.5MB)
 * 테스트 9 〉  통과 (0.20ms, 33.4MB)
 * 테스트 10 〉  통과 (1.05ms, 33.5MB)
 * 테스트 11 〉  통과 (1.43ms, 33.5MB)
 * 테스트 12 〉  통과 (0.91ms, 33.5MB)
 * 테스트 13 〉  통과 (1.08ms, 33.5MB)
 * 테스트 14 〉  통과 (1.31ms, 33.6MB)
 * 테스트 15 〉  통과 (0.22ms, 33.4MB)
 *
 * @효율성
 * 테스트 1 〉  통과 (13.10ms, 38.3MB)
 * 테스트 2 〉  통과 (12.46ms, 38.4MB)
 * 테스트 3 〉  통과 (12.93ms, 38.1MB)
 * 테스트 4 〉  통과 (11.60ms, 38.5MB)
 * 테스트 5 〉  통과 (11.46ms, 38.1MB)
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
