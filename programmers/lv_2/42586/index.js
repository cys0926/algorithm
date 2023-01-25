/* https://school.programmers.co.kr/learn/courses/30/lessons/42586 */

/**
 * redefine(재정의)
 * @input
 *  progress : number[] (배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열)
 *  speeds : number[] (각 작업의 개발 속도가 적힌 정수 배열)
 *
 * @return
 *  answer : number[] (진도가 100 이상 된 작업을 앞에서부터 배포했을때 각 배포마다 몇개의 기능을 배포했는지를 담은 배열)
 *
 * @condition
 *  1. 배포는 하루에 한번만 한다.
 *
 * @algorithm
 *  stack
 *
 * @logic(psuedo)
 *  1. progresses가 걸리는 각 시간을 반환한 dateArray를 생성한다.
 *  2. pregresses[1]이 걸리는 시간을 최초 date로 지정하고 count = 1 로 초기화한다.
 *  3. dateArray를 순회하며 date보다 작거나 같은 경우 count++
 *  4. date보다 큰 경우 answer에 count를 push한다.
 *  5. date를 다음 원소로 변경하고 count를 1로 초기화한다.
 *  6. 3-5를 반복한다.
 *  7. return answer
 */

// solution(구현)
const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];
const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
    const answer = [];
    const dateArray = progresses.map((value, index) => {
        return Math.ceil((100 - value) / speeds[index]);
    });

    let count = 1;
    let date = dateArray[0];
    dateArray.forEach((value, index) => {
        if (date >= (dateArray[index + 1] || 100)) {
            count++;
        } else {
            answer.push(count);
            date = dateArray[index + 1];
            count = 1;
        }
    });
    return answer;
}

solution(progresses1, speeds1);

/**
 * 결과
 * @정확성
 * 테스트 1 〉  통과 (0.08ms, 33.5MB)
 * 테스트 2 〉  통과 (0.17ms, 33.4MB)
 * 테스트 3 〉  통과 (0.17ms, 33.5MB)
 * 테스트 4 〉  통과 (0.17ms, 33.4MB)
 * 테스트 5 〉  통과 (0.07ms, 33.6MB)
 * 테스트 6 〉  통과 (0.07ms, 33.5MB)
 * 테스트 7 〉  통과 (0.17ms, 33.6MB)
 * 테스트 8 〉  통과 (0.08ms, 33.5MB)
 * 테스트 9 〉  통과 (0.17ms, 33.5MB)
 * 테스트 10 〉  통과 (0.25ms, 33.5MB)
 * 테스트 11 〉  통과 (0.11ms, 33.5MB)
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
