var numberToCheck = process.argv[2];
var primeFactors = [];

function division (number, divisor) {
    if (number / divisor === 1) {
        primeFactors.push(number);

        return;
    }

    if (number % divisor === 0) {
        var nextNumber = number / divisor;

        primeFactors.push(divisor);
        division(nextNumber, divisor);
    } else {
        division(number, divisor + 1);
    }
}

division(numberToCheck, 2);

console.log(primeFactors);
