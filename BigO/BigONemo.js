const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marilin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('runinng');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!!');
            break;
        }
    }
}

findNemo(everyone); //o(n) --> Linear Time

/* const boxes = [0, 1, 2, 3, 4, 5]
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) */
