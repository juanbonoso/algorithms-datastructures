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

const FindNemoForEach = (array) => {
    array.forEach((fish) => {
        if (fish === 'nemo') {
            console.log('FOUND NEMO');
        }
    });
};

const FindNemoForOf = (array) => {
    for (const fish of array) {
        if (fish === 'nemo') {
            console.log('FOUND NEMO');
        }
    }
};

FindNemoForEach(everyone);
FindNemoForOf(everyone);
