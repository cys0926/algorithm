const fs = require('fs')
// const input = fs.readFileSync('./2562/input.txt').toString().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const arr = input.map((item) => +item)
const max = Math.max(...arr)

console.log(max)
console.log(arr.indexOf(max)+1)


// const let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// console.log(arr)