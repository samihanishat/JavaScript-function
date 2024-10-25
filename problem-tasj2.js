// Task -1:
// Find the lowest number in the array below.
const numbers = [167, 190, 120, 165, 137];
function lowestNumber(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(lowestNumber(numbers));

// Task -2:
// Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(names) {
    let smallest = names[0]
    for (const name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}
console.log(smallestName(friends));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop,
//  tablets, and mobile and returns the total money required.
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopTotal = laptop * laptopQuantity;
    const tabletTotal = tablet * tabletQuantity;
    const mobileTotal = mobile * mobileQuantity;
    const total = laptopTotal + tabletTotal + mobileTotal;
    return total;
}
console.log(calculateElectronicsBudget(12, 45, 90));

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price.
//  Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and 
//  returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let sum = 0;
    let avg = 0;
    for(const phone of phones){
        sum += phone.price;
        avg = sum / phones.length;
    }
    return avg;
}
console.log(findAveragePhonePrice(phones));


// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience 
// then adding the result to the starting salary. Now calculate is the total salary has to be provided by the
//  company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

function totalSalary(employees){
    let salary = 0;
    for(const employee of employees){
        salary += employee.starting + employee.experience * employee.increment;
    }
    return salary;
}
console.log(totalSalary(employees));