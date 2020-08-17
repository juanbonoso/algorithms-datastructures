//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

function reverseStringRecursion(str, index = 0) {
    if (str.length - 1 === index) {
        return str[index];
    }
    return reverseStringRecursion(str, index + 1) + str[index];
}

console.log(reverseStringRecursion('yoyo mastery'));
//should return: 'yretsam oyoy'
