/* https://school.programmers.co.kr/learn/courses/30/lessons/42883 */

/**
 * redefine(재정의)
 * @input
 *  number : string (문자열 형식의 숫자)
 *  k : number (제거할 수의 개수)
 *
 * @return
 *  answer : string (number에서 k개의 숫자를 제거했을때 만들 수 있는 가장 큰 수)
 *
 * @condition
 *  1. 1<=k<=number.length
 *
 * @algorithm
 *  그리디
 *
 * @logic(psuedo)
 */

// solution(구현)
const number1 = "1924";
const k1 = 2;
const number2 = "1231234";
const k2 = 3;
const number3 = "4177252841";
const k3 = 4;
const number4 = "77777";
const k4 = 2;

function solution(number, k) {
    const arr = [];
    for (let i = 0; i < number.length; i++) {
        while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
            arr.pop();
            k--;
        }
        arr.push(number[i]);
    }
    arr.splice(number.length - k, k);
    return arr.join("");
}

// function solution(number, k) {
//     let str = number;
//     let count = 0;
//     let prevIndex = 1;
//     while (count !== k) {
//         let index = prevIndex - 1;
//         while (str[index] >= str[index + 1]) {
//             index++;
//         }
//         if (index === str.length - 1) {
//             str = str.slice(0, count - k);
//             break;
//         }
//         str = str.slice(0, index) + str.slice(index + 1);
//         prevIndex = Math.max(index, 1);
//         count++;
//     }
//     return str;
// }

console.log(solution(number3, k3));

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
