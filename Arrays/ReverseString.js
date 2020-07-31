//Hi My name is Andrei

//1. Star from last index and create and array with index -1

function reverse(str) {
    if (!str || str.length < 2 || str !== 'string') return 'hmm thtat is not good';
    let res = '';
    for (let index = str.length - 1; index >= 0; index--) {
        res += str[index];
    }
    return res;
}

function reverseSplit(str) {
    return str.split('').reverse().join('');
}

function reverseSpread(str) {
    return [...str].reverse().join('');
}

const reverseES6 = (str) =>
    Array.from(str)
        .reduce((acc, current) => [current].concat(acc))
        .join('');

const str = 'Hi My name is Andrei';
console.log(reverse(str));
console.log(reverseSplit(str));
console.log(reverseSpread(str));
console.log(reverseES6(str));
