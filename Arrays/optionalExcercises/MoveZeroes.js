// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// O(n^2)
// 1. First que loop the array until we find a 0
// 2. We save the 0 in a varable
// 3. We do another loop from the position of the 0, to shift all the elements to the left
// 4. Push the 0 to the end
const nums = [0, 1, 0, 3, 12];
const nums2 = [5, 1, 0, 3, 12, 10, 0, 0, 0, 25, 0];
const moveZeroes = function (nums) {
    const lastIndex = nums.length - 1;
    for (let i = 0; i < nums.length - 1; i++) {
        const currentElement = nums[i];
        const nextElement = nums[i + 1];
        if (currentElement === 0 && nextElement !== 0) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            nums[lastIndex] = currentElement; // add 0 to the last element of the array
        } else if (currentElement == 0 && nextElement == 0) {
            // Find the next integer different than 0
            for (let j = i + 2; j < nums.length; j++) {
                const element = nums[j];
                if (element !== 0) {
                    nums[i] = element;
                    nums[j] = 0;
                    break;
                }
            }
        }
    }
    return nums;
};

// o(n)
// 1. We are going to have a pointer to the last index of the array
// 2. We have a variable to determine the number of shift to left to do
// 3. Loop Through the array
// 4. Each time we see a 0, we increment that variable in  1
// 5. We verify if the current item of the lopp is not 0, to shift to the left depending on the shifLeft Variable
// 6. If we shif we change the value of 0

const moveZeroesImproved = (nums) => {
    let shifToTheLeft = 0;
    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[i];
        if (currentElement === 0) shifToTheLeft += 1;
        else {
            if (shifToTheLeft > 0) {
                nums[i - shifToTheLeft] = currentElement;
                nums[i] = 0;
            }
        }
    }
    return nums;
};

console.log(moveZeroesImproved(nums));
