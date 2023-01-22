const absolutes = [1, 2, 3];
const signs = [false, false, true];

function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((number, index) => {
        answer = signs[index] ? answer + number : answer - number;
    });
    return answer;
}

console.log(solution(absolutes, signs));
