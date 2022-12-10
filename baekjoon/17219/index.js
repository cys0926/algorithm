const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./17219/input.txt";

const [testCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [N, M] = testCase.split(" ").map((item) => +item);
const passwordMap = new Map();

for (let i = 0; i < N; i++) {
    let [url, password] = input[i].split(" ").map((item) => item.trim());
    passwordMap.set(url, password);
}

for (let i = N; i < M + N; i++) {
    let url = input[i].trim();
    console.log(passwordMap.get(url));
}

