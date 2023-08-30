//Ex. 8
let firstName = "Hope" //add your first name
let lastName = "Avritch" //add your last name
const fullNameConcat = firstName + " " + lastName;//create your full name from the first two variables using concatenation 

const fullNameInterp = //create your full name from the first two variables using interpolation

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = 37//add your age
let faveFood = "mac n cheese"//add your favorite food
let faveColor = "green"//add your favorite color
let miniBio = `My name is ${firstName} ${lastName}. I am ${myAge} and I like ${faveFood} and ${faveColor}`//use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio)