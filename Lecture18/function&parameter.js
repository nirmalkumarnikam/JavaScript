function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName     //reference of function, type of address in heap
sayMyName()   //Execution of function






function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")  //check op for all five
addTwoNumbers(3,"a")
addTwoNumbers(3,null)
addTwoNumbers()




function addTwoNumbers(number1, number2){
    // let result = (number1 + number2);
    // return result;                      //this function returns value


    return number1+number2;
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);






//Different ways of passing values
    function loginUserMessage(username){
        return `${username} just logged in`
    }
    console.log(loginUserMessage("hitesh"))
    


    //if no value is passed
    function loginUserMessage(username){
        if(username === undefined){  //also "!username" can be used
            console.log("PLease enter a username");
            return
        }
        return `${username} just logged in`
    }


    //if no value is passed then sam is username
    function loginUserMessage(username = "sam"){
        if(!username){
            console.log("PLease enter a username");
            return
        }
        return `${username} just logged in`
    }
    
   
// console.log(loginUserMessage("hitesh"))





//use of rest operator'...', rest operator is used to convert elements to array

function calculateCartPrice(...num1){
    return num1   //array of 200,400,500,20000 will be returned
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// one more format 
function calculateCartPrice(val1, val2, ...num1){
    return num1  //val1 = 200, val2 = 400 and array of 500,20000 will be returned
}

console.log(calculateCartPrice(200, 400, 500, 2000))







//using object as parameter
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}. 
                    If we try to print element which is not present in array it will 
                    give ${anyobject.notPresent}`);
}

handleObject(user)  // If we try to print element which is not present in array it will give undefined

handleObject({
    username: "sam",   //one more way to pass obj
    prices: 399
})






//using array as parameter
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));