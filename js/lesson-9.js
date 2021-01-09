"use strict";

console.log('arr' + " - object");
console.log(4 + "5");

let incr = 10,
    decr = 10;

// console.log(incr++); // 10
// console.log(decr--); // 10

console.log(++incr); // 11
console.log(--decr); // 9

console.log(5 % 2); // 1
console.log(2 * 4 === 8); // true
console.log(2 * 4 === '8'); // false
console.log(2 + (2 * 2) !== 8); // true

const isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed); // true - if both is true

const isChecked2 = true,
    isClosed2 = false;

console.log(isChecked2 || isClosed2); // true - if one is true

