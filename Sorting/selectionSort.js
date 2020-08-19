const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [1, 2, 3, 4, 5];

// Assign the lower number to the first el of the array
// Loop and compare with lower item
// if it's lower assign it;
// change the position of lower number to the first available position
// Start from position ahead
function selectionSort(array) {
    let smallestItemPostion;
    let hasChanged = false;
    for (let i = 0; i < array.length - 1; i++) {
        smallestItemPostion = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestItemPostion]) {
                smallestItemPostion = j;
                hasChanged = true;
            }
        }
        if (hasChanged) {
            temp = array[i];
            array[i] = array[smallestItemPostion];
            array[smallestItemPostion] = temp;
            hasChanged = false;
        }
    }
}

selectionSort(numbers);
console.log(numbers);
