//write your program 

//this means the same thing, other syntax
//function sum(a,b){
//     const result = a+b
//     return result
// }

const add = (a,b) => {
    //BUG (using - instead of +)
    return (a+b)
}

const subtract = (a,b) => {
    return (a-b)
}

const multiply = (a,b) => {
    return (a*b)
}

const divide = (a,b) => {
    return (a/b)
}

//manual testing
// console.log("The sum of the numbers is: ")
// console.log(sum(25,100))


//export the sum function so other files can access it
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
