let phones = [
    {name: 'iphone', price: 100000, color: 'white',},
    {name: 'realme', price: 20000, color: 'white',},
    {name: 'oppo', price: 25000, color: 'white',},
    {name: 'vivo', price: 27000, color: 'white',}

]


function getMax(phones){
    let max = phones[0];
    for(let phone of phones){
        if(phone.price > max.price){
            max = phone
        }
    }
    return max;
}

let maxPrice = getMax(phones);
console.log('Highest price: ', maxPrice);


// Lowest price


let phones2 = [
    {name: 'iphone', price: 100000, color: 'white',},
    {name: 'realme', price: 20000, color: 'white',},
    {name: 'oppo', price: 25000, color: 'white',},
    {name: 'vivo', price: 27000, color: 'white',}

]

function getMin(phone){
    let min = phone[0];
    for(let mobile of phone){
        if(mobile.price < min.price){
            min = mobile
        }
    }
    return min;
}

let minPrice = getMin(phones2);
console.log('Lowest price: ', minPrice);
