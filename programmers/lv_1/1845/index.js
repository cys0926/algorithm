const nums1 = [3, 1, 2, 3];
const nums2 = [3, 3, 3, 2, 2, 4];
const nums3 = [3, 3, 3, 2, 2, 2];

function solution(nums) {
    const pokeSet = new Set(nums);
    return Math.min(pokeSet.size, nums.length / 2);
}

console.log(solution(nums3));
