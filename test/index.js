const arr = [1,2,3]
arr[Math.pow(2,32)-2] = 99
const filter = arr.filter((value)=>value)
console.log(filter)