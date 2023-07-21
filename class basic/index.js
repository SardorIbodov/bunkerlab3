//! ES6 => 2015
//! Syntax
//? 1
// class Web {};
// let user1 = new Web();
// let user2 = new Web();
// let user3 = new Web();
// console.log(user1);
// console.log(user2);
// console.log(user3);
//? 2
// class User {
//   name = "webbrain";
//   getName(title) {
//     console.log(`${this.name} ${title}`);
//   }
// }
// let user1 = new User();
// user1.getName("academy");
// user1.getName("center");
// user1.getName("webbrain");

//! constructor
// class User {
// 	constructor() {
// 		console.log("constructor yurdi");
// 	}
// 	getData() {
// 		console.log("getData yurdi");
// 	}
// }
// let user1 = new User("webbrain");
// user1.getData();
// class User {
// 	constructor(prop) {
// 		this.name = prop;
// 	}
// 	getData(prop) {
// 		console.log(`${this.name} academy`);
// 	}
// }
// let user1 = new User("webbrain");
// user1.getData();

//! Practice
// class User {
//   constructor(prop) {
//     this.name = prop.name;
//     this.age = prop.age;
//   }
//   getData() {
//     console.log(`${this.name} ismli ${this.age} yoshli Webbrain o'quvchisi`);
//   }
// }
// let user1 = new User({ name: "Abdurahim", age: 15 });
// let user2 = new User({ name: "Ashrafxon", age: 19 });
// let user3 = new User({ name: "Aziz", age: 20 });
// console.log(user1);
// user1.getData();
// console.log(user2);
// user2.getData();
// console.log(user3);
// user3.getData();

//! Getter, setter in class
// class User {
//   constructor(login) {
//     this.login = login;
//   }
//   get showLogin() {
//     console.log(this.login);
//   }
//   set setPassword(password) {
//     this.password = password;
//   }
// }
// let user1 = new User("Abdurahim");
// user1.showLogin;
// user1.setPassword = 12345;
// let user2 = new User("Aziz");
// user2.showLogin;
// user2.setPassword = 54321;
// console.log(user1);
// console.log(user2);

//! Computed names
// class Animal {
//   ["butter" + "fly" + 1]() {
//     console.log("I'm butterfly");
//   }
// }
// let animal = new Animal();
// animal.butterfly1();

//! Inheritance => meros
// class Animal {
//   constructor(data) {
//     this.weight = data.weight;
//     this.color = data.color;
//   }
//   info() {
//     console.log(`Weight: ${this.weight}, Color: ${this.color}`);
//   }
// }
// class Cat extends Animal {
//   voice() {
//     console.log("Cat's voice");
//   }
// }
// let cat1 = new Cat({ weight: 5, color: "white" });
// cat1.info();
// cat1.voice();
// class Dog extends Animal {}
// let dog1 = new Dog({ weight: 8, color: "black" });
// dog1.info();

//! super()
// class Animal {
//   constructor(data) {
//     this.weight = data.weight;
//     this.color = data.color;
//   }
//   info() {
//     console.log(`Weight: ${this.weight}, Color: ${this.color}`);
//   }
// }
// class Cat extends Animal {
//   constructor(data) {
//     super(data);
//     this.hasTail = data.hasTail;
//   }
//   voice() {
//     console.log("Cat's voice");
//   }
// }
// let cat1 = new Cat({ weight: 5, color: "white", hasTail: true });
// console.log(cat1);
// class Dog extends Animal {}
// let dog1 = new Dog({ weight: 8, color: "black" });
// console.log(dog1);
