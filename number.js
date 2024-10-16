const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNum = [];                                              
for (let number of numbers ){
    if (number % 2 === 0){
      evenNum.push(number);  
    }
}
// console.log(evenNum);

const name = ['Tom','Tim','Tin','Tik'];
let nameStr = '';
for (let i of name){
    nameStr += i;
}
// console.log(nameStr);


const statement = 'I am a hard working person.'
let reverseStatement = '';
for(let i of statement){
    reverseStatement = i + reverseStatement;
}
// console.log(reverseStatement);


function square (x){
    console.log(x*x);
}
// square(4);

function sumOfNumbers (numbers){
    console.log(numbers);
    let sum = 0;
    for (number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [12,13,155,123,12344];
console.log('Sum', sumOfNumbers(numbs));

const numbs1 = [12,345,948,387];
const arraySum = sumOfNumbers(numbs1);
console.log('Sum of the numbers in the array:', arraySum);