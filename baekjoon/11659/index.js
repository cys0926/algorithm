const readFile =
    process.platform === "linux"
        ? "/dev/stdin"
        : `./${__dirname.split("\\").slice(-1)[0]}/input.txt`;

const [a, b, ...c] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [capacityOfNumbers, numberOfTestCase] = a
    .split(" ")
    .map((item) => item.trim());
const numberArr = b.split(" ").map((item)=>Number(item))

let sumArr = Array(numberArr.length +1).fill(0)
numberArr.forEach((item, index)=>{
    sumArr[index +1] = sumArr[index] + item
})

let answer = "";

c.map((item)=>item.split(" ").map((item)=>Number(item))).forEach(([start,end]) =>{
    answer += (sumArr[end] - sumArr[start -1]) + '\n'
} )

console.log(answer);