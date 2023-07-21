//! Static variable, static function
// class User {
//   static sv = "WBA";
//   name = "webbrain";
//   constructor(title) {
//     this.title = title;
//   }
//   getStatic() {
//     console.log(User.sv);
//   }
//   static showStatic() {
//     console.log("this is static method");
//     console.log(this.sv);
//     return 1;
//   }
// }
// let user1 = new User("academy");
// console.log(user1.showStatic());
// console.log(User.showStatic());
// user1.getStatic();
// console.log(user1.name);
// console.log(user1.title);
// console.log(user1.sv);
// console.log(User.sv); // "WBA"
// class Student extends User {}
// let student = new Student();
// console.log(student);

//! _Public and #privite variables
// class User {
//   _login = "Abdurahim";
//   #password = 12345;
//   get showPassword() {
//     console.log(this.#password);
//   }
//   set changePassword(newPassword) {
//     this.#password = newPassword;
//   }
// }
// let user1 = new User();
// console.log(user1._login);
// console.log(user1.#password);
// user1.showPassword;
// user1.changePassword = 54321;
// user1.showPassword;

//! Build-in constructor
// class OurArray extends Array {}
// let ourArray = new OurArray();
// ourArray.push(1);
// ourArray.push(2);
// console.log(ourArray);
// let arr = [1, 2];
// console.log(arr);
// class OurString extends String {}
// let ourString = new OurString();
// console.log(ourString);
// ourString += "salom";
// console.log(ourString);

//! instanceof
// class OurArray extends Array {}
// let ourArray = new OurArray();
// console.log(ourArray instanceof OurArray);
// class User {
//   static sv = "WBA";
//   name = "webbrain";
//   constructor(title) {
//     this.title = title;
//   }
//   getStatic() {
//     console.log(User.sv);
//   }
//   static showStatic() {
//     console.log("this is static method");
//     console.log(this.sv);
//     return 1;
//   }
// }
// let user1 = new User("academy");
// console.log(user1 instanceof OurArray);

//! mixin
// class User {
//   info() {
//     console.log("This is user");
//   }
// }
// let object = {
//   data() {
//     console.log("This is object");
//   },
// };
// Object.assign(User.prototype, object);
// let user1 = new User();
// console.log(user1.data());
// console.log(user1.info());
