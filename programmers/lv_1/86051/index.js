const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
    return (
        45 -
        numbers.reduce((prev, curr) => {
            return prev + curr;
        })
    );
}

console.log(solution(numbers));
