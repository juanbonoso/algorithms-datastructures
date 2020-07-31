const addUpTo = (sortedArray, total) => {
    let bottomPointer = 0;
    let topPointer = sortedArray.length - 1;
    let temSum = 0;
    while (bottomPointer < topPointer) {
        temSum = sortedArray[bottomPointer] + sortedArray[topPointer];
        console.log(sortedArray[bottomPointer], sortedArray[topPointer], temSum);
        if (temSum < total) bottomPointer++;
        else if (temSum > total) topPointer--;
        else return [sortedArray[bottomPointer], sortedArray[topPointer]];
    }
    return [];
};

const pair = addUpTo([1, 2, 2, 5, 6, 7], 8);
pair.length ? console.log('result', pair[0], pair[1]) : console.log('no pair');
