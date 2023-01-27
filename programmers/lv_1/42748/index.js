/* https://school.programmers.co.kr/learn/courses/30/lessons/42748 */

/**
 * redefine(재정의)
 * @input
 *  array : number[] (숫자 배열)
 *  commands : number[][] ([i, j, k]:[number,number,number]를 원소로 가진 배열)
 *
 * @return
 *  answer : number[] (array에 commands 연산을 적용한 배열)
 *
 * @condition
 *  1. i : i번째 숫자부터
 *  2. j : j번째 숫자까지 잘랐을때
 *  3. k : k번째 수
 *
 * @algorithm
 * 정렬
 *
 * @logic(psuedo)
 *  1. commands를 순회하며 [i,j,k]에 맞게 slice하여 targetArray를 생성한다.
 *  2. targetArray를 sorting한 후 targetNumber를 answer에 push한다.
 *  3. return answer
 */

// solution(구현)
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

function solution(array, commands) {
    const answer = [];
    commands.forEach(([start, end, target]) => {
        const startIndex = start - 1;
        const targetIndex = target - 1;
        const targetNumber = array.slice(startIndex, end).sort((a, b) => a - b)[
            targetIndex
        ];
        answer.push(targetNumber);
    });
    return answer;
}


solution(array, commands);

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.07ms, 33.5MB)
 * 테스트 2 〉  통과 (0.08ms, 33.4MB)
 * 테스트 3 〉  통과 (0.07ms, 33.5MB)
 * 테스트 4 〉  통과 (0.07ms, 33.5MB)
 * 테스트 5 〉  통과 (0.08ms, 33.5MB)
 * 테스트 6 〉  통과 (0.07ms, 33.4MB)
 * 테스트 7 〉  통과 (0.08ms, 33.6MB)
 *
 * @효율성
 */

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *  O(N^2logN)
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/
