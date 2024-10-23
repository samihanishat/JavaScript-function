const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 16000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 25000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 24000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 2000, camera: '12mp', color: 'black' },
    { name: 'Realme', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Redme', price: 35000, camera: '12mp', color: 'black' }
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheap = cheapestPhone(phones);
console.log('The cheapest phone', cheap);
