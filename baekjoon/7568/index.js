// const readFile = "./7568/input.txt";
const readFile = "/dev/stdin";
let [n, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numOfCase = Number(n);
const list = input.map((item) => ({
    rank: 1,
    height: Number(item.split(" ")[0]),
    weight: Number(item.split(" ")[1]),
}));

for (let i = 0; i < numOfCase; i++) {
    for (let j = 0; j < numOfCase; j++) {
        if (
            i !== j &&
            list[i].weight < list[j].weight &&
            list[i].height < list[j].height
        ) {
            list[i].rank++;
        }
    }
}

console.log(list.map((item) => item.rank).join(" "));

// for (let i = 0; i < Number(numOfCase); i++) {
//     if (i === 0) {
//         sortList[i].push(rank);
//     } else if (i > 0) {
//         // 위에있는 사람의 키와 몸무게가 아래 사람의 키와 몸무게보다 크면 rank++
//         if (
//             Number(sortList[i][0]) <= Number(sortList[i - 1][0]) &&
//             Number(sortList[i][1]) <= Number(sortList[i - 1][1]) &&
//             (Number(sortList[i][0]) !== Number(sortList[i - 1][0]) ||
//                 Number(sortList[i][1]) !== Number(sortList[i - 1][1]))
//         ) {
//             rank += overlap;
//             sortList[i].push(rank);
//             overlap = 1;
//         } else {
//             sortList[i].push(rank);
//             overlap++;
//         }
//     }
// }

// console.log(sortList);
