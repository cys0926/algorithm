// const readFile = "./2292/input.txt";
const readFile = "/dev/stdin";
const input = Number(require("fs").readFileSync(readFile).toString().trim());
let boundary = 1;
let count = 0;
let isBoundary = false;

while (!isBoundary) {
    if (input <= boundary) {
        isBoundary = true;
    } else {
        count++;
        boundary += 6 * count;
    }
}

console.log(++count);
