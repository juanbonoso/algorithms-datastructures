let counter = 0;
function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception();
}

console.log(inception());
//  1. Base Case
//  2. Recursive Case
//  3. Get closer and closer and return when need. We usually have 2 returns