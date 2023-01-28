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
