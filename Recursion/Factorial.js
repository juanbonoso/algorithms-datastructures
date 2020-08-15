// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if (number === 1 || number === 0) {
        return 1;
    }
    const answer = number * findFactorialRecursive(number - 1);
    return answer;
}

function findFactorialIterative(number) {
    if (number === 0) {
        return 1;
    }
    let answer = 1;
    for (let i = number; i > 1; i--) {
        answer *= number;
        number--;
    }
    return answer;
}
const number = 8;
console.log(findFactorialRecursive(number), findFactorialIterative(number));
