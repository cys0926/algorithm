const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
    let totalMoney = 0;
    for (let i = 1; i <= count; i++) {
        totalMoney += price * i;
    }
    const answer = totalMoney - money;

    return answer >= 0 ? answer : 0;
}

console.log(solution(price, money, count));
