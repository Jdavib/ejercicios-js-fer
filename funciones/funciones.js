

// import {addTwoNumbers} from './mat-helpers.js';
import {add} from './mat-helpers.js';
import {substract} from './mat-helpers.js';
import {times} from './mat-helpers.js';
import {divide} from './mat-helpers.js';

// import {
//     add,
//     substract,
//     times,
//     divide,
// } from './mat-helpers.js';

let num1 = 10;
let num2 = 20;

let total1 = add (num1, num2);
let total2 = substract (num1, num2);
let total3 = times (num1, num2);
let total4 = divide (num1, num2);

// let total1 = addTwoNumbers (num1, num2);
// let total3 = addTwoNumbers (num1, num2);
// let total4 = addTwoNumbers (num1, num2);
// let total2 = addTwoNumbers (num1, num2);

console.log('add:', total1);
console.log('substract:', total2);
console.log('times:', total3);
console.log('divide:', total4);