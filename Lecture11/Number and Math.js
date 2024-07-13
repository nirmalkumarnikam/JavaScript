const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));  //till 4 decimal places

const otherNumber1 = 23.8966
const otherNumber2 = 123.8966
const otherNumber3 = 1234.8966

// console.log(otherNumber1.toPrecision(3));  //round off value till 3 digits
// console.log(otherNumber2.toPrecision(3));  //round off value till 3 digits
// console.log(otherNumber3.toPrecision(3));  //round off value till 3 digits'

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));


/***********************MATHS************************** */

// console.log(Math);  //math is object in Js which has many propeties.

const val = -4.3

// console.log(`absolute val = ${Math.abs(val)}`);
// console.log(`roundoff val = ${Math.round(val)}`);
// console.log(`Ceil val = ${Math.ceil(val)}`);
// console.log(`Floor val = ${Math.floor(val)}`);
// console.log(`max val of arr = ${Math.max(1,2,3,4,5)}`);
// console.log(`min val of arr = ${Math.min(1,2,3,4,5)}`);

console.log(Math.random());         //this will give random value greater than or equal to 0 and less than 1
console.log((Math.random()*10)+1);  //multiply divide add subtract to get required random value

console.log(`Output of Rolling Dice = ${Math.floor(Math.random() * 6) + 1}`);  //how to use random as dice

