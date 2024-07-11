// stack (Primitive),  Heap (Non-Primitive)

// when we use element in stack we get copy of it

// when we get memory in heap we get reference of it


let myName = "Nirmalkumar"

let anothername = myName
anothername = "anilrao"

console.log(myName);
console.log(anothername);


let userOne={
    email: "nirmal@gmail.com",
    upi: "user@sbi"
}

console.log(userOne.email);

let userTwo = userOne

userTwo.email = "poo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);