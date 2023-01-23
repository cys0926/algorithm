const clothes1 = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
];
const clothes2 = [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
];

function solution(clothes) {
    let answer = 1;
    const clothMap = new Map();
    clothes.forEach((cloth) => {
        clothMap.set(cloth[1], (clothMap.get(cloth[1]) || 0) + 1);
    });
    clothMap.forEach((value, key) => {
        answer *= value + 1;
    });

    return answer - 1;
}

console.log("result", solution(clothes1));
