// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); //we use this t o refer to current context
//         console.log(this); //this will print current context
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); //this will print current context, in this case empty as we are in node environment
//                     //if you print this in browser it wil show window object as it is global object... 



// function chai(){
//     let username = "hitesh"
//     console.log(this);  //in function this has different values related to function
//     console.log(this.username); //so we cant use 'this' the way we used it in the object
// }
// chai()



//while in arrow function this has other job
//in arrow function this can be used
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);  
//     console.log(this.username);   
//     console.log(username);
// }
// chai()





//basic arrow function syntax
//expicit return
const addTwo1 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo1(3,4));


// implisit return syntax
const addTwo2 = (num1, num2) =>  num1 + num2
console.log(addTwo2(3,4));

//curly braces use kiya toh return use karna hoga
const addTwo3 = (num1, num2) =>  (num1 + num2)
console.log(addTwo3(3,4));

//how to return object
const retObj = () => ({name: 'Nirmal'})
console.log(retObj());