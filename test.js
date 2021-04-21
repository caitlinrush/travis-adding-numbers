//write your automated test cases

//write automated test to check that the sum function works as expected

//it needs access to the sum function
//get it from the app.js file
//import the function from app.js
const {add, multiply, divide, subtract} = require("./app")




//using that function, wirite automated test
//jest 
describe("Adding two numbers", () => {
    //jest
    it("Should return the sum", () => {
        //jest - i expect the sum of 10 and 5 to be ____
        //expect and tobe also come from jest
        //sum(..) is from app.js
        expect(add(10,5)).toBe(15)
    })
})

describe("Subtracting two numbers", () => {
    it("Should retrun the difference", () => {
        expect(subtract(10,5)).toBe(5)
    })
})

describe("Multiplying two numbers", () => {
    it("Should return the product", () => {
        expect(multiply(10,5)).toBe(50)
    })
})

describe("Diving two numbers", () => {
    it("Should return the quotient", () => {
        expect(divide(10,5)).toBe(2)
    })
})