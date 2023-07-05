// Homework 13
// let sum = 0, initial = 1.1, copyInitial = 1.1; n = 6;
// for(let i = 1; i <= n; i++) {
// 	sum = +(sum + initial).toFixed(1);
// 	copyInitial += 0.1;
// 	initial = copyInitial * ((-1) ** (i));
// }

// Homework 26
// let sum = 0, n = 3, x = 1;
// for (let i = 0; i <= n; i++) {
//   sum += (-1) ** i * (x ** (2 * i + 1) / (2 * i + 1));
// }
// console.log(sum);
// 1 - 1 / 3 + 1 / 5 - 1 / 7

// Function => reusable, dynamic
// 1 + ... + n

// Function declaration
// 1
// function sayHello() {
// 	console.log("Hello");
// }
// sayHello();
// 2
// function sayHello(fullName) {
// 	console.log(`Hello ${fullName}`);
// }
// sayHello("Webbrain")
// sayHello("Academy")
// sayHello("Digital")

// Function expression
// const sayHello = function() {
// 	console.log("Hello");
// }
// sayHello();
// const sayHello = function(fullName) {
// 	console.log(`Hello ${fullName}`);
// }
// sayHello("Webbrain");

// Arrow function (ES6)
// const sayHello = (fullName) => {
// 	console.log(`Hello ${fullName}`);
// }
// sayHello("Webbrain")

// 1
// const sayHello = (fullName = "Eshmat") => {
// 	console.log(`Hello ${fullName}`);
// }
// sayHello("Webbrain");

// 2
// const sayHello = (fullName = "Eshmat") => {
// 	console.log(`Hello ${fullName}, funksiya ichi`);
// }
// console.log(sayHello());
// const sayHello1 = () => {
// 	console.log("Hello, console");;
// }
// console.log(sayHello1(), 1);

// const sayHello2 = () => {
// 	return "Hello";
// }
// console.log(sayHello2(), 2);

// Qavslarsiz holat
// const sayHello = () => console.log("Hello");
// sayHello();

// Practice
// 2ta sondan kattasini topadigan funksiya
// function findMax(a, b) {
// 	if(a > b) return a;
// 	else if(a < b) return b;
// 	else return "Ikkalasi teng!";
// }
// console.log(findMax(5, 5));

// 2ta sondan kichigini topadigan funksiya
// function findMax(a, b) {
// 	if(a > b) return b;
// 	else if(a < b) return a;
// 	else return "Ikkalasi teng!";
// }
// console.log(findMax(1, 1));

// sonni darajasini topadigan funksiya
// function power(number, degree) {
// 	return number ** degree;
// }
// console.log(power(2, 5));

// first task
// function checkAge(age) {
// 	return age > 18 ? true : "Did parents allow you"
// }
// function checkAge(age) {
// 	return age > 18 || "Did parents allow you"
// }
// console.log(checkAge(25));

// second task
// const ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Do you agree",
//   function () {
//     alert("You agreed");
//   },
//   function () {
//     alert("You canceled the execution");
//   }
// );

// decimal to binary
// function decToBi(num) {
// 	let result = "";
// 	while(num >= 1) {
// 		result = num % 2 + result;
// 		num = parseInt(num / 2)
// 	}
// 	return result;
// }

// console.log(decToBi(7));

// Sort
// function sort(a, b, c) {
//   let max, min, med;
//   if (a > b && b > c) {
//     max = a;
//     min = c;
//     med = b;
//   } else if (a > b && c > b) {
//     min = b;
//     if (a > c) {
//       max = a;
//       med = c;
//     } else {
//       max = c;
//       med = a;
//     }
//   } else if (b > a && a > c) {
//     max = b;
//     min = c;
//     med = a;
//   } else if (b > a && a < c) {
//     min = a;
//     if (b > c) {
//       max = b;
//       med = c;
//     } else {
//       max = c;
//       med = b;
//     }
//   } else if (c > a && a > b) {
//     max = c;
//     min = b;
//     med = a;
//   } else if (a > c && c < b) {
//     min = c;
//     if (a > b) {
//       max = a;
//       med = b;
//     } else {
//       max = b;
//       med = a;
//     }
//   }
// 	return `${min}, ${med}, ${max}`
// }
// console.log(sort(2, 9, 4)); // 2 4 9

// Shadowed variable
// let a = 1; // Shadowed variable
// function getFullName() {
// 	let a = 2;
// 	return a;
// }
// console.log(a);
// console.log(getFullName());