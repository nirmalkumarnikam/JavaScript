// Immediately Invoked Function Expressions (IIFE)

// why?
// sometime we dont want global variable to make problem in our function
//sometimes we face problem because of pollution of variables from global scope. to remove that we use iife
//iife is functn which is immedietly executed 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()();  -> (function definition)(execution call);
            //these function are semicolon sensitive as these functions dont know where to stop context... u use semicolon after end of function


// how to pass value
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

