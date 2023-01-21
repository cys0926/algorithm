const input = 10;

function solution(number) {
    let result = 2;
    while (number % result !== 1) {
        result++;
    }
    return result;
}

console.log(solution(input));
