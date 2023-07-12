//! Scope => ES6 gacha
//? Global scope
//? Functional scope

//! Scope => ES6 dan keyin
//? Global scope => (let, var, const faqat {} yozilmagan bulsa)
//? Functional scope => (var)
//? Block scope => (let, const)
//? 1
// let name = "webbrain";
// var name = "webbrain";
// console.log(name);
// for(let i = 0; i < 5; i++) {
// 	console.log(name);
// }
//? 2
// function multiply(a, b) {
// 	let c = 10;
// 	var c = 10;
// }
// console.log(c);
//? 3
// {
// 	let a = "salom";
// 	var b = "xayr";
// 	console.log(a);
// }
// console.log(a);
// console.log(b);
//? 4
// for(let i = 0; i < 10; i++) {

// }
// console.log(i); // is not defined
//? 5
// for(var i = 0; i < 10; i++) {

// }
// console.log(i); // 10

//? 6
// var a = "salom";
// let b = "xayr";
// console.log(window.a);
// console.log(window.b);

//! Closure
// let a = 10; // {a: 10}
// function getData() {
// 	let a = 11;
// 	console.log(a); // {a: 11, a: 10}
// }
// getData();
// function getData() {
// 	let a = 10; 
// 	return () => ++a;
// }
// console.log(getData()());