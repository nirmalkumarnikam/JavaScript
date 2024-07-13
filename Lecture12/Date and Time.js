console.log("hello read MDN Doc");

//read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());// MONTH WILL START FROM 0


// console.log(typeof myDate );


// how to some date
let myCreatedDate = new Date(2023, 0,23)
// console.log(myCreatedDate.toDateString());  //month starts with 0 

// how to some date and time 
let myCreatedDateTime = new Date(2023, 0,23, 5, 30,45)
// console.log(myCreatedDateTime.toLocaleString());  


// dd mm yyyy Format
let yyyymmdd = new Date("2023-01-23")
// console.log(`Date in yyyymmdd format: ${yyyymmdd.toLocaleString()}`)

let mmddyyyy = new Date("01-14-2023")
// console.log(`Date in MMDDYYYY format: ${mmddyyyy.toLocaleString()}`)

//how to compare two time instances
let time = Date.now()  //gives date and time in milisec format with reference to 1 jan 1970
console.log(time) 

let dateToCompare = myCreatedDate.getTime()// this will give time in milosec format with reference to 1 jan 1970
console.log(dateToCompare)                 //so we can compare dates

//you can convert milisec to sec by dividing it by 1000 anf then roundoff it




//we can define format using tolocalstring() operator
myDate.toLocaleDateString('default', {
    weekday:"long",
    //here we can define many attributes
})

