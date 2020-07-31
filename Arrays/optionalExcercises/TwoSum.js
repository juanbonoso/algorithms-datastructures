const nums = [2, 7, 11, 15, 1 , 3];

function twoSum(nums, target) {
    const createdObject = {};
    for (let index = 0; index < nums.length; index++) {
        const integer = nums[index];
        if (createdObject[integer]) return [createdObject[integer].index, index];
        const complement = target - integer;
        if (!createdObject[complement]) createdObject[complement] = { index };
    }
    return [];
}

console.log(twoSum(nums, 18));
