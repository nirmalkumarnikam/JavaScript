console.log("Learning Variables")
const accountId = 564646
let accountEmail = "nirmalkumarnikam.official@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;  

// accountId = 2  //not allowed

accountEmail = "hello@email.com"
accountPass = "11"
accountCity = "Pandharpur"

console.table([accountId, accountEmail,  accountPass, accountCity, accountState])

/*
Theory:
    const : cannot be changed, to declare it 'const' keyword must be used

    var & let: 
        it does not work on the basis of scope
        
        we do not use it as it has scope problem in var scope is not 
    defined, it created problem as when any new programer used to write 
    new code and in that code he used to define variable with previously 
    used name it used to change iteration of that variable in every iteration 
    of that code

        so let was introduced and we donot use var because of issue in block scope and functional scope.

    'accountCity = "Jaipur"' : we can vatiable without defining its type
                               But this is not recommended 

    accountState = initializing empty variable.
                   if the variable is not given any value then its vlaue is 'undefined'
*/
