/* 문제 링크 */

/**
 * redefine(재정의)
 * @input
 *  prices : number[] (초 단위로 기록된 주식각격이 담긴 배열)
 *
 * @return
 *  answer : number[] (가격이 떨어지지 않은 기간)
 *
 * @condition
 *
 * @algorithm
 * 해시 - Map
 *
 * @logic(psuedo)
 */

// solution(구현)
const prices = [1, 2, 3, 2, 3];

function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];
    const newPrices = prices.map((price, index) => ({ price, index }));
    for (let i = 0; i < newPrices.length; i++) {
        while (
            stack.length !== 0 &&
            newPrices[i].price < stack[stack.length - 1].price
        ) {
            answer[i - 1] = stack.length - i + 1;
            stack.pop();
        }
        stack.push(newPrices[i]);
    }
    const lastStack = stack[stack.length - 1];
    stack.forEach(({ price, index }) => {
        answer[index] = lastStack.index - index;
    });
    return answer;
}

solution(prices);

/**
 * 결과
 * @정확성
 *
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