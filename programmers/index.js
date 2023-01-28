/* 문제 링크 */

/**
 * redefine(재정의)
 * @input
 *
 * @return
 *
 * @condition
 *
 * @algorithm
 *
 * @logic(psuedo)
 */

// solution(구현)
const n = 1000000;
const myObj = new Object();
const myMap = new Map();
let result;

console.time("set property Object");
for (let i = 0; i < n; i++) {
    myObj[`key_${i}`] = i;
}
// for (let i = 0; i < n; i++) {
//     myObj[`key_${i}`] = myObj[`key_${i}`] + 1;
// }
for (let i = 0; i < n; i++) {
    result = myObj[`key_${i}`];
}
console.timeEnd("set property Object");
console.time("set property Map");
for (let i = 0; i < n; i++) {
    myMap.set(`key_${i}`, i);
}
// for (let i = 0; i < n; i++) {
//     myMap.set(`key_${i}`, myMap.get(`key_${i}`) + 1);
// }
for (let i = 0; i < n; i++) {
    result = myMap.get(`key_${i}`);
}

console.timeEnd("set property Map");

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
