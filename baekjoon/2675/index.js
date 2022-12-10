const fs = require('fs')
// const input = fs.readFileSync('./2675/input.txt').toString().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const numOfTestCase = input.shift()

for(let i = 0; i < numOfTestCase; i++){
    let answer = ''
    const [num2, str] = input[i].split(" ")
    // console.log(input[i].split(" "))

    for(let j = 0; j < str.length; j++){
        for(let k = 0; k < num2; k++){
            answer += str[j];
        }
    }

    console.log(answer)
}
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
