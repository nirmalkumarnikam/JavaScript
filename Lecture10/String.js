const name = "Nirmal"
const repoCount = 50
console.log(name + repoCount + " value");  //bad Practice

console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`);  //string interpolation (recommended)

const gamename = new String('Kill_Monger')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase()); //does not change original value, changes are copied in stack
console.log(gamename.charAt(5));
console.log(gamename.indexOf('l'));


const SubString = gamename.substring(0,4)
console.log(SubString);
const negString = gamename.substring(-9,8) // considers -ve as 0
console.log(negString);

const newString = gamename.slice(-9, 8)  //we can work with -ve indexes
console.log(newString);


const newStingSpaces = "    Nirmal    "
console.log(newStingSpaces);        //with spaces
console.log(newStingSpaces.trim()); //without spaces


const url = "https://chatgpt.com/c/a2a23914-6984-4362-8d71-f7c75f21052e"

console.log(url.replace('https', 'Panda'));

console.log(url.includes('chat'));

console.log(url.split('/')); //divides the string on the basis of separator