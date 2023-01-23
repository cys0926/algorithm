/* https://school.programmers.co.kr/learn/courses/30/lessons/42576 */

/**
 * redefine(재정의)
 *
 * @input
 * participant : string[] (참여한 선수들의 이름이 담긴 배열)
 * completion : string[] (완주한 선수들의 이름이 담긴 배열)
 *
 * @return
 * string (완주하지 못한 선수의 이름)
 *
 * @condition
 * 1. 1 <= participant.length <= 100,000
 * 2. completion.length = participant.length - 1
 * 3. 참가자의 이름은 곂칠 수 있다.
 *
 * @algorithm
 * 해시 - Map
 *
 * @logic(psuedo)
 * 1. completionMap을 만든다.
 * 2. participant 배열을 순회하며 해당 명단의 completionMap을 조회한다.
 * 3. 만약 조회가 안되거나 value가 0인 경우 해당 명단을 return하며 함수를 종료한다.
 * 4. 그렇지 않으면 value를 1 줄이고 2-4 단계를 계속 수행한다.
 */

/* solution(구현) */

const participant1 = ["leo", "kiki", "eden"];
const completion1 = ["eden", "kiki"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["josipa", "filipa", "marina", "nikola"];
const participant3 = ["mislav", "stanko", "mislav", "ana"];
const completion3 = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
    const completionMap = new Map();
    completion.forEach((name) => {
        completionMap.set(name, (completionMap.get(name) || 0) + 1);
    });
    for (let i = 0; i < participant.length; i++) {
        const participantName = participant[i];
        if (!completionMap.get(participantName)) {
            return participantName;
        }
        completionMap.set(
            participantName,
            completionMap.get(participantName) - 1
        );
    }
}
console.log(solution(participant2, completion2));

// Object로 구현
// function solution(participant, completion) {
//     const completionMap = {};
//     completion.forEach((name) => {
//         completionMap[name] = (completionMap[name] || 0) + 1;
//     });
//     for (let i = 0; i < participant.length; i++) {
//         const participantName = participant[i];
//         if (!completionMap[participantName]) {
//             return participantName;
//         }
//         completionMap[participantName]--;
//     }
// }

/**
 * Map 결과 / Object 결과
 * @정확성
 * 테스트 1 〉  통과 (0.07ms, 33.4MB) / 통과 (0.12ms, 33.4MB)
 * 테스트 2 〉  통과 (0.15ms, 33.5MB) / 통과 (0.27ms, 33.5MB)
 * 테스트 3 〉  통과 (0.23ms, 33.5MB) / 통과 (0.31ms, 33.6MB)
 * 테스트 4 〉  통과 (0.34ms, 33.6MB) / 통과 (0.66ms, 33.7MB)
 * 테스트 5 〉  통과 (0.33ms, 33.6MB) / 통과 (0.39ms, 33.8MB)
 * @효율성
 * 테스트 1 〉  통과 (36.52ms, 52MB) / 통과 (16.04ms, 53.2MB)
 * 테스트 2 〉  통과 (22.76ms, 56.9MB) / 통과 (39.93ms, 54.8MB)
 * 테스트 3 〉  통과 (22.94ms, 60.8MB) / 통과 (22.25ms, 60.7MB)
 * 테스트 4 〉  통과 (47.90ms, 63.5MB) / 통과 (29.69ms, 69.1MB)
 * 테스트 5 〉  통과 (31.98ms, 62.5MB) / 통과 (34.79ms, 69.2MB)
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
