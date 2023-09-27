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
/*Is the following string literal valid? If not, how would you fix it?

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
console.log(someString)

The quote in "I'm" will finish the string so we have to put \ befor ', then it will take the whole sentence
*/

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString);

// --------------------------------------- Exercises 9
/*
Create a variable that produces a null value in the console window.
Then, create a variable that produces an undefined value in the console window.
*/
const a = null;
console.log(a);
let ary='';
console.log(ary[0]);

// --------------------------------------- Exercises 10
//Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
console.log(typeof("Hello, World!"));//string
console.log(typeof(26));//number
console.log(typeof(true));//Boolean
console.log(typeof(document.getElementsByTagName('body')));//object
let myVar;
console.log(typeof(myVar));//undefined

// --------------------------------------- Exercises 11
/*
Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

Hello Zak Ruvalcaba, welcome to the JavaScript class!

Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
*/

window.alert('Hello '+ 'Lili' +", welcome to the JavaScript class! ");

// --------------------------------------- Exercises 12
//Declare a variable called name and set it equal to your name.
//Substitute your name in the previous alert string with the variable instead.

const myName='Lili';
window.alert('Hello '+ myName +", welcome to the JavaScript class! ");

// --------------------------------------- Exercises 13
//Declare a variable called course and set it equal to “JavaScript”.
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
const course='JavaScript';
window.alert(`Hello ${myName}, welcome to the ${course} class! `);

// --------------------------------------- Exercises 14
/*
Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

Hello Zak Ruvalcaba.
Welcome to the JavaScript class!
*/
window.alert(`Hello ${myName}.\nWelcome to the ${course} class! `);

// --------------------------------------- Exercises 15
//Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
let userName=prompt("What is your name? ");
if (userName.length<2){
    alert("You fogot to enter your name");
}
else {
    window.alert(`Hello ${userName}.\nWelcome to the ${course} class! `);
}

// --------------------------------------- Exercises 16
//Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
let className=prompt("What class are you taken? ");
if (className.length<2){
    alert("You fogot to enter your class");
}
else {
    window.alert(`Hello ${userName}.\nWelcome to the ${className} class! `);
}

// --------------------------------------- Exercises 17
/*
Declare a variable called x and assign it a value of 10.
Declare a variable called y and assign it a value of 20.
Display the sum of those two numbers in the console window.
*/
let x=10;
let y=20;
console.log(`The sum of 10 and 20 is ${x+y}`);

// --------------------------------------- Exercises 18
/*
Declare a variable called x and assign it a value of 20.
Add and assign 20 to that variable and display the result in the console window.
The result should be 40.
*/
x=20;
x+=20;
console.log(`The result of addition is ${x}`);

// --------------------------------------- Exercises 19
/*
Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window.
The result should be 100.
*/
x=20;
x*=5;
console.log(`The result of multiplication is ${x}`);

// --------------------------------------- Exercises 20
/*
Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
Divide and assign 1 to that variable and display the result in the console window.
The result should be 2. If you got 6.66 try again.*/
x=20%3;
x/=1;
console.log(`The result of dividing is ${x}`);

// --------------------------------------- Exercises 21
//Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
let ar=[1, 2, 3 ];
console.log(ar.length===3 || ar[0]===0);

// --------------------------------------- Exercises 22
//Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. 
//The application cannot use the same operators used in the previous application.
console.log(ar.length>3 && ar[0]<1);