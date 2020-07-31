const case1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const case2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const case3 = [2, 3, 4, 5];
const case4 = [2, 3, 5, 8, 8, 2];
const caseBonus = [2, 5, 5, 2, 3, 5, 1, 2, 4];

// Loop through the entire array
// Loop each item vs the items of the entire arrays
// find something equivalent, if you do save the indexes of both elements
// save the substraction between upper and lower index
// if there's another match see if the substraction is lower than the current substraction
function firstRecurringCharacterQuadratic(nums) {
    let startIndex = undefined;
    let finishIndex = undefined;
    let indexAddition = undefined;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const elementToCompare = nums[j];
            if (element === elementToCompare) {
                if (indexAddition == undefined) {
                    startIndex = i;
                    finishIndex = j;
                    indexAddition = finishIndex - startIndex;
                } else if (i < finishIndex && j < finishIndex) {
                    startIndex = i;
                    finishIndex = j;
                    indexAddition = finishIndex - startIndex;
                }
            }
        }
    }
    if (startIndex != undefined) {
        return nums[startIndex];
    } else return undefined;
}

// Loop the array
// Save each element on a has table
// If the elemtn exist we return that element

function firstRecurringCharacter(nums) {
    const pastNumbers = new Set();
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (pastNumbers.has(element)) return element;
        else pastNumbers.add(element);
    }
    return undefined;
}

console.log(firstRecurringCharacterQuadratic(case1));
console.log(firstRecurringCharacterQuadratic(case2));
console.log(firstRecurringCharacterQuadratic(case3));
console.log(firstRecurringCharacterQuadratic(case4));
console.log(firstRecurringCharacterQuadratic(caseBonus));

console.log('second function');
console.log(firstRecurringCharacter(case1));
console.log(firstRecurringCharacter(case2));
console.log(firstRecurringCharacter(case3));
console.log(firstRecurringCharacter(case4));
console.log(firstRecurringCharacter(caseBonus));
