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


// Task-4
// Write a function called count_zero() which will take a binary string
//  (Binary string is a string which is consist of only 0 and 1)
//   as parameter and count how many 0’s are there in that string.
let zeroArray = [];
function count_zero(binaryStr){
    console.log(binaryStr);
    for (let i = 0; i < binaryStr.length; i++  ){
        if(binaryStr[i] === '0'){
            zeroArray.push('0');
        }
    }
    // return zeroArray;
}
const binary = '01010110011010110';
// zeroArray = 
count_zero(binary);

console.log(zeroArray);
console.log(zeroArray.length);


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
//  If even return Even. If odd return Odd

function odd_even(integer){
    if(integer % 2 === 0){
        console.log('Even');
    }
    else{
      console.log('Odd');  
    }
}
odd_even(123);