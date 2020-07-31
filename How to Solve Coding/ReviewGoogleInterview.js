// Naive
function hasPairWithSumNaive(arr, sum) {
    const len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) return true;
        }
    }
    return false;
}
const array = [1, 2, 4, 4];
console.log(hasPairWithSumNaive(array, 8));

// 1. Create a set
// 2. Loop through the array and see if the current loop item is part of the complement set
// 2. In other words, check if the current item has been required on the past
// 2. If yes, you end  else you add the complement

// Expert
function hasPairWithSumExpert(arr, sum) {
    const comp = new Set();
    for (const iterator of arr) {
        if (comp.has(iterator)) return true;
        const complement = sum - iterator;
        comp.add(complement);
    }
    return false;
}
console.log(hasPairWithSumExpert(array, 8));
