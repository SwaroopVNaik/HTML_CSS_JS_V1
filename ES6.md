# ⚡ ES6 Quick Revision Cheat Sheet (2-Minute Recall)

---

## 1) Variables (let, const)
- let → block scope, can be reassigned  
- const → block scope, cannot be reassigned   

---

## 2) String / Template Literals (${})
```js
`Hello ${name}`
```
- used for dynamic strings 
- Avoid Using + 

## 3) Arrow Function (() => {})

```js
const add = (a, b) => a + b;
```
- short syntax
- no this binding issue 

## 4) Class 

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

## 5) Loops

- for of -> iterate Array (Values)

```js
for (let val of arr) {}
```

- for in -> iterate Objects (keys)

```js
for (let key in obj) {}
```

## 6) Array Methods 

```js 
arr.forEach(() => {})
arr.map(() => {})
arr.filter(() => {})
arr.reduce(() => {})
arr.find(() => {})
```
- map() → new array (modify)
- filter() → condition match
- reduce() → single value (sum)
- find() → first match
- forEach() → loop only (no return)

## 7) Spread Operator 

- Expands elements of an array/object into individual values

```js 
[...arr]
{...obj}
```

## 8) Rest Operator(...)

- Collects multiple values into a single array

```js
function fn(...args) {}
```

## 9) Destructing (Object, Array)

- Array 
```js
const [a, b] = arr;
```

- Object
```js
const {name} = obj;
```

## 10) Import / Export 

```js 
export default fn;
import fn from './file';
```

## 12) Asynchronous JavaScript

- Callback : A function passed into another function to run later
- Promise : An object representing a future result (success or failure)
- async/await : A cleaner way to handle asynchronous code using Promises

```js
async function run() {
  await fetchData();
}
```

## 13) Sets
- A collection that stores only unique values (no duplicates)
```js 
const s = new Set([1,2,2,3]);
```