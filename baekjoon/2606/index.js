const readFile =
    process.platform === "linux"
        ? "/dev/stdin"
        : `./${__dirname.split("\\").slice(-1)[0]}/input.txt`;

const [a, b, ...c] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numberOfComputers = +a;
const numberOfPair = +b;

const graph = {};
for (let i = 0; i < numberOfComputers; i++) {
    graph[i + 1] = [];
}

for (let i = 0; i < numberOfPair; i++) {
    const [start, end] = c[i]
        .trim()
        .split(" ")
        .map((item) => Number(item));
    graph[start].push(end);
    graph[end].push(start);
}
// console.log(graph);

const dfs = (startNode, graph) => {
    let visited = [];
    let stack = [];
    stack.push(startNode);

    while (stack.length > 0) {
        // console.log(stack);
        const node = stack.pop();
        if (!visited.includes(node)) {
            visited.push(node);
            stack = [...stack, ...graph[node]];
        }
    }

    return visited;
};

console.log(dfs(1, graph).length - 1);
