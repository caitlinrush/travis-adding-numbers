//write your program 

//this means the same thing, other syntax
//function sum(a,b){
//     const result = a+b
//     return result
// }

const sum = (a,b) => {
    //BUG (using - instead of +)
    const result = a + b
    return result
}

const subtract = (a,b) => {
    //BUG (using - instead of +)
    const result = a - b
    return result
}

const multiply = (a,b) => {
    //BUG (using - instead of +)
    const result = a * b
    return result
}

const divide = (a,b) => {
    //BUG (using - instead of +)
    const result = a / b
    return result
}

//manual testing
// console.log("The sum of the numbers is: ")
// console.log(sum(25,100))


//export the sum function so other files can access it
module.exports = sum, subtract, multiply, divide

