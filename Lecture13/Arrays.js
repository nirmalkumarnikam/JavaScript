// read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// shallow copy deep copy

const myArr1 = [0,1,2,3,4,5, true, "Nirmal"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[3]);
// console.log(myArr2);
myArr1.push(6)
myArr1.push(7)
myArr1.pop(); myArr1.shift();
myArr1.unshift(9) //adds 9 at start of array, so other values are shifted, computer pe lode ata hai

// console.log(myArr1.includes(3)); //true or false
// console.log(myArr1.indexOf(3)); 
// console.log(myArr1.indexOf(188)); 

// console.log(myArr1);

const newArr = myArr1.join() //converts to string
// console.log(newArr);
// console.log(typeof newArr);


//slice vs splice
console.log("A ", myArr1);

const myn1 = myArr1.slice(1,3) //does not manipulate original array
console.log("B ", myArr1);
console.log(myn1);

const myn2 = myArr1.splice(1,3) //does not manipulate original array
console.log("C ", myArr1);
console.log(myn2);