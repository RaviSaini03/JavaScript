const num = 450;
// console.log(num);

const score = new Number(300);
// console.log(score);
// console.log(score.toFixed(3));

const score1 = 549.453;
// console.log(score1.toPrecision(3));
// console.log(score1.toPrecision(4));
// console.log(score1.toPrecision(2));
// you should keep the precision value more then the terms before decimal

const score2 = 1000000000;
//sometime counting zero is disturbing to avoid this use this:-
// console.log(score2.toLocaleString('en-In')); // for India
// console.log(score2.toLocaleString()); // default

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5))
// console.log(Math.round(4.6));

// Their are are many methods or inBuilt functions in Math
// console.log(Math.random()); // Gives a random value between 0 and 1
// console.log(Math.round((Math.random()*100) + 1));
const min = 40;
const max = 80;
console.log(Math.round(Math.random() * (max - min + 1)) + min);