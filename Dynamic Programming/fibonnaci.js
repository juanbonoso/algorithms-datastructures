let calculations = 0;

function fibonnaciMaster() {
    const cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        }
        if (n < 2) {
            return n;
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}

const fasterFib = fibonnaciMaster();
console.log('DP', fasterFib(35));
console.log(calculations);
