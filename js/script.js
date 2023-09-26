// --------------------------------------- Exercises 1
//Converting identifiers to Camel Case notation:

let someMonth
function theMonth(){}
let currentMonth
let summerMonth
let myLibraryFunction

// --------------------------------------- Exercises 2
//An example of a numeric literal expression: 26, 0.4
let age=26;

//An example of a string literal expression: 'Linda', 'Hello World!'
let name='Linda';

//An example of a Boolean literal expression: true, false
let isStudent=true;
//An example of a null literal expression: null
let pets = null;

// --------------------------------------- Exercises 3
//Two examples of complex / variable expressions.
let circle4 = 2 * Math.PI * 4;

// --------------------------------------- Exercises 4
//Declare (but do not assign) 9 variables for the following identifiers: 
//First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
//Use Camel Casing and Hungarian Notation when naming your identifiers.
let firstName, lastName, adress, city, state,zipCode;
let yourAge;
let strReferralSource, boolMayWeContactYou;

// --------------------------------------- Exercises 5
//Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
let firstName01 = 'Marta';
let yourAge01 = 29;
let boolMayWeContactYou01 = true;

let firstName02;
let yourAge02;
let boolMayWeContactYou02;
firstName02 = 'Marta';
yourAge02 = 29;
boolMayWeContactYou02 = true;

let firstName03 = 'Marta', yourAge03 = 29; boolMayWeContactYou03 = true;

// --------------------------------------- Exercises 6
//Create a variable.
//Add a number and a string and display the coerced result in the browser’s console window.
let strFirstName = 'Marta';
let numYourAge = 29;
console.log('Hello ' + strFirstName + ' Age: ' + numYourAge);

// --------------------------------------- Exercises 7
/*Create two variables.
For the first variable, add a Boolean and a string and display the coerced result.
For the second variable, add a number and a Boolean and display the coerced result.*/
let firstVariable = true + "String"; //if you add a Boolean and a string, the Boolean is coerced to a string
let secondVariable= 24 + false;  //If you add a number and a Boolean, the Boolean is coerced to a number
console.log('firstVariable ' , firstVariable);
console.log('secondVariable ' , secondVariable);

// --------------------------------------- Exercises 8


// --------------------------------------- Exercises 9


// --------------------------------------- Exercises 10


// --------------------------------------- Exercises 3


// --------------------------------------- Exercises 3


// --------------------------------------- Exercises 3


// --------------------------------------- Exercises 3



// --------------------------------------- Exercises 3



// --------------------------------------- Exercises 3



// --------------------------------------- Exercises 3

//alert('Hello, World!')

/*
let milesDriven=prompt("How many miles did you drive?");
let galons=prompt("How many galons your fuel tank hold?");
let mpg = milesDriven / galons;
document.write(`Your car gets ${mpg.toFixed(2)} miles per galon`);

let score1
let score2
let score3
let total=0
let average

//get 3 scores from the user and add them to total

score1=prompt("Enter the score1")
total+=parseFloat(score1)

score2=prompt("Enter the score2")
total+=parseFloat(score2)

score3=prompt("Enter the score3")
total+=parseFloat(score3)

average=total/3

//display the result
document.write(`<h1>The test scores app</h1>`);
document.write(`<p>The first score is ${score1}</p>`);
document.write(`<p>The second score is ${score2}</p>`);
document.write(`<p>The third score is ${score3}</p>`);
document.write(`<p>The average is ${average}</p>`);


var x = 86

tempC()

document.write(`<h1>number is ${x}</h1>`);

function tempC(){
    document.write(`<h3>Inside of function begining with ${x}</h3>`)
    var x=50;
    x=(x-32)
    document.write(`<h3>Inside of function end with ${x}</h3>`)
}
*/