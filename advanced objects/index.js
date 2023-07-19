// let obj = {
//   name: "wba",
//   title: "academy",
//   founded: 2020,
// };

//! Object.getOwnPropertyDescriptor(obj, key)
//? writable => true
//? enumerable => true
//? configurable => true
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// obj.name = "webbrain";
// console.log(obj);

//! Object.defineProperty(obj, key, {});
//? 1
// Object.defineProperty(obj, "name", { writable: false });
// obj.name = "webbrain";
// console.log(obj);
//? 2
// Object.defineProperty(obj, "name", { configurable: false });
// delete obj.name;
// console.log(obj);
//? 3
// Object.defineProperty(obj, "name", {enumerable: false});
// for(let key in obj) {
// 	console.log(key);
// }
//? 4
// Object.defineProperty(obj, "name", { writable: false, configurable: false });
// obj.name = "webbrain";
// console.log(obj);
// delete obj.name;
// console.log(obj);

//! Object.getOwnPropertyDescriptors(obj)
// console.log(Object.getOwnPropertyDescriptors(obj));

//! Object.defineProperties(obj, props)
// Object.defineProperties(obj, {
// 	name: {
// 		writable: false
// 	},
// 	founded: {
// 		writable: false
// 	}
// });
// obj.name = "webbrain";
// obj.title = "IT center";
// obj.founded = 2021;
// console.log(obj);
// Object.defineProperties(obj, {
//   name: {
//     writable: false,
//   },
//   title: {
//     configurable: false,
//   },
//   founded: {
//     enumerable: false,
//   },
// });
// obj.name = "webbrain";
// delete obj.title;
// for(let key in obj) {
// 	console.log(key);
// }
// console.log(obj);

//! Object.preventExtensions
// Object.preventExtensions(obj);
// delete obj.name;
// obj.title = "IT center";
// obj.fullName = "some";
// obj.name = "some";
// console.log(obj);

//! getter, setter
//? getter
// let obj = {
//   name: "wba",
//   title: "academy",
//   founded: 2020,
// 	get getFullname() {
// 		console.log(`${this.name} ${this.title}`);
// 	}
// };
// obj.getFullname;
//? setter
// let obj = {
//   name: "wba",
//   title: "academy",
//   founded: 2020,
// 	get getFullname() {
// 		console.log(`${this.name} ${this.title}`);
// 	},
// 	set changeName(value) {
// 		this.name = value
// 	}
// };
// obj.getFullname;
// obj.changeName = "webbrain";
// obj.getFullname;

// const student = { 
// 	id: 3, 
// 	fullName: "Yaxyoyev Ashrafxon", 
// 	age: 19,
// 	set changeAge(value) {
// 		this.age = this.age * value;
// 	},
// 	get getData() {
// 		console.log(`Ismi: ${this.fullName}, Yoshi: ${this.age}`);
// 	}
// };
// student.getData;
// student.changeAge = 3;
// student.getData;

