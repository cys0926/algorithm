/* https://school.programmers.co.kr/learn/courses/30/lessons/42746 */

/**
 * redefine(재정의)
 * @input
 *  numbers : number[] (이어 붙일 양의 정수가 담긴 배열)
 *
 * @return
 *  answer : string (numbers의 조합으로 만들 수 있는 가장 큰 수를 string으로 출력)
 *
 * @condition
 *  1. 0<=number<=1,000
 *
 * @algorithm
 *  정렬
 *
 * @logic(psuedo)
 *  1. number가 최대 4자리이므로 모든 number의 길이를 4로 맞춘다.
 *  2. 이때, 길이가 짧은 경우 나머지 공간에 원래 숫자를 이어 붙인다.
 *      (ex. 12 => 1212, 351 => 3513, 4 => 4444)
 *  3. 길이가 4인 수를 기준으로 sorting한다.
 *  4. 만약 모든 number가 0인 경우 맨 앞자리가 0이 되므로 이 경우 0을 출력한다.
 */

// solution(구현)
const number1 = [6, 10, 2];
const number2 = [3, 30, 34, 5, 9];
const number3 = [0, 0, 0];

function solution(numbers) {
    const biggestNumber = numbers
        .sort((a, b) => {
            const strA = String(a);
            const strB = String(b);
            const padStrA = strA.padEnd(4, strA);
            const padStrB = strB.padEnd(4, strB);
            return padStrB - padStrA;
        })
        .join("");
    return biggestNumber.replace(/^0+/, "0");
}

function solution(numbers) {
    let answer = numbers
        .sort((n1, n2) => "" + n2 + n1 - ("" + n1 + n2)) // 공간복잡도 O(n/2)
        .join("");

    return Number(answer) === 0 ? "0" : answer;
}

console.log(solution(number3));

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (167.83ms, 43.2MB)
 * 테스트 2 〉  통과 (91.58ms, 42.4MB)
 * 테스트 3 〉  통과 (226.46ms, 45MB)
 * 테스트 4 〉  통과 (5.22ms, 36.7MB)
 * 테스트 5 〉  통과 (149.56ms, 44.7MB)
 * 테스트 6 〉  통과 (129.81ms, 44.5MB)
 * 테스트 7 〉  통과 (0.11ms, 33.7MB)
 * 테스트 8 〉  통과 (0.11ms, 33.6MB)
 * 테스트 9 〉  통과 (0.10ms, 33.6MB)
 * 테스트 10 〉  통과 (0.10ms, 33.6MB)
 * 테스트 11 〉  통과 (0.11ms, 33.7MB)
 * 테스트 12 〉  통과 (0.08ms, 33.7MB)
 * 테스트 13 〉  통과 (0.10ms, 33.6MB)
 * 테스트 14 〉  통과 (0.10ms, 33.6MB)
 * 테스트 15 〉  통과 (0.09ms, 33.7MB)
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
