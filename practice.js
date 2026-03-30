// 1) let = varaible that can change 
// 2) const => variable that cannot change

// 3) ${ } template Literals / Object Literals 
//  Used to insert a varaiable inside the string

let name = "Swaroop";
console.log(`Hello ${name}`);

// 4) () => { } (Arrow function) = short way to write function

// Advantage of Arrow Function 
// Concise / Shorter Code
// Implicit  return
// (this) keyword return empty object { }
// In arrow fucntion (fucntion hoisting) is resolved
// Arrow function is allternative way to define function

// Arrow functions can be overridden if declared with let

// Example => OverRide 

let sayHi = () => {
  console.log("Hello");
};

sayHi = () => {
  console.log("Hi again");
};

sayHi();

// Arrow functions cannot be overridden if declared with const
// Example => (CANNOT override) 

const sayHi_1 = () => {
  console.log("Hello");
};

// sayHi_1 = () => {
//   console.log("Hi again");
// };

// class => Blueprint to create objects

// Array methods in javascript

// what is an array => 

// An array is a linear data structure, the stores the value in contigioeus memeory locations and can be accessed through index

// forEach() => ES5 
// map() = ES5 
// filter = ES5 
// reduce = ES5 
// find = ES6 

// forEach () => loop's through array does not return anything

let arr = [1, 2, 3, 4];

arr.forEach(x => console.log(x));

//  Map() => Tranforms Each element in array => returns new array 

let res = arr.map(x => x * 2);

console.log(res); // Returns new array using map by tanforming each element in the array 

// Filter() => Selects the elements in the array based on the condition

let res_V1 = arr.filter(x => x > 2);

console.log(res_V1);

// reduce() => is used to combine all elements of an array into a single value using an accumulator.

// acc => accumalated value 
// x => current element
let sum = arr.reduce((acc, x) => acc + x, 0);

console.log(sum);

// find()  => returns the first element that matches in the array 

let arr_2 = [1, 2, 3, 4]

let res_2 = arr.find(num => num === 3); // when function has only one return we can use implicit function

console.log(res_2);

// before find 

let find = (value) => {
  let numbers = [11, 7, 8, 99, 101]
  let num = undefined

  for(let k = 0; k<=numbers.length-1; k++){
    if(numbers[k] === value){
    num = numbers[k];
    }
    }
    return num
  }


let num = find(99)
console.log(num);


//       find() V/s Filter
// find()	                  filter()
// Returns ONE value   	    Returns ARRAY
// First match only	        All matches
// Stops early	Checks      full array

// Object destructring 
// adavantages 
// 1) cleaner and shorter code 
// 2) js new features ES6 
// 3) well with API reponses 
// 4) help avoid repeating object refernces
// 5) if we want to read to read object properties like variables we have to go with object distructring 

let emp = {
  eid : 101, 
  ename : "swaroop",
  esal : 45000
}

// without object- destructring 
// console.log(emp.eid);
// console.log(emp.ename);
// console.log(emp.esal);

// using object destructing (impporves readablity of the code) (reading object proerties like variables)

let {eid, ename, esal} = emp
console.log(esal);