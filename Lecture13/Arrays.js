// read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// shallow copy deep copy

const myArr1 = [0,1,2,3,4,5, true, "Nirmal"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[3]);
// console.log(myArr2);
myArr1.push(6)
myArr1.push(7)
myArr1.pop(); myArr1.shift();
myArr1.unshift(9) //adds 9 at start of array, so other values are shifted, computer pe lode ata hai

// console.log(myArr1.includes(3)); //true or false
// console.log(myArr1.indexOf(3)); 
// console.log(myArr1.indexOf(188)); 

// console.log(myArr1);

const newArr = myArr1.join() //converts to string
// console.log(newArr);
// console.log(typeof newArr);


//slice vs splice
// console.log("A ", myArr1);

// const myn1 = myArr1.slice(1,3) //does not manipulate original array
// console.log("B ", myArr1);
// console.log(myn1);

// const myn2 = myArr1.splice(1,3) //does not manipulate original array
// console.log("C ", myArr1);
// console.log(myn2);





const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //pushes array in array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  



const allHeros = marvel_heros.concat(dc_heros) //pushes elemrnts of one array to other, returns new array
console.log(allHeros);



// const all_new_heros = [...marvel_heros, ...dc_heros] //makes new array using elements of other array
// // console.log(all_new_heros);



//dealing with multi dimentional array
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)         //flatens array, infinity represents depth which can be 1,2,3,4
// console.log(real_another_array);


  
// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))    //convert string to array
// console.log(Array.from({name: "hitesh"})) // interesting, not able to convert it as we have not specified that we are making array from key or rfom vlaues




// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));  //converts variable to array