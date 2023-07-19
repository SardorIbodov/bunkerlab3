//! __proto__
// let obj1 = { name: "webbrain" };
// let obj2 = { title: "academy" };
//? 1
// Object.assign(obj1, obj2);
// console.log(obj1.title);
//? 2
// obj1.__proto__ = obj2;
// console.log(obj1.title);

//! prototype
// const student = {
//   id: 3,
//   fullName: "Yaxyoyev Ashrafxon",
//   age: 19,
// };

// const student2 = {
//   id: 4,
//   fullName: "Abdurhamonov Abdurahim",
//   age: 15,
// };

// function getData() {
//   console.log(`Ismi: ${this.fullName}, Yoshi: ${this.age}`);
// }
// function changeAge(value) {
//   this.age = this.age * value;
// }
// Object.prototype.getData = getData;
// Object.prototype.changeAge = changeAge;
// student2.getData();
// student2.changeAge(3);
// student2.getData();

// function removeOdds(array) {
//   let result = array.filter((v) => v % 2 !== 1);
//   return result;
// }
// console.log(array);
// Array.prototype.removeOdds = removeOdds;
// let newArray = array.removeOdds(array);
// console.log(newArray);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removePrime(array) {
//   let result = [];
//   result = array.filter((v) => {
//     let count = 0;
//     for (let i = 1; i <= v; i++) {
//       if (v % i === 0) count++;
//     }
//     if (count > 2 || v === 1) {
//       return true;
//     }
//   });
//   return result;
// }
// Array.prototype.removePrime = removePrime;
// let newArray = array.removePrime(array);
// console.log(newArray);

//! forEach, map, every, some
