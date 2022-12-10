// const readFile = "./1107/input.txt";
const readFile = "/dev/stdin";
const [target, numbOfBrokenButtons, brokenList] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\n")
    .map((item) => item.trim());

const brokenButtonList = brokenList?.split(" ") ?? [];

let checkButton = function (currentButtonList) {
    return brokenButtonList.some((button) =>
        currentButtonList.includes(button)
    );
};

let findLowestNumberCnt = function (target) {
    if (brokenButtonList.length === 0) {
        return target.length;
    } else {
        let currentButton = +target;
        let currentButtonList = currentButton.toString().split("");

        while (checkButton(currentButtonList)) {
            if (currentButton > 1000010) {
                return 10000000;
            }
            currentButton++;
            currentButtonList = currentButton.toString().split("");
        }
        // console.log("LowestNumber", currentButton);
        return currentButton - Number(target) + currentButton.toString().length;
    }
};

let findHighestNumberCnt = function (target) {
    if (brokenButtonList.length === 0) {
        return target.length;
    } else {
        let currentButton = +target;
        let currentButtonList = currentButton.toString().split("");

        while (checkButton(currentButtonList)) {
            if (currentButton < 0) {
                return 10000000;
            }
            currentButton--;
            currentButtonList = currentButton.toString().split("");
        }
        // console.log("HighestNumber", currentButton);
        return Number(target) - currentButton + currentButton.toString().length;
    }
};

const targetNumber = +target;

let minCnt = Math.min(
    findLowestNumberCnt(target),
    findHighestNumberCnt(target),
    Math.abs(100 - targetNumber)
);

// console.log("LowestNumber", findLowestNumberCnt(target));
// console.log("HighestNumber", findHighestNumberCnt(target));

console.log(minCnt);
