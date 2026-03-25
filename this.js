// // // function greet(){
// // //     console.log(this);
// // // }
// // // greet()

// // let greet = () =>{
// //     console.log(this);
// // }
// // greet()

// //  in  normal function , function hositing(overriding) happens

// var wish =() => {
//     console.log('gm');
    
// }

// wish() 
// var wish =() => {
//     console.log('gn');
    
// }

// wish()

// IN arrow fucntion (fucntion hoisting) is resolved


// Swapping without third variable 

// var a = 10 
// var b = 20 

// a = a + b // 10 + 20 = 30
// b = a - b // 30 - 20 = 10 
// a = a - b // 30 - 10 = 20

// console.log(`Value of a : ${a}`);
// console.log(`Value of b : ${b}`);


// Swapping without third variable  using array destructuing 

// var a = 10;
// var b = 20 ;
// [a, b]  = [b, a];

// console.log(` Enter Value of a : ${a}`);
// console.log(` Enter Value of b : ${b}`);

// Create a new array by adding +1 for every price value 

let prices = [98, 100, 298, 999]

let new_prices = [] 
let Index = 0;

//Using while loop
while(Index <= prices.length - 1){
    new_prices.push(prices[Index] + 1)
    Index++;
}

console.log(new_prices);

// Using forof

for(let price of prices){
    new_prices.push(price + 1)
}

console.log(new_prices);

