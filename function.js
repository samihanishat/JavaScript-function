// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    const product = num1 * num2 * num3 * num4;
    return product;
}
const product = multiply(12, 13, 24, 25);
console.log(product);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.

function evenOrOdd(number) {
    if (number % 2 === 1) {
        const multiply = number * 2;
        return multiply;
    }
    else {
        const divide = number / 2;
        return divide;
    }
}
console.log(evenOrOdd(9));

// Task - 3
// Write a function called make_avg() which will take an array of integers and the size of that array 
// and return the average of those values.
let sum;
function make_avg(integers) {
    const size = integers.length;
    sum = size;
    for (number of integers) {
        sum = sum + number;
    }
    const divisor = size + 1;
    const average = sum / divisor;
    return average;
}
const arrayOfIntegers = [12, 13, 15, 21, 93];
console.log(make_avg(arrayOfIntegers));