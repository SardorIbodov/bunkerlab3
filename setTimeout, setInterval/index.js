//! Async, sync
//! sync
// console.log(1);
// console.log(2);
// console.log(3);
//! async
// function getData(name) {
// 	console.log(`Salom ${name}`);
// };
// getData("Webbrain");

//! setTimeOut(callback, time)
// setTimeout(() => {
// 	console.log(1);
// }, 1000)

// function getData(name) {
//   console.log(`Salom ${name}`);
// }
// setTimeout(() => {
//   globalThis.title = "Webbrain";
// }, 1000);
// getData(title);
// let time = setTimeout(() => getData("Webbrain"), 3000);
// clearTimeout(time);

//! setInterval(callback, time)
// setInterval(() => console.log("salom"), 1000);
// let time = 60;
// let timeInt = setInterval(() => {
//   time--;
//   console.log(time);
// }, 1000);
// setTimeout(() => {
//   clearInterval(timeInt);
// }, 10000);

//! Practice
// let timer = setInterval(() => {
//   let hours = new Date().getHours();
//   let minutes = new Date().getMinutes();
//   let seconds = new Date().getSeconds();
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
// setTimeout(() => {
//   clearInterval(timer);
// }, 5000);
