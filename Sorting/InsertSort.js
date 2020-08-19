const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// We start from the Second item --loop
// We compare the current item with all the previous item
// We swicth until a previous item previos item < current ITEM
// we repeat the process with start + 1
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >= 0; j--) {
            const currentElement = array[j];
            const previousElement = array[j - 1];
            if (previousElement > currentElement) {
                array[j - 1] = currentElement;
                array[j] = previousElement;
            } else {
                j = 0;
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);
