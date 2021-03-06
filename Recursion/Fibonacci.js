// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    let previousPreviousNumber = 0;
    let immediatePreviousNumber = 1;
    let currentNumber = 0;
    for (let i = 2; i <= n; i++) {
        currentNumber = previousPreviousNumber + immediatePreviousNumber;
        previousPreviousNumber = immediatePreviousNumber;
        immediatePreviousNumber = currentNumber;
    }
    return currentNumber;
}

// O(n)
function fibonacciIterativeBetter(n) {
    const arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}


// O(2^n)
function fibonacciRecursive(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const number = 45;
console.log(fibonacciIterative(number), fibonacciRecursive(number));
