//! string concatenation, slice, case changing
// var names = prompt ("What is your name?");
// var names1 = names.slice(0,1);
// var names2 = names.slice(1,names.length)
// names1 = names1.toUpperCase();
// names2 = names2.toLowerCase();
// alert ("Hello there, " + names1 + names2 + "!" + " Welcome to Our Channel.");


//! character count
// var message = prompt ("Write about yourself -");
// var messageSized = message.slice(0,120);
// var characterCount = message.length;
// alert ("You have written " + characterCount + " characters & you have " + (144 - characterCount) + " characters remaining.");
// alert (messageSized);

//! arithmetic oper...
// var petAge = prompt("What is your Pet's Age?");
// var humanAge = ((petAge - 2) * 4) + 21;
// alert("If your pet's age is " + petAge + " years, then your age should be " + humanAge + " years.");

// var x = 6;
// var y = 8;
// x -= y;
// // x--;
// alert(x);


//! function practice with params.....
// function getMilk(money) {

//     var milkPrice = 70;
//     var boughtMilk = money / milkPrice;

//     console.log("Take " + money + " taka.");
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     console.log("I could buy " + Math.floor(boughtMilk) + " ltr  milk, Master.");

// }


//! Function return
// function firstFunction() {
//     var x = 5 * 2;
//     var y = 56 / 8;
//     return ("alaN" + x + y)
// }

// var x = "hello, " + firstFunction();
// console.log(x);

//! BMI Calculator function
// function bmiCalc(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);

// }

// var weight = prompt("What is your weight? (In KG)");
// var height = prompt("What is your height? (In Meters)");


// var bmi = bmiCalc(weight, height);
// alert("Your BMI is - " + bmi + ".");


//! Another Calculator
// function xyCalc(x, y) {
//     var calc = (x ** 3) + (8 * x * y) + (y ** 2);
//     return calc;
// }

// var x = prompt("Insert the value of x -");
// var y = prompt("Insert the value of y -");
// var calc = xyCalc(x, y);

// alert("The Solution is : " + calc);

//! Random Number Generator and if else practice

// var r = Math.random();
// r = Math.floor(r * 100) + 1;

// if (r >= 60) {
//     alert ("Result A : " + r)
// } else {
//     alert ("Result B : " + r)
// }


//! more practice on if else (control flow) 
//! 1-

// var age = prompt("What is your age?");

// if (age >= 25) {
//     alert("Congrats! You can participate.");
// } 
// if (age > 14 && age < 25) {
//     alert("Hmm! You have to apply first in order to participate.");
// }

// if (age <= 14) {
//     alert("Sorry! You can not participate.");
// }

//! 2-

// var year = prompt("Which year you wanna calculate?");

// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "It is a leap year."
//             } else {
//                 return "It is not a leap year."
//             }
//         } else {
//             return "It is a leap year."
//         }
//     } else {
//         return "It is not a leap year."
//     }
// }
// var leapYearResult = isLeap(year);
// alert(leapYearResult);

//! JS Arrays

// var guestList = ['john', "abraham", "nick", "mick", "michael", "musa", "robin", "pasha", "roman"];

// var guestName = prompt("What is your name please?");

// function guestApproval(guestName) {
//     if (guestList.includes(guestName)) {
//         return "Welcome! Thanks a lot for coming."
//     } else {
//         return "Sorry! You can be invited next time."
//     }
// }

// var entryPermit = guestApproval(guestName);
// alert (entryPermit);

//! FizzBuzz Test

// var output = [];
// function fizzBuzz() {

//    // //* 1st way--
//    for (var n = 1; n <= 100; n++) {
//       if (n % 15 === 0) {
//          output.push("FizzBuzz!");
//          console.log(output);
//       } else {
//          if (n % 3 === 0) {
//             output.push("Fizz!");
//             console.log(output);
//          } else if (n % 5 === 0) {
//             output.push("Buzz!");
//             console.log(output);
//          } else {
//             output.push(n);
//             console.log(output);
//          }
//       }

//    }
// }


// //* 2nd way--

//    while (n < 101) {
//       output.push(n);
//       if ((n) % 15 === 0) {
//          output[n - 1] = "FizzBuzz!";
//          console.log(output);
//       } else {
//          if ((n) % 3 === 0) {
//             output[n - 1] = "Fizz!";
//             console.log(output);
//          } else if ((n) % 5 === 0) {
//             output[n - 1] = "Buzz!";
//             console.log(output);
//          } else {
//             console.log(output);
//          }
//       }
//       n++;
//    }
// }

//! Random item selection from an array challenge

// var peopleList = ['asd', 'asdads', 'sdfsd','Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
// function whoIsGonnaPay(peopleList) {
//   var numberOfPeople = peopleList.length;
//   var randomPeoplePosition = Math.floor(Math.random() * numberOfPeople);
//   var randomPeopleName = peopleList[randomPeoplePosition];
//     return randomPeopleName + " is gonna pay today!"
//  }


//! 99 bottles challenge

// function bottles99() {

//    for (var b = 99; b >= 0; b--) {
//       if (b > 1) {
//          console.log(b + " asdf sdf sdfs adf " + b + " asdsad sdfs df fasd. ");
//          console.log((b - 1) + " fdg sdfg  dgf ddf s fdag.");
//       } else {
//          if (b === 1) {
//             console.log(b + " asdf sdf sdfs adf " + b + " asdsad sdfs df fasd. ");
//             console.log("No more fdg sdfg  dgf ddf s fdag.");
//          } else {
//             console.log("No more asdf sdf sdfs adf " + "No more asdsad sdfs df fasd.");
//             console.log("Bring " + 99 + " fdg sdfg dgf ddf s fdag.");
//          }

//       }

//    }
// }

//! fibonacciChallenge

// var n = prompt("What length do you want?");

// function fibonacciChallenge() {
//    var finalOutput = [];
//    for (var x = 0; x < n; x++) {
//       if (x <= 1) {
//          finalOutput.push(x);
//       } else {
//          finalOutput.push(finalOutput[x - 1] + finalOutput[x - 2])
//       }

//    }
//    alert ("Here is your fib number: " + "[" + finalOutput + "]");
// }
// fibonacciChallenge();


//! factorial

// function FirstFactorial(num) { 
//    var fNum = 1;
//    for (let n = 1; n <= num; n++) {
//       fNum *= n;
//    }

//    // code goes here  
//    return fNum; 

//  }

// function FirstFactorial(num) {
// 	if (num > 0) {
// 			return num * FirstFactorial(num - 1);
// 	} else {
// 			return 1;
// 	}
// }


// var n = prompt("Which nth fib num do you want?");


//! fibonacciChallenge  2

// function fibonacciChallenge(n) {
//    var finalOutput = [];
//    for (var x = 0; x < n; x++) {
//       if (x <= 1) {
//          finalOutput.push(x);
//       } else {
//          finalOutput.push(finalOutput[x - 1] + finalOutput[x - 2])
//       }

//    }
//    return ("Here is your " + n + "th fib number: " + finalOutput[n - 1] + ".");
// }


//! js problem solving #1

//** regular function
// function numCheck(num1, num2) {
//     if ((num1 + num2) === 100 || num1 === 100 || num2 === 100) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(numCheck(100,0));


//** arrow function (one liner)

// const numCheck = (a, b) => a === 100 || b === 100 || a + b === 100;

// console.log(numCheck(100,0));

//! js problem solving #2

// // let jsConst = "wsaa.sad.php";
// let fileName = prompt("Enter the file name with extension -")
// const getFileExtension = () => fileName.slice(fileName.lastIndexOf("."));

// alert("The extension of the file is - " + getFileExtension());


