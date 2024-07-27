"use strict";

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

outer: for (let i = 0; i < 2; i++) {

    for (let j = 0; j < 2; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
        alert(`${i},${j}`);
    }
}




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

// /* This arrow function is a shorter form of:

// let sum = function(a, b) {
//   return a + b;
// };
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
