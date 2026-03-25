let prices = [98, 198, 298, 9999]

// prices.forEach( (price) => {console.log(price)});

// prices.map( (price) => {console.log(price)});

// prices.filter( (price) => {console.log(price)});

// prices.find( (price) => {console.log(price)});

// Using Map 
// create new array => go with map

let new_prices = prices.map( (price) => {
    return price + 1
})

console.log(prices);
console.log(new_prices);

let new_prices_V2 = prices.map ((price) => ( price + 1) )

// collect all even numbers in he new array 

let numbers = [11, 8, 31, 18, 1055, 232]

let even_numbers = [] 

for(let num of numbers){
    if(num%2 == 0){
        even_numbers.push(num)
    }
}

console.log(even_numbers);
console.log(new_prices_V2);


// Using filter 

let new_even_number = numbers.filter( (num) => {
    return num%2 === 0;
})

let new_even_numberV2 = numbers.filter( (num) => (num%2 === 0))

console.log(new_even_number);
console.log(new_even_numberV2);


