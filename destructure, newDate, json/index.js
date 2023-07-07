//! Destructure => qaytadan qurish
//! Object
// const obj = { name: "wba", title: "academy", info: { rooms: 2, windows: 10 } };
// console.log(obj.name);
// console.log(obj.title);
// obj.name = name
// obj.title = title
//? 1
// const {name, title} = obj;
// console.log(name);
// console.log(title);
//? 2
// const name = "webbrain";
// const {name: newName, title} = obj;
// console.log(name);
// console.log(newName);
// console.log(title);
//? 3
// const name = "webbrain";
// const {
//   name: newName,
//   title,
//   info: { rooms, windows },
// } = obj;
// console.log(rooms);
// console.log(windows);

//! Array
// const fruits = ["banana", "orange", "kiwi", "grapes", "apple"];
// const [banan, apelsin,...mevalar] = fruits;
// console.log(banan);
// console.log(apelsin);
// console.log(mevalar);

//! Function
// const sayHello = (obj) => {
//   return `Salom ${obj.firstName}, ${obj.lastName}, ${obj.middleName}`;
// };
// const sayHello = ({firstName, lastName, middleName}) => {
//   return `Salom ${firstName}, ${lastName}, ${middleName}`;
// };
// console.log(
//   sayHello({
//     firstName: "Eshmat",
//     lastName: "Toshmatov",
//     middleName: "Xolmatovich",
//   })
// );

//! new Date()
// const date = new Date();
// console.log(date);
//? getFullYear
// console.log(date.getFullYear());
//? getMonth => 0 dan boshlab hisoblaydi
// console.log(date.getMonth() + 1);
//? getDay => Yakshanbani 0 dan boshlaydi
// console.log(date.getDay());
//? getDate
// console.log(date.getDate());
//? getHours
// console.log(date.getHours());
//? getMinutes
// console.log(date.getMinutes());
//? getSeconds
// console.log(date.getSeconds());
//? getMilliseconds
// console.log(date.getMilliseconds());

//! JSON typeof = string
// const obj = {
// 	name: "John",
// 	age: 20,
// 	isEmployed: true,
// 	isGraduated: true,
// 	isMarried: false,
// }
//! Object => JSON
//? JSON.stringify(obj, [dependencies array], format)
// const newObj = JSON.stringify(obj, ["name", "age"], 5);
// console.log(newObj);

//! JSON => Object
//? JSON.parse(json)
// const oldObj = JSON.parse(newObj);
// console.log(oldObj);