# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

This code will have a reference error 
The problem is that currentStatus is created with let inside the if and else parts.
When a variable is made with let, it only exists inside those curly braces {}.
So when the code tries to console.log(currentStatus) after the if block ends it will throw a Reference Error.

### Question 2

The code logs "Micheal Jordan" because Objects in Javascript are passed down by reference. 

when the code reads:

bestPlayer.name = "Michael Jordan";

Since MyGoat points to a shared Object, theGoat.name--> turns to "Micheal Jordan"

### Question 3

The code will log:

"Paul is the hardest working person in the room."

then will log:

"Laisha is also the hardest working person in the room."

This is because there are two different variables named "theHustler" in two completely separated scopes. Paul is a local variable. Laisha is stored as a global variable.

### Question 4

Rest Parameters are used to store an unlimited values inside of an array as you choose.
To use rest parameters you can use the ... --> three periods before your parameter name 

Sum Example:
```ts
const sum = (...numbers) => {
let total = 0
for(const num of numbers){
    total =+ num;
}
return total;
}
```

### Question 5

Scope:
Manages what variables can be accessed, by using Scopes. A variable can only be used in the scope in which it was defined in. 

You can of scope like a coach who calls in the players on a basketball court, the coach manages which players can play on the court at different cycles during the game. But only the coach determines on who is given player access to the court or the bench.

```ts
let coach = "Gabriel";

const court = () => {
  let player = "Jesus";
  console.log(player); // works because inside local scope
};

court();

console.log(coach) // works because coach is defined in the global scope and is also called underneath but not inside of the court object.
console.log(player) // doesn't work because it is trying to call player which can only be called inside of the local scope.
```
### Question 6

Modules:

Separated code that is stored inside of different files that can allow access into various parts of a project. A individual modules focuses on just one real purpose.
modules are useful because it can help keep your code more concise which makes it easier to read for working on projects with a group. 
This is how you export modules:
```js
const add = (x,y) => x + y;
module.exports = add;
```
This is how you import modules;
```js
const add = require("./add");
```
### Question 7

The Value of `fruits` is going to show:

['apple', 'banana', 'cherry', 'date']

The Value of `fruitMinusOne` is going to show:

['apple', 'banana', 'cherry']

It is necessary to make a copy of the array because we do not want to change the original array we just want to return a clone of that original array altered with changes to the copied array. 

We want to avoid mutating the input array because of the method used `.pop()`
mutates which we should not do to the input array, and ultimately why we create a copy to make this a pure function.

### Question 8

I would use an object to store the single item in a cart because that is the most organized method to store data type.

I would use and array of objects that store each item inside of an array "shoppingCart", this is because its easier to organize, add, or update.

```js
//Array --> shoppingCart is storing all of the objects (items)
const shoppingCart = [
    //First Item
  {
    id: 1,
    name: "Hat",
    price: 12.99,
    quantity: 2
  },
  //Second Item
  {
    id: 2,
    name: "Coat",
    price: 49.99,
    quantity: 1
  },
  //Third Item
  {
    id: 3,
    name: "Glasses",
    price: 7.99,
    quantity: 5
  }
];

// Add up the total cost of all items in the cart
const total = shoppingCart.reduce((sum, item) => {
    
// Adds price times quantity to the running total
  return sum + item.price * item.quantity;
}, 0);

console.log("Total:",total.toFixed(2)); // you use foFixed to help the format of the number to be 
```
