//singleton object
const tinderUser1 = new Object()
console.log(tinderUser1);
//non singleton obj
const tinderUser2 = {}
console.log(tinderUser2 );


// add element in object
tinderUser2.id ="123abx"
tinderUser2.name ="Nirmal"
tinderUser2.isLoggedIn = false

// console.log(tinderUser2);





//nesting of objects (objects in object)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //how to access nested element






//methods of merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

const obj3 = {obj1, obj2} //this will add obj as we add in array
console.log(obj3)

// 1)
// const obj4 = Object.assign(obj1, obj2)    //this will merge objects
                                             // here obj1 2 is merged with obj 1 and then assigned to obj4.. 
                                             // therefore obj 1 == obj4

// 2)Object.assign                                             
const obj4 = Object.assign({},obj1, obj2, obj5)  //recomended to use empty obj '{}'
console.log(obj4);                               //we are merging obj 1 2 3 with empty obj then assigning with obj 4
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


// 3) most recommended
const obj6 = {...obj1,...obj2,...obj5}
console.log(obj6);




//array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email     //accessing first object and its elements



// //some imp methods to get things from obj
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));