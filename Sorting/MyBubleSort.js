const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            const current = numbers[j];
            if (numbers[j] > numbers[j + 1]) {
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = current;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);
