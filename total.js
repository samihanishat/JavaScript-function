const products = [
    { name: 'shampoo', price: 300 },
    { name: 'chiruni', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 1200 }
];
function getShoopingTotal(products) {
    let sum = 0;
    for (const product of products) {
        sum += product.price;
    }
    return sum;
}
console.log(getShoopingTotal(products));


const items = [
    { name: 'shampoo', price: 300, quantity: 5 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 7 },
    { name: 'pant', price: 1200, quantity: 4 }
];
function cartTotal(products) {
    total = 0;
    for (const product of products) {
        total += product.price * product.quantity;
    }
    return total;
}
console.log(cartTotal(items));