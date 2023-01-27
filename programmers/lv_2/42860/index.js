/* https://school.programmers.co.kr/learn/courses/30/lessons/42860 */

/**
 * redefine(재정의)
 * @input
 *  name : string (만들고자 하는 이름)
 *
 * @return
 *  answer : number (조이스틱 조작 횟수의 최솟값)
 *
 * @condition
 *  1. ▲ - 다음 알파벳
 *  2. ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 *  3. ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 *  4. ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
 *  5. ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 *  6. ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const name0 = "JAZ";
const name1 = "JEROEN";
const name2 = "JAN";

// A => 65
// Z => 90
function solution(name) {
    const mod = 26; // 알파벳 개수
    let upDownCount = 0;
    let leftRightCount = name.length - 1;
    const maxLeftRightCount = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        const str = name[i];
        const gap = str.charCodeAt(0) - 65;
        const min = Math.min(gap, Math.abs(gap - mod));
        upDownCount += min;

        let index = i;
        while (index < name.length - 1 && name[index + 1] === "A") {
            index++;
        }
        leftRightCount = Math.min(
            i + i - index + maxLeftRightCount,
            leftRightCount
        );
        leftRightCount = Math.min(
            maxLeftRightCount - index + (maxLeftRightCount - index) + i,
            leftRightCount
        );
    }
    return upDownCount + leftRightCount;
}

console.log(solution(name0));

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
