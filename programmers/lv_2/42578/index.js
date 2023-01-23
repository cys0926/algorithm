/* https://school.programmers.co.kr/learn/courses/30/lessons/42578 */

/**
 * redefine(재정의)
 *
 * @input
 *  cloth : [string(종류), string(이름)][] (의상이 담긴 2차원 배열)
 *
 * @return
 *  number (서로 다른 옷의 조합의 수)
 *
 * @condition
 *  1. 같은 이름을 가진 의상은 없다.
 *  2. 하루에 최소 한 개의 의상을 입는다.
 *  3. 1 <= cloth.length <= 30
 *
 * @algorithm
 *  해시 - Map
 *
 * @logic(psuedo)
 *  1. 종류를 key, 종류의 개수를 value로 하는 clothMap을 만든다.
 *  2. clothMap을 순회하며 (value + 1) 을 곱한다.
 *  3. 결과에 -1 을 하여 return 한다. (아무것도 안입는 경우 제외)
 */

// solution(구현)

const clothes1 = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
];
const clothes2 = [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
];

function solution(clothes) {
    let answer = 1;
    const clothMap = new Map();
    clothes.forEach((cloth) => {
        clothMap.set(cloth[1], (clothMap.get(cloth[1]) || 0) + 1);
    });
    clothMap.forEach((value, key) => {
        answer *= value + 1;
    });

    return answer - 1;
}

console.log("result", solution(clothes1));

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.14ms, 33.4MB)
 * 테스트 2 〉  통과 (0.07ms, 33.4MB)
 * 테스트 3 〉  통과 (0.07ms, 33.5MB)
 * 테스트 4 〉  통과 (0.14ms, 33.4MB)
 * 테스트 5 〉  통과 (0.07ms, 33.5MB)
 * 테스트 6 〉  통과 (0.07ms, 33.6MB)
 * 테스트 7 〉  통과 (0.14ms, 33.6MB)
 * 테스트 8 〉  통과 (0.14ms, 33.5MB)
 * 테스트 9 〉  통과 (0.06ms, 33.5MB)
 * 테스트 10 〉  통과 (0.06ms, 33.4MB)
 * 테스트 11 〉  통과 (0.06ms, 33.4MB)
 * 테스트 12 〉  통과 (0.15ms, 33.4MB)
 * 테스트 13 〉  통과 (0.14ms, 33.4MB)
 * 테스트 14 〉  통과 (0.06ms, 33.5MB)
 * 테스트 15 〉  통과 (0.06ms, 33.4MB)
 * 테스트 16 〉  통과 (0.06ms, 33.4MB)
 * 테스트 17 〉  통과 (0.07ms, 33.4MB)
 * 테스트 18 〉  통과 (0.07ms, 33.6MB)
 * 테스트 19 〉  통과 (0.14ms, 33.4MB)
 * 테스트 20 〉  통과 (0.08ms, 33.4MB)
 * 테스트 21 〉  통과 (0.06ms, 33.4MB)
 * 테스트 22 〉  통과 (0.06ms, 33.4MB)
 * 테스트 23 〉  통과 (0.07ms, 33.5MB)
 * 테스트 24 〉  통과 (0.07ms, 33.5MB)
 * 테스트 25 〉  통과 (0.14ms, 33.5MB)
 * 테스트 26 〉  통과 (0.14ms, 33.5MB)
 * 테스트 27 〉  통과 (0.06ms, 33.5MB)
 * 테스트 28 〉  통과 (0.15ms, 33.5MB)
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
