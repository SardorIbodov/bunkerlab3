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
