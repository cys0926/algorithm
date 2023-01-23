/* https://school.programmers.co.kr/learn/courses/30/lessons/1845 */

/* redefine(재정의) */

// input : nums(폰켓몬의 종류 번호가 담긴 1차원 배열)
// return : N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수

// condition : nums의 길이는 1이상, 10,000 이하의 자연수

// algorithm : 해시 - Set

// logic(psuedo) :
// 1. nums의 중복을 제거한다.
// 2. 종류의 개수의 최대는 (nums 배열의 길이 / 2) 이다.
// 3. (nums 배열의 길이 / 2) 와 (중복을 제거한 nums 의 길이) 중 작은 것을 return 한다.

/* solution(구현) */
const nums1 = [3, 1, 2, 3];
const nums2 = [3, 3, 3, 2, 2, 4];
const nums3 = [3, 3, 3, 2, 2, 2];

function solution(nums) {
    const pokeSet = new Set(nums);
    return Math.min(pokeSet.size, nums.length / 2);
}

console.log(solution(nums3));

/**
 *  check(검증) - Big O Notation
 *
 *  @time_complexity
 *  O(1)
 *
 *  @space_complexity
 *
 *  @improvements(개선점)
 *
 **/

