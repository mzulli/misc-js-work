// list all primes up to a number
//
// given a number, return an array of prime numbers up to and including
// the number.

function findPrimes(num) {
    
    // set up function to decide whether a number is prime
    function isPrime(n) {
        // test all nums between 1 and the number
        for (var i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    // set up array of primes
    var primes = [];
    
    // loop through range, test for prime; create array of primes
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) primes.push(i);
    }
    
    return(primes);
}

findPrimes(23);
