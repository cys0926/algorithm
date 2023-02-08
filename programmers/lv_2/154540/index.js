/* https://school.programmers.co.kr/learn/courses/30/lessons/154540 */

/**
 * redefine(재정의)
 * @input
 * maps : string[] (지도를 나타내는 문자열 배열)
 *
 * @return
 * answer : number[] (각 섬에서 최대 며칠씩 머무를 수 있는지를 오름차순으로 담은 배열)
 *
 * @condition
 * 1. X는 바다, 각 칸에 적힌 숫자는 식량
 *
 * @algorithm
 * BFS
 *
 * @logic(psuedo)
 */

// solution(구현)
const maps1 = ["X591X", "X1X5X", "X231X", "1XXX1"];
const maps2 = ["XXX", "XXX", "XXX"];

//[
//   [ 'X', '5', '9', '1', 'X' ],
//   [ 'X', '1', 'X', '5', 'X' ],
//   [ 'X', '2', '3', '1', 'X' ],
//   [ '1', 'X', 'X', 'X', '1' ]
// ]

function solution(maps) {
    const arrMap = maps.map((string) => string.split(""));
    const rowLength = arrMap.length - 1;
    const columnLength = arrMap[0].length - 1;
    const dRow = [1, 0, -1, 0];
    const dCol = [0, 1, 0, -1];
    const result = [];

    const bfs = (row, col, count) => {
        if (row > rowLength || col > columnLength || row < 0 || col < 0) {
            return count;
        }
        if (arrMap[row][col] === "X") {
            return count;
        }

        count += Number(arrMap[row][col]);
        arrMap[row][col] = "X";

        for (let i = 0; i < 4; i++) {
            count = bfs(row + dRow[i], col + dCol[i], count);
        }

        return count;
    };

    for (let i = 0; i <= rowLength; i++) {
        for (let j = 0; j <= columnLength; j++) {
            if (arrMap[i][j] === "X") {
                continue;
            }
            result.push(bfs(i, j, 0));
        }
    }

    return result.length ? result.sort((a, b) => a - b) : [-1];
}

console.log(solution(maps1));
/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.09ms, 33.4MB)
 * 테스트 2 〉  통과 (0.20ms, 33.5MB)
 * 테스트 3 〉  통과 (0.22ms, 33.6MB)
 * 테스트 4 〉  통과 (0.28ms, 33.4MB)
 * 테스트 5 〉  통과 (0.57ms, 33.5MB)
 * 테스트 6 〉  통과 (1.92ms, 36.5MB)
 * 테스트 7 〉  통과 (0.52ms, 33.5MB)
 * 테스트 8 〉  통과 (1.65ms, 36.6MB)
 * 테스트 9 〉  통과 (2.78ms, 36.7MB)
 * 테스트 10 〉  통과 (3.16ms, 36.6MB)
 * 테스트 11 〉  통과 (2.91ms, 36.6MB)
 * 테스트 12 〉  통과 (2.78ms, 36.8MB)
 * 테스트 13 〉  통과 (5.56ms, 36.9MB)
 * 테스트 14 〉  통과 (4.43ms, 36.9MB)
 * 테스트 15 〉  통과 (6.12ms, 37.1MB)
 * 테스트 16 〉  통과 (6.12ms, 37.2MB)
 * 테스트 17 〉  통과 (0.38ms, 33.5MB)
 * 테스트 18 〉  통과 (6.65ms, 37.1MB)
 * 테스트 19 〉  통과 (7.85ms, 37.2MB)
 * 테스트 20 〉  통과 (0.87ms, 33.6MB)
 * 테스트 21 〉  통과 (0.63ms, 33.5MB)
 * 테스트 22 〉  통과 (0.32ms, 33.6MB)
 * 테스트 23 〉  통과 (4.60ms, 37.4MB)
 * 테스트 24 〉  통과 (3.43ms, 36.9MB)
 * 테스트 25 〉  통과 (0.42ms, 33.5MB)
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
