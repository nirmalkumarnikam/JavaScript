// //singleton: when we declare from literal, singleton is not made
// //object.create

// //object literals
const JsUser = {
    //key: value
    name: "Hitesh",
     "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// //in arrays we cannot define keys we can define only values
// //in objects we can define key as well as vaue

// // accessing from obj
// console.log(JsUser.email) //works but not recomended as we cannot access key defined as string
// console.log(JsUser["email"]) 

// // console.log(JsUser.full name])    //will not work
// console.log(JsUser["full name"])    //this way we can access keys defined as string
// console.log(JsUser[mySym]) 

//change values
JsUser.email = "Nirmal@gmail.com"
console.log(JsUser["email"]);
Object.freeze(JsUser) //dont want to change any value in future
//now
JsUser.email = "panda@poo.com"
console.log(JsUser["email"]); //email will not change to panda




//using symbol in object:
//synax 
    
    const mySym = Symbol("key1");

    const usingSym = {
        [mySym]: "myKey1",
        nave: "Nirmal"
    };

    // console.log(usingSym[mySym]); // This will log "myKey1"
    // console.log(typeof mySym);

//initializing function as variable of object
usingSym.greeting = function(){
    console.log("Ram Ram Bhai Sareyane!!");
}

console.log(usingSym.greeting());
console.log(usingSym.greeting);//this will give funcction return back

//how to refer different attributes of object in function of that object
//use of `this`
usingSym.greetingTwo = function(){
    console.log(`My name according to class is ${this.nave}`);
}
console.log(usingSym.greetingTwo());


