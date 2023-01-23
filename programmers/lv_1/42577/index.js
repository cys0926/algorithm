const phone_book1 = ["119", "97674223", "1195524421"];
const phone_book2 = ["123", "456", "789"];
const phone_book3 = ["12456", "123", "1235", "567", "88"];

function solution(phone_book) {
    const sortPhoneBook = phone_book.sort(
        (a, b) => a[0] - b[0] || a.length - b.length
    );
    for (let i = 0; i < sortPhoneBook.length; i++) {
        const prefix = sortPhoneBook[i];
        for (let j = i + 1; j < sortPhoneBook.length; j++) {
            if (prefix[0] !== sortPhoneBook[j][0]) {
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

console.log(solution(phone_book1));
