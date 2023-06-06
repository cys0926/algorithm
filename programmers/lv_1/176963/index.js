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
const name1 = ["may", "kein", "kain", "radi"]
const yearning1 = [5, 10, 1, 3]
const photo1 = [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]

// name1을 key로 하고 yearning1을 value로 하는 객체를 만든다.


function solution(name, yearning, photo) {
    const nameMap = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx]
        return acc
    }, {})


    return photo.map((arr) => arr.reduce((acc, cur) => acc + (nameMap[cur] ?? 0), 0))
}

console.log(solution(name1, yearning1, photo1))

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
