const numbers = [1, 2, 3, 4, 5, 6, 7];
const Num = [];
for (const number of numbers) {
    Num.push(number);
}
// console.log(Num);

const reverseNum = [];
for (const number of numbers) {
    reverseNum.unshift(number);
}
// console.log(reverseNum);

// console.log(numbers.reverse());

const reversedNumber = [];
for (let i = 0; i < numbers.length; i++) {
    reversedNumber.unshift(numbers[i]);
}
// console.log(reversedNumber);

const revNum = [];
for (let i = numbers.length - 1; i >= 0; i--){
    revNum.push(numbers[i]);
}
// console.log(revNum);



const colors = ['red','blue', 'green', 'yellow', 'orange'];
// console.log(color.reverse());
const revColor = [];
for (let color of colors){
    revColor.unshift(color);
}
console.log(revColor);





