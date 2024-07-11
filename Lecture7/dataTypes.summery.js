// There are two types of data Primitive and Non-Primitive
// Difference is on the basis of how the data is stored in memory and how we access it

// Primitive:

//  7 types: String, Number, Boolean, null , undefined, Symbol , BigInt

//           null (empty)
//           undefined (varianle is declared but value is not initialized)
//           Symbol (to make any value unique)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail


const id = Symbol('123')
const newId = Symbol('123')

console.log(id === newId); //no both are different 

const bigNumber = 12345678912345n
console.log(typeof bigNumber);



//Reference (Non-Primitive): they have data type as object
// In JavaScript, non-primitive data types are also known as reference types. 
// They include:
// Objects: An object is a collection of key-value pairs.
// Arrays: An array is an ordered collection of values.
// Functions: A function is a block of code that can be called to perform a specific task.
// These data types are considered non-primitive because they are stored and accessed by 
// reference, unlike primitive types which are stored and accessed directly by their values.

// 3 types: Array, Objects, Functions  
 
const name = ["Nirmal", "Anil", "yug", "Panda"];
console.log(typeof name);


let myObj = {
    name:"Poo",
    weight: 100,
    designation: "Dragon Warrior"
}
console.log(typeof myObj);


const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);

// Read:  https://262.ecma-international.org/5.1/#sec-11.4.3


/* 
JavaScript is a dynamically typed language, which means that data types of variables 
are determined by the value they hold at runtime and can change throughout the program 
as we assign different values to them.
*/