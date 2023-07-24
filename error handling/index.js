//! Error handling
//? 1
// try {
// 	console.log(num);
// } catch {
// 	console.log("Error oldini olindi!");
// }
// console.log(1);

//? 2
// try {
//   console.log(num);
// } catch (error) {
//   console.log(error);
//   console.log(error.message, "m"); // xabar
//   console.log(error.name, "n"); // nomi
//   console.log(error.stack); // stack = error
// }
// console.log(1);

//? 3
// try {
//   throw new Error("My first error!");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }
// console.log(1);

//! Asinxron
// let user = {
//   login: "eshmat",
//   password: 12345,
// };
// console.log("started");
// function login(lg, pw) {
//   setTimeout(() => {
//     if (user.login === lg && user.password === pw) {
//       console.log("Welcome!");
//     } else console.log("Login or password is wrong!");
//   }, 2000);
// }
// login("eshmat", 1234);
// console.log("finished");
//? 1 Callback => biror funksiyani parametri sifatida kelgan boshqa funksiya
// let user = {
//   login: "eshmat",
//   password: 12345,
// };
// console.log("started");
// function login(lg, pw, func) {
//   setTimeout(() => {
//     if (user.login === lg && user.password === pw) {
//       func("Welcome");
//     } else func("Login or password is wrong!");
//   }, 2000);
// }
// login("eshmat", 12345, (data) => {
// 	console.log(data);
// 	console.log("finished");
// })
//? 2. Promise => asinxron kod natijasiga qarab natija qaytaradigan object
// let user = {
//   login: "eshmat",
//   password: 12345,
// };
// let p = new Promise((resolve, reject) => {
//   console.log("started...");
//   setTimeout(() => {
//     if (user.login === "eshmat" && user.password === 1234) {
//       resolve("Welcome");
//     } else {
//       reject("Password is wrong!");
//     }
//   }, 2000);
// });
// //! then(), catch(), finally()
// p.then((data) => {
//   console.log(data);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("finished"));

//! our setTimeout
// function delay(time) {
//   return new Promise((resolve) => setTimeout(() => resolve(), time));
// }
// delay(3000).then(() => console.log("3 sekund o'tdi"));
// delay(10000).then(() => console.log("10 sekund o'tdi"));

//! Promise.all([])
// Promise.all([
//   delay(1000),
//   delay(2000),
//   delay(3000),
// ]).then(() => {
// 	console.log("Hamma promislar tugadi");
// });

//! Promise.race([])
// Promise.race([delay(4000), delay(2000), delay(1000), delay(3000)]).then(() => {
//   console.log("Hamma promislar tugadi");
// });

//! Practice
// console.log("started");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((expectedData) => console.log(expectedData))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("finished"));

//! Async await
// async function getData() {
// 	console.log("started");
// 	setTimeout(async () => {
// 		let p = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let res = await p.json();
// 		console.log(res);
// 		console.log("finished");
// 	}, 2000)
// }

// getData();
