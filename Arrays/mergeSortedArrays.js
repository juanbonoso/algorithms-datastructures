function mergeSortedArrays(array1, array2) {
    const mergeSortedArrays = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check input
    if (array1.length === 0) return array2;
    if (array2.length === 0) return array1;

    let counter = 0;

    while (array1Item || array2Item) {
        counter++;
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergeSortedArrays.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergeSortedArrays.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    console.log(counter);

    return mergeSortedArrays;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
