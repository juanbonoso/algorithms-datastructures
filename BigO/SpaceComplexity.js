function booo(n) {
    for (let index = 0; index < n.length; index++) {
        console.log('booo!');
    }
}

booo([1, 2, 3, 4, 5, 6]);
// Space Complexity O(1)
// Time Complexity O(n)

function arrayOfHintTimes(n) {
    let hiArray = [];
    for (let index = 0; index < n; index++) {
        hiArray[index] = 'hi';
    }
    return hiArray;
}

console.table(arrayOfHintTimes(6));
// Space Complexity O(n)
// Time Complexity O(n)