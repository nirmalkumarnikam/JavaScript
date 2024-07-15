var c = 300  //var does not flollow scope 
let a = 300
if (true) {
    let a = 10
    const b = 20
    c = 30
    console.log("INNER a: ", a);
    
}
console.log("Outer a: ", a);
console.log("value of var c: ",c);





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);








//function can be called before declaring
console.log(addone(5))
function addone(num){
    return num + 1
}


//this is expression
// addTwo(55)           //expression cannot be called before declaring
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));