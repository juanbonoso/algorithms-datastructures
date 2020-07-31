/* Given 2 arrays create a function that let's a user know (true/false) whether
these two arrays contain any common items 
For example: 
const array1 = [a,b,c,x];
const array2 = [z,y,i];
false
--------------
const array1 = [a,b,c,x];
const array2 = [z,y,x];
true
*/
// array3 = [a, b, c, x, z, y, i];

function hasCommomItem(array1, array2) {
    for (const iterator1 of array1) {
        for (const iterator2 of array2) {
            if (iterator1 === iterator2) {
                return true;
            }
        }
    }
    return false;
}

// O(a*b)
// O(1) -- Space Complexity

const array1 = ['z', null, 'z', 'c'];
const array2 = ['z', null, 'i'];

const array2A = ['z', 'y', 'x'];
console.log(hasCommomItem(array1, array2A));

function hasCommomItemImproved(array1, array2) {
    // Loop through the first array and convert into an object
    // Can we asume 2 params in the function
    const createdObject = {};
    for (const iterator of array1) {
        if (!createdObject[iterator]) createdObject[iterator] = true;
    }
    console.table(createdObject);
    // Loop through the second array and compare each item with the props of the created object
    for (const iterator2 of array2) {
        if (createdObject[iterator2]) return true;
    }
    return false;
}

function hasCommomItemES6(array1, array2) {
    return array1.some((item) => array2.includes(item));
}

// O( a + b) Time Complexity
// o(a) space complexity
console.log(hasCommomItemImproved(array1, array2));
console.log(hasCommomItemES6(array1, array2A));
