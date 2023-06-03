/* https://school.programmers.co.kr/learn/courses/30/lessons/154538 */

/**
 * redefine(재정의)
 * @input
 *  x : number
 *  y : number
 *  n : number
 *
 * @return
 *  result : number ( x를 y로 변환하기 위해 필요한 최소 연산 횟수, 만들 수 없다면 -1 )
 *
 * @condition
 *
 * @algorithm
 *  Tree, set
 *
 *
 * @logic(psuedo)
 *  1. 만약 x가 y랑 같다면 return 0
 *  2. 현재 트리에 있는 모든 노드를 가져와 연산을 검사한다.
 *  3. x === y 인 경우 return count
 *  4. calc(x) < y 이고, calc(x)가 이전에 나온적 없다면 다음 트리에 추가
 *  5. 다음 트리 검사 2~4번 반복
 *  6. 만약 다음 트리의 길이가 0이라면 return -1
 *
 */

// solution(구현)
const x1 = 10;
const y1 = 40;
const n1 = 5;

const x2 = 10;
const y2 = 40;
const n2 = 30;

const x3 = 2;
const y3 = 5;
const n3 = 4;

function solution(x, y, n) {
    if (x === y) {
        return 0;
    }

    let currentTree = [x];
    let count = 0;
    const dupSet = new Set();

    while (currentTree.length) {
        count++;
        const nextTree = [];

        for (let i = 0; i < currentTree.length; i++) {
            if (
                currentTree[i] + n === y ||
                currentTree[i] * 2 === y ||
                currentTree[i] * 3 === y
            ) {
                return count;
            }

            if (currentTree[i] + n < y) {
                dupSet.has(currentTree[i] + n) ||
                    nextTree.push(currentTree[i] + n);
                dupSet.add(currentTree[i] + n);
            }

            if (currentTree[i] * 2 < y) {
                dupSet.has(currentTree[i] * 2) ||
                    nextTree.push(currentTree[i] * 2);
                dupSet.add(currentTree[i] * 2);
            }

            if (currentTree[i] * 3 < y) {
                dupSet.has(currentTree[i] * 3) ||
                    nextTree.push(currentTree[i] * 3);
                dupSet.add(currentTree[i] * 3);
            }
        }

        currentTree = nextTree;
    }

    return -1;
}

function solution(x, y, n) {
    if (x === y) {
        return 0;
    }

    let currentTree = [x];
    let count = 0;
    const visited = new Set(currentTree);

    while (currentTree.length) {
        count++;
        const nextTree = [];
        for (let i = 0; i < currentTree.length; i++) {
            const newValue1 = currentTree[i] + n;
            const newValue2 = currentTree[i] * 2;
            const newValue3 = currentTree[i] * 3;

            if (newValue1 === y || newValue2 === y || newValue3 === y) {
                return count;
            }

            if (newValue1 < y && !visited.has(newValue1)) {
                visited.add(newValue1);
                nextTree.push(newValue1);
            }

            if (newValue2 < y && !visited.has(newValue2)) {
                visited.add(newValue2);
                nextTree.push(newValue2);
            }

            if (newValue3 < y && !visited.has(newValue3)) {
                visited.add(newValue3);
                nextTree.push(newValue3);
            }
        }

        currentTree = nextTree;
    }

    return -1;
}

console.log(solution(x3, y3, n3));

/**
 * 결과
 * @정확성
 *  테스트 1 〉  통과 (0.07ms, 33.5MB)
 *  테스트 2 〉  통과 (0.07ms, 33.5MB)
 *  테스트 3 〉  통과 (0.07ms, 33.5MB)
 *  테스트 4 〉  통과 (0.07ms, 33.4MB)
 *  테스트 5 〉  통과 (22.26ms, 44MB)
 *  테스트 6 〉  통과 (0.07ms, 33.5MB)
 *  테스트 7 〉  통과 (22.06ms, 43.9MB)
 *  테스트 8 〉  통과 (0.07ms, 33.4MB)
 *  테스트 9 〉  통과 (90.89ms, 60.3MB)
 *  테스트 10 〉  통과 (78.12ms, 58.6MB)
 *  테스트 11 〉  통과 (38.28ms, 50.4MB)
 *  테스트 12 〉  통과 (0.07ms, 33.5MB)
 *  테스트 13 〉  통과 (0.07ms, 33.4MB)
 *  테스트 14 〉  통과 (1.06ms, 33.7MB)
 *  테스트 15 〉  통과 (0.38ms, 33.4MB)
 *  테스트 16 〉  통과 (0.47ms, 33.6MB)
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
