/* 문제 링크 */

/**
 * redefine(재정의)
 * @input
 *  maps : number[][] (게임 맵의 상태, 0은 벽이 있는 자리, 1은 벽이 없는 자리)
 *
 * @return
 *  answer : number (상대 팀 진영에 도착할 수 있는 최소 방법)
 *
 * @condition
 *  1. 최초 시작 위치는 (0,0)이다.
 *  2. 도착 위치는 map (maps[i].length-1, maps.length-1)
 *  3. 도착할 수 없는 경우 return 0
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const maps1 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
];

const maps2 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
];

function solution(maps) {
    let answer = 0;
    const mapsRow = maps.length - 1;
    const mapsColumn = maps[0].length - 1;
    const dRow = [1, 0, -1, 0];
    const dCol = [0, 1, 0, -1];

    const bfs = (row, column, count) => {
        let queue = [];
        queue.push([row, column, count]);

        while (queue.length) {
            const [rowVal, colVal, cnt] = queue.shift();

            if (rowVal === mapsRow && colVal === mapsColumn) {
                answer = cnt;
                return;
            }

            for (let i = 0; i < 4; i++) {
                let rx = rowVal + dRow[i];
                let ry = colVal + dCol[i];

                if (rx < 0 || ry < 0 || rx > mapsRow || ry > mapsColumn) {
                    continue;
                }

                if (maps[rx][ry] === 1) {
                    maps[rx][ry] = 0;
                    queue.push([rx, ry, cnt + 1]);
                }
            }
        }
    };

    bfs(0, 0, 1);

    return answer === 0 ? -1 : answer;
}

console.log(solution(maps2));
/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.27ms, 33.5MB)
 * 테스트 2 〉  통과 (0.25ms, 33.5MB)
 * 테스트 3 〉  통과 (0.30ms, 33.6MB)
 * 테스트 4 〉  통과 (0.25ms, 33.6MB)
 * 테스트 5 〉  통과 (0.26ms, 33.6MB)
 * 테스트 6 〉  통과 (0.26ms, 33.5MB)
 * 테스트 7 〉  통과 (0.29ms, 33.4MB)
 * 테스트 8 〉  통과 (0.27ms, 33.4MB)
 * 테스트 9 〉  통과 (0.27ms, 33.5MB)
 * 테스트 10 〉  통과 (0.25ms, 33.5MB)
 * 테스트 11 〉  통과 (0.35ms, 33.5MB)
 * 테스트 12 〉  통과 (0.25ms, 33.5MB)
 * 테스트 13 〉  통과 (0.25ms, 33.5MB)
 * 테스트 14 〉  통과 (0.25ms, 33.4MB)
 * 테스트 15 〉  통과 (0.24ms, 33.5MB)
 * 테스트 16 〉  통과 (0.23ms, 33.6MB)
 * 테스트 17 〉  통과 (0.26ms, 33.4MB)
 * 테스트 18 〉  통과 (0.15ms, 33.5MB)
 * 테스트 19 〉  통과 (0.11ms, 33.6MB)
 * 테스트 20 〉  통과 (0.11ms, 33.6MB)
 * 테스트 21 〉  통과 (0.17ms, 33.4MB)
 *
 * @효율성
 * 테스트 1 〉  통과 (14.13ms, 38.1MB)
 * 테스트 2 〉  통과 (7.03ms, 37.6MB)
 * 테스트 3 〉  통과 (13.66ms, 38.1MB)
 * 테스트 4 〉  통과 (7.19ms, 37.9MB)
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
