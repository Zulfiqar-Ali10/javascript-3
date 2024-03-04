
// Chapter 9 : Prompts

// Question no 1
// var city = prompt("Enter the city name");
// if (city === "karachi") {
//     console.log("Welcome to the city of lights") ;
// }

// Question no 2
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     console.log("Good Morning Sir") ;
// } else if (gender === "female") {
//     console.log("Good Morning Ma'am.");
// } else {
//     console.log("Invalid input. Please enter either 'male' or 'female'.");
//   }

// Question no 3
// var color = prompt("Enter the color of the road traffic signal");
// if (color === "red") {
//     console.log("Must Stop") ;
// } else if (color === "yellow") {
//     console.log("Ready to move");
// } else if (color === "green") {
//      console.log("Move now");
// } else {
//     console.log("Invalid input. Please enter either 'red', 'yellow', or 'green'.");
//   }

// Question no 4
// var remainingFuel =prompt("Enter the remaining fuel in your car (in litres):");
// if (remainingFuel < 0.25) {
//   console.log("Please refill the fuel in your car.");
// }

// Question no 5
// a)
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// d)
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e) 
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// f)
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Question no 6
// var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// var totalObtainedMarks = subject1 + subject2 + subject3;
// var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
// var grade;
// if (percentage >= 80) {
//   grade = 'A';
// } else if (percentage >= 70) {
//   grade = 'B';
// } else if (percentage >= 60) {
//   grade = 'C';
// } else if (percentage >= 50) {
//   grade = 'D';
// } else {
//   grade = 'Fail';
// }
// document.write(`Total Marks Obtained: ${totalObtainedMarks}<br>`);
// document.write(`Total Marks: ${3 * totalMarks}<br>`);
// document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
// document.write(`Grade: ${grade}<br>`);

// Question no 7
// var secNumber = prompt(" Guess the secret number");
// var num = 8;
// if ( secNumber === num ) {
//     console.log("Correct answer") ;
// } else if ( secNumber === num +1) {
//     console.log("Close enough to the correct answer");
// } else {
//     console.log("Incorrect guess. The correct number was 8" );
//   }

// Question no 8
// var number = prompt(" Enter a number to check if it is divisible by 3:") ;
// if ( number % 3 === 0 ) {
// console.log("It is divisble by 3") ;
// } else {
//       console.log("It is not divisible by 3" );
//      }

// Question no 9
// var number = prompt("Enter a number to check if it is even or odd:") ;
// if ( number % 2 === 0 ) {
// console.log(" number is an even number.") ;
// } else {
//       console.log("number is an odd number." );
//      }
  
// Question no 10
// var temperature = prompt(" Enter the temperature")
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("It is freezing outside!");
// }

// Question no 11
// Take input from the user
// var firstNumber = prompt("Enter the first number:");
// var secondNumber = prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (operation === "+") {
//   console.log(firstNumber + secondNumber);
// } else if (operation === "-") {
//   console.log(firstNumber - secondNumber);
// } else if (operation === "*") {
//   console.log(firstNumber * secondNumber);
// } else if (operation === "/") {
//   console.log(firstNumber / secondNumber);
// } else if (operation === "%") {
//   console.log(firstNumber % secondNumber);
// } else {
//   alert("Invalid operation. Please enter one of the following: +, -, *, /, %");
// }

