const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./1260/input.txt";

const [testCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\n");

const [N, M, V] = testCase.split(" ").map(Number);
let graph = {};
for (let i = 1; i <= N; i++) {
    graph[`${i}`] = [];
}
for (let i = 0; i < M; i++) {
    const [start, end] = input.shift().split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

const dfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);
    while (needVisit.length !== 0) {
        const node = needVisit.pop(); // stack의 후입선출로 pop() 사용
        if (!visited.includes(node)) {
            visited.push(node);

            graph[node].sort((a, b) => {
                if (a > b) return -1;
                else if (a < b) return 1;
                else return 0;
            });

            needVisit = [...needVisit, ...graph[node]];
        }
    }

    return visited;
};

const bfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);
    while (needVisit.length !== 0) {
        const node = needVisit.shift(); // stack의 후입선출로 pop() 사용
        if (!visited.includes(node)) {
            visited.push(node);

            graph[node].sort((a, b) => {
                if (a > b) return 1;
                else if (a < b) return -1;
                else return 0;
            });

            needVisit = [...needVisit, ...graph[node]];
        }
    }

    return visited;
};

console.log(dfs(graph, V).join(" ") + "\n" + bfs(graph, V).join(" "));
