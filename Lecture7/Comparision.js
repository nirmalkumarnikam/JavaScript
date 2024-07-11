// console.log("2" > 1)    //here 2 is converted to integer by js  
// console.log("02" > 1) 


// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)   


// // Note: reason is that equality check == and comparisions > < >= <= work differently
// //       Comparisions convert null to a number, treating it as 0.
// //       Thats why (3) null >= 0 is true and null > 0 is false


// console.log(undefined > 0)  //always false
// console.log(undefined == 0) //always false
// console.log(undefined >= 0) //always false


// Strict Check : ===

console.log("2" == 2);  // only checks value
console.log("2" === 2); //strict check checks with dataType too