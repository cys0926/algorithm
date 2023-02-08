/* https://school.programmers.co.kr/learn/courses/30/lessons/154539 */

/**
 * redefine(재정의)
 * @input
 * numbers : number[] (정수로 이우러진 배열)
 *
 * @return
 *  answer : number[] (모든 원소의 뒷 큰수를 차례로 담은 배열)
 *
 * @condition
 *  1. 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 한다.
 *
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const numbers1 = [2, 3, 3, 5];
const numbers2 = [9, 1, 5, 3, 6, 2];
const numbers3 = Array(1000000)
    .fill(0)
    .map(() => {
        return Math.trunc(Math.random() * 10);
    });

function solution(numbers) {
    const stack = [];
    const result = new Array(numbers.length).fill(-1);

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
            result[stack.pop()] = numbers[i];
        }

        stack.push(i);
    }

    // while (stack.length) {
    //     result[stack.pop()] = -1;
    // }

    return result;
}

// function solution(numbers) {
//     let prev;
//     let max;
//     const answer = new Array(numbers.length);
//
//     for (let i = 0; i < numbers.length; i++) {
//         let index = i;
//         const value = numbers[index];
//
//         if (value === max) {
//             answer[i] = -1;
//             continue;
//         }
//
//         if (value === numbers[index - 1]) {
//             answer[i] = prev;
//             continue;
//         }
//
//         while (index < numbers.length) {
//             index++;
//             if (numbers[index] > value) {
//                 prev = numbers[index];
//                 answer[i] = numbers[index];
//                 break;
//             }
//         }
//
//         if (index === numbers.length) {
//             max = value;
//             answer[i] = -1;
//         }
//     }
//
//     return answer;
// }

solution(numbers1);

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (3.79ms, 33.5MB)
 * 테스트 2 〉  통과 (3.06ms, 33.5MB)
 * 테스트 3 〉  통과 (5.04ms, 33.6MB)
 * 테스트 4 〉  통과 (3.77ms, 33.7MB)
 * 테스트 5 〉  통과 (5.92ms, 33.7MB)
 * 테스트 6 〉  통과 (6.52ms, 38.2MB)
 * 테스트 7 〉  통과 (10.26ms, 38.2MB)
 * 테스트 8 〉  통과 (7.55ms, 42.6MB)
 * 테스트 9 〉  통과 (11.61ms, 42.5MB)
 * 테스트 10 〉  통과 (8.45ms, 45MB)
 * 테스트 11 〉  통과 (8.37ms, 45MB)
 * 테스트 12 〉  통과 (10.41ms, 52.3MB)
 * 테스트 13 〉  통과 (10.72ms, 52.3MB)
 * 테스트 14 〉  통과 (17.43ms, 79.1MB)
 * 테스트 15 〉  통과 (29.33ms, 126MB)
 * 테스트 16 〉  통과 (28.46ms, 126MB)
 * 테스트 17 〉  통과 (28.06ms, 135MB)
 * 테스트 18 〉  통과 (31.11ms, 135MB)
 * 테스트 19 〉  통과 (28.54ms, 126MB)
 * 테스트 20 〉  통과 (49.46ms, 160MB)
 * 테스트 21 〉  통과 (49.75ms, 152MB)
 * 테스트 22 〉  통과 (31.58ms, 109MB)
 * 테스트 23 〉  통과 (46.81ms, 149MB)
 *
 * @효율성
 */

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/
