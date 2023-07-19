//! old var
// console.log(a);
// var a = 10;
// console.log(a);
// let a = 10;

// var i = 10;
// for(let i = 0; i < 100; i++) {
// 	i = 100;
// }
// console.log(i);

// i = 10;

// var a = 10;
// function get() {
// 	var a = 20;
// 	console.log(a);
// }
// get(); // 20
// console.log(a); // 10

// var a = 10;
// function get() {
// 	a = 20;
// }
// get();
// console.log(a); // 20

//! IIFE => Immediately invoked function expression
// (function() {
// 	console.log("salom");
// }())

// (function() {
// 	var a = 10;
// console.log(a);
// }())
// console.log(a);

// (function() {
// 	a = 10;
// }())
// console.log(a);

//! Global object
//! JS => window, globalThis
//! NodeJS => global
// console.log(window);
// console.log(globalThis);
// function getData() {
// 	globalThis.a = 10;
// 	b = 11;
// }
// getData();
// console.log(a);
// console.log(b);

//! NFE => named function expression
// const a = function() {
// 	console.log("salom");
// }
// a();
// const a = function b() {
// 	console.log("salom");
// 	b();
// }
// a();

//! Object creation
//? 1
// let a = {};
// console.log(a);
//? 2
// let b = new Object({});
// console.log(b);
//? 3
// let c = Object.create(null);
// console.log(c);
//? 4
// function creatingObject() {
//   this.name = "webbrain";
//   this.founded = 2020;
// }
// creatingObject.title = "webbrain";
// console.log(creatingObject.title);
//? 5
// function creatingObject() {
//   this.name = "webbrain";
//   this.founded = 2020;
// }
// let myObj = new creatingObject();
// console.log(myObj);

//! Homework
// sum(a)(b) => a + b
// const sum = (a) => {
//   return (b) => {
//     if (b) return sum(a + b);
//     else return a;
//   };
// };
// console.log(sum(5)(-1)(2)());
// console.log(sum(6)(-1)(-2)(-3)());
// console.log(sum(0)(1)(2)(3)(4)(5)());

// function getData() {
//   a = 10;
// }
// getData();
// console.log(a);

// console.log(a);
// let a = 10;

// function getData() {
//   globalThis.a = 10;
// }
// getData();
// console.log(globalThis, a);

// (function getData() {
// 	let a = 1;
// 	var b = 2;
// 	globalThis.c = 3;
// })()
// console.log(a);
// console.log(b);
// console.log(c);

// const getData = function dataGet() {
// 	console.log("salom");
// }
// getData()
// dataGet()

// let sayHi = setTimeout(() => {
//   console.log("salom");
// }, 1000);
// let sayHi = setInterval(() => {
//   console.log("salom");
// }, 1000);
// setTimeout(() => {
// 	clearInterval(sayHi)
// }, 5000)

// console.log(1);
// setTimeout(() => {
// 	console.log(2);
// }, 2000)
// console.log(3);

// console.log(1); // 1
// for(let i = 2; i <= 1000; i++) {
// 	console.log(i);
// } // 2
// setTimeout(() => {
// 	console.log(1001);
// }, 1000) // 4
// console.log(1002); // 3

// console.log(1);
// setTimeout(() => {
// 	console.log(2);
// }, 0)
// console.log(3);

// console.log(1);
// console.log(2);
// console.log(3);

//! Event loop
// setTimeout(() => {
// 	console.log(1);
// }, 1000)
// setTimeout(() => {
// 	console.log(2);
// }, 800)
// setTimeout(() => {
// 	console.log(3);
// }, 750)
// setTimeout(() => {
// 	console.log(4);
// }, 500)