const nums = [1, 2, 3, 2, 5 ,5 ];

// 1. We are going to create a set
// 2. Loop array
// 3. If the value is not in the set, add it
// 4. If the values is in the set, return true and break the loop

const containsDuplicate = function (nums) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (mySet.has(element)) return true;
        else mySet.add(element);
    }
    return false;
};

console.log(containsDuplicate(nums));
