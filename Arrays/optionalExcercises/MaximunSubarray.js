const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const numsCase2 = [-5, 10, 20, -1, 50, -100, 9];
const numsCase3 = [-5, 10, 20, -1, 50, -100, 90, 100];
const casePositives = [1, 2, 3, 4, 5];
const caseNegatives = [-10, -20, -30, -40, -5];

const maxSubArray = (nums) => {
    let currentMaxSum = nums[0];
    let solutionMaxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const currentElement = nums[i];
        // DOING A MATH.MAX
        if (currentElement > currentMaxSum + currentElement) currentMaxSum = currentElement;
        else currentMaxSum = currentElement + currentMaxSum;

        if (currentMaxSum > solutionMaxSum) solutionMaxSum = currentMaxSum;
    }
    return solutionMaxSum;
};

console.log(maxSubArray(nums));
