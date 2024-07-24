// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //use of filters
// const newNums = myNums.filter((num) => num > 4)
// // console.log(newNums);
// //one more syntax of filter
// const newNums2 = myNums.filter((num) => {
//    return num > 4
// })
// // console.log(newNums2);


// // using for each to do same thing
// const newNums4 = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums4.push(num)
//     }
// })
// // console.log(newNums4);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks);

//   //whenever we are compairing in scope we have to use return statement
//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);







// // use of map
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums1 = myNumers.map( (num) =>  num + 10)
// console.log(newNums1);
// const newNums2 = myNumers.map( (num) => { return num + 10})
// console.log(newNums2);



// //chaining... using multiple methods in same instance
// const newNums3 = myNumers
//                         .map((num) => num * 10 )
//                         .map( (num) => num + 1)
//                         .filter((num) => num >= 40)

// console.log(newNums3);









//Reduce
const myNums = [1, 2, 3]

// we can use it to add array
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)// '0' is accumulator value initialized by user, cuurvalue is element in array
console.log(myTotal);

//reduce as arrow function
const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal2);


//use of reduce in real world
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);