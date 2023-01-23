/* 문제 링크 */

/**
 * redefine(재정의)
 *
 * @input
 *  phone_book : string[] (전화번호를 담은 배열)
 *
 * @return
 *  boolean (다른 번호의 접두어인 경우가 있으면 true, 없으면 false)
 *
 * @condition
 *  1. 중복되는 번호는 없다.
 *
 * @algorithm
 * 해시 - Map
 *
 * @logic(psuedo)
 *  1. phone_book을 맨 앞자리, 길이 순서로 sorting 한다.
 *  2. 기준 번호를 prefix로 지정하여 sort_phone_book을 순회한다.
 *  3. 이때 현재 번호 이후의 번호들만 조회한다.
 *  => (앞자리 / 길이 순으로 sorting되어 있으므로 앞에 것은 보지 않아도 됨)
 *  4. 만약 앞자리가 다르면 더 이상 검증하지 않고 break로 탈출하여 다음 번호를 prefix로 하여 조회한다.
 *  (앞자리 순으로 sorting 되어 있으므로 앞자리가 다른게 나오면 그 이후의 번호는 모두 앞자리가 다름)
 *  5. 만약 길이가 같다면 continue로 탈출하여 검증하지 않고 이후 검증을 진행한다.
 *  6. 먄약 prefix로 사용하는 경우가 있다면 false를 return하고 함수를 종료한다.
 *  7. 검증이 끝날때까지 prefix로 사용하는 경우가 없다면 true를 return 한다.
 */

// solution(구현)

const phone_book1 = ["119", "97674223", "1195524421"];
const phone_book2 = ["123", "456", "789"];
const phone_book3 = ["12", "123", "1235", "567", "88"];

function solution(phone_book) {
    const sortPhoneBook = phone_book.sort(
        (a, b) => a[0] - b[0] || a.length - b.length
    );

    console.log(sortPhoneBook);
    for (let i = 0; i < sortPhoneBook.length; i++) {
        const prefix = sortPhoneBook[i];
        for (let j = i + 1; j < sortPhoneBook.length; j++) {
            if (prefix[0] !== sortPhoneBook[j][0]) {
                break;
            }
            if (prefix.length === sortPhoneBook[j].length) {
                continue;
            }
            const regex = new RegExp("^" + prefix);
            if (regex.test(sortPhoneBook[j])) {
                return false;
            }
        }
    }
    return true;
}

console.log(solution(phone_book2));

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
 *  O(N^2)
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/