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
console.log(maxPrice);
