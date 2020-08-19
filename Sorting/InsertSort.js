const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [1, 2, 3, 4, 5];

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

function insertionSortWhile(array) {
    for (let i = 1; i < array.length; i++) {
        let currentIndex = i;
        while (array[currentIndex - 1] > array[currentIndex]) {
            const temp = array[currentIndex - 1];
            array[currentIndex - 1] = array[currentIndex];
            array[currentIndex] = temp;
            currentIndex--;
        }
    }
}

insertionSort(numbers);
console.log(numbers);
