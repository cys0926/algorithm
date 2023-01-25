/* https://school.programmers.co.kr/learn/courses/30/lessons/42747 */

/**
 * redefine(재정의)
 * @input
 * citations : number[] (논문의 인용 횟수를 담은 배열)
 *
 * @return
 * answer : number (n편의 논문 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 이때 h의 최댓값)
 *
 * @condition
 *
 * @algorithm
 *  정렬
 *
 * @logic(psuedo)
 *  1. hIndex는 논문의 길이를 초과할 수 없으므로 hIndex의 초기값을 논문의 길이로 설정한다.
 *  2. 논문을 인용횟수 순서로 sorting한다.
 *  3. findIndex로 hIndex를 검증한다.
 *  4. 만약 인용횟수가 hIndex 이상인 논문이 없다면,
 *      findIndex => -1 이므로 이 경우 hIndex-- 후 다음 검증을 반복한다.
 *  5. hIndex 검증이 실패하면 hIndex-- 후 다음 검증을 반복한다.
 *  6. 검증에 성공하면 hIndex를 반환한다.
 */

// solution(구현)
const citations = [3, 0, 6, 1, 5];

function solution(citations) {
    citations.sort((a, b) => a - b);
    let hIndex = citations.length;

    while (hIndex >= 0) {
        const indexOfOverHIndex = citations.findIndex((value) => {
            return value >= hIndex;
        });
        if (indexOfOverHIndex === -1) {
            hIndex--;
            continue;
        }
        const higherCount = citations.length - indexOfOverHIndex;
        if (higherCount >= hIndex) {
            return hIndex;
        }
        hIndex--;
    }
}

console.log(solution(citations));

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.29ms, 33.5MB)
 * 테스트 2 〉  통과 (0.43ms, 33.2MB)
 * 테스트 3 〉  통과 (0.35ms, 33.3MB)
 * 테스트 4 〉  통과 (0.35ms, 33.6MB)
 * 테스트 5 〉  통과 (0.66ms, 33.5MB)
 * 테스트 6 〉  통과 (0.47ms, 33.5MB)
 * 테스트 7 〉  통과 (0.17ms, 33.4MB)
 * 테스트 8 〉  통과 (0.07ms, 33.5MB)
 * 테스트 9 〉  통과 (0.09ms, 33.5MB)
 * 테스트 10 〉  통과 (0.26ms, 33.6MB)
 * 테스트 11 〉  통과 (0.55ms, 33.5MB)
 * 테스트 12 〉  통과 (0.10ms, 33.5MB)
 * 테스트 13 〉  통과 (0.43ms, 33.5MB)
 * 테스트 14 〉  통과 (0.40ms, 33.5MB)
 * 테스트 15 〉  통과 (0.48ms, 33.6MB)
 * 테스트 16 〉  통과 (0.07ms, 33.6MB)
 *
 * @효율성
 */

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *  O(N^2)
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/
