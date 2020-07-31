const nums = [1, 2, 3, 4, 5, 6, 7];
const numero = [10, 20, 30, 40];
// O(n^2) Time
// O(1) Space
const rotateQuadratic = (array, k) => {
    let rotations = k;
    const nums = [...array];
    if (k === 0 || k === nums.length) return nums;
    if (k > array.length) rotations = k % array.length;

    let temp;
    for (let i = 0; i < rotations; i++) {
        temp = nums[0];
        nums[0] = nums[nums.length - 1];
        for (let j = 1; j < array.length; j++) {
            const element = nums[j];
            nums[j] = temp;
            temp = element;
        }
    }
    return nums;
};

// O(n) Time
// O(n) space
const rotate = (nums, k) => {
    if (k === 0 || k === nums.length) return nums;
    const rotationStartsAtIndex = nums.length - k;
    const solution = [];
    for (let i = rotationStartsAtIndex; i < nums.length; i++) {
        solution.push(nums[i]);
    }
    for (let j = 0; j < rotationStartsAtIndex; j++) {
        solution.push(nums[j]);
    }
    return solution;
};

// o(n) time
// o(1) extra space --> we need constant
const rotateCyclic = (nums, k) => {
    let length = nums.length;
    k = k % length;
    let changedNumbers = 0;
    for (let start = 0; changedNumbers < length; start++) {
        let currentIndex = start;
        let previousElement = nums[start];
        do {
            const nextIndex = (currentIndex + k) % length;
            const nextElement = nums[nextIndex];
            nums[nextIndex] = previousElement;
            previousElement = nextElement;
            currentIndex = nextIndex;
            changedNumbers++;
        } while (start != currentIndex);
    }
    return nums;
};

// o(n) time
// o(1) No extra space --> we do not need constant
const rotateWithReverse = (nums, k) => {
    k = k % nums.length;
    reverseArray(nums, 0, nums.length - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, nums.length - 1);
    return nums;
};

const reverseArray = (nums, startIndex, endIndex) => {
    while (startIndex < endIndex) {
        const temp = nums[startIndex];
        nums[startIndex] = nums[endIndex];
        nums[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
};

// console.log(rotateCyclic(numero, 2));
console.log(rotate(nums, 4), rotateQuadratic(nums, 4), rotateCyclic(nums, 4));
