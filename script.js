"use strict";


marinateChicken(chicken);
grillChicken(chicken);
// let's practice naming functions
// write like 5-10 function names based on tasks that happen at work.  OH like let's break down a Mess Hall Dinner menu by functions.  Like, a Mess Hall Dinner program
function marinateChicken(meat) {
    let lime = getLimeJuice();
    let herb = driedOregano();
    let fat = blendOil();

    return lime + herb + fat;
}

function getLimeJuice() {
    
}

function driedOregano() {

}

function blendOil() {
    
}

function grillChicken(meat) {
    let heat = fireGrill();
    let tools = gatherHardware();
    let cook = work();
    
}
// let sayHi = function () {
//     alert("Bombastic");
// };

// sayHi();


// function pow(x, n) {
//     return Math.pow(x, n)
// }

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 1));

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(min(2,1))
// console.log(min(2,1.3))
// console.log(min(2,5))



// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } 
//         // ...
//         return confirm('Did parents allow you?');
    
// }

// let test = checkAge(21);
// console.log(test);
// console.log(checkAge());


// function showMessage(text) {
//     // ...

//     if (text === undefined) { // if the parameter is missing
//         text = 'empty message';
//     }

//     alert(text);
// }

// showMessage("hi"); // empty message


// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert(result); // 3


// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     alert(i);
//     i++;
// }

// let m = 1;
// while (m < 4) {
//     console.log("holler!" + m);
//     m++;
// }

// outer: for (let i = 0; i < 2; i++) {

//     for (let j = 0; j < 2; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');

//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)

//         // do something with the value...
//         alert(`${i},${j}`);
//     }
// }




// let userInput = prompt("what's your name?", "Name Goes Here")
// alert(userInput);


// let ourPlanet = "Earth";
// let currentUserName = "John";



// let admin;
// let name = "John";

// admin = name;

// alert(admin);
// the above is the use strict task from javascript.info
// alert("success")

// let sum = (a, b) => a * b;

// console.log('sum: ' + sum(2, 14));
// // /* This arrow function is a shorter form of:

// let sum1 = function(a, b) {
//     return a - b;
// };
// console.log('sum1: ' + sum1(23, 4));
// */

// alert(sum(13, 12)); // 3

// let double = n => n * 2;
// // roughly the same as: let double = function(n) { return n * 2 }

// alert(double(23)); // 46


// let sayHi = () => alert("Hello!");

// alert("Literally what they tell you not to do.")
// alert("just a mess!")

// the above are Tasks from javascript.info

// sayHi();
