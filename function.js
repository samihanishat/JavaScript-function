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

function evenOrOdd (number){
    if(number %2===1){
        const multiply = number*2;
        return multiply;
    }
    else{
        const divide = number/2;
        return divide;
    }
}
console.log(evenOrOdd(9));