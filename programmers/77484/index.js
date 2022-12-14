const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
    let matchedNumber = 0;
    let zeroNumber = 0;
    const STANDING_MAP = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
    };
    const DEFAULT_STANDING_MAP = 6;
    lottos.forEach((number) => {
        if (number === 0) {
            zeroNumber++;
        } else {
            win_nums.includes(number) && matchedNumber++;
        }
    }    );
    const lowestRank = STANDING_MAP[matchedNumber] ?? DEFAULT_STANDING_MAP;
    const highestRank =
        STANDING_MAP[matchedNumber + zeroNumber] ?? DEFAULT_STANDING_MAP;

    return [highestRank, lowestRank];
}

console.log(solution(lottos, win_nums));
