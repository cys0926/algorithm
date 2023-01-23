const participant1 = ["leo", "kiki", "eden"];
const completion1 = ["eden", "kiki"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["josipa", "filipa", "marina", "nikola"];
const participant3 = ["mislav", "stanko", "mislav", "ana"];
const completion3 = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
    let answer;
    const participantMap = new Map();
    const completionMap = new Map();
    participant.forEach((value) => {
        participantMap.get(value)
            ? participantMap.set(value, participantMap.get(value) + 1)
            : participantMap.set(value, 1);
    });
    completion.forEach((value) => {
        completionMap.get(value)
            ? completionMap.set(value, completionMap.get(value) + 1)
            : completionMap.set(value, 1);
    });
    participantMap.forEach((value, key) => {
        if (completionMap.get(key) !== value) {
            answer = key;
        }
    });
    return answer;
}

console.log(solution(participant3, completion3));