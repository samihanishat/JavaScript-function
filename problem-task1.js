// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function CelsToFaren(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
console.log(CelsToFaren(123));


// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//  }, 100);
// }



// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
function countRepeat(numbers) {
    let find = 2;
    const repeatedArray = [];
    for (const num of numbers) {
        if (num === find) {
            repeatedArray.push(num);
        }
    }
    return repeatedArray;
}
const reap = countRepeat([5, 12, 24, 64, 5, 89, 67, 12, 5, 5, 6, 5]);
console.log(reap);
console.log(reap.length);




// Task 3
// Write a function to find the longest word in a given string.
function longestWord(string) {
    const words = string.split(' ');
    let max;
    let longWord = '';
    for (const word of words) {
        max = longWord.length;
        if (word.length > max) {
            longWord = word;
        }
    }
    return longWord;
}
const word = 'I am learning Programming to become a programmer';
console.log(longestWord(word));
console.log(longestWord('I am a student of Information and Communication Technology at Comilla University.'));


// Task-4:
// Generate a random number between 10 to 20.
function getRandomNumber() {
    return Math.floor(Math.random() * 11 + 10);
}
// console.log(getRandomNumber());

// Task-5:
// Write a function to count the number of vowels in a string.
function vowels(string){
    let NumVowels = 0;
    for(const char of string){
        if(char === 'a'){
           NumVowels++; 
        }
        else if(char === 'e'){
           NumVowels++; 
        }
        else if(char === 'i'){
           NumVowels++; 
        }
        else if(char === 'o'){
           NumVowels++; 
        }
        else if(char === 'u'){
           NumVowels++; 
        }
        else if(char === 'A'){
           NumVowels++; 
        }
        else if(char === 'E'){
           NumVowels++; 
        }
        else if(char === 'I'){
           NumVowels++; 
        }
        else if(char === 'O'){
           NumVowels++; 
        }
        else if(char === 'U'){
           NumVowels++; 
        }
    }
    return NumVowels;
}
console.log(vowels('Abachaioyueplaqeou'));