const a = [-1, 0, 1];
const b = [1, 0, -1];

function solution(a, b) {
    return a.reduce((prev, curr, index) => {
        return prev + curr * b[index];
    }, 0);
}

console.log(solution(a, b));
