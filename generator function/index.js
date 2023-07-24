//! Basic, yield
// function* Generator1() {
//   yield "H";
//   yield "e";
//   yield "l";
//   yield "l";
//   yield "o";
// }
// let generator1 = Generator1();
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// function *Generator2() {

// }

//! Generator with parameters
// function* Generator(param) {
//   for (let i = 0; i < param.length; i++) {
//     yield param[i];
//   }
// }
// let generator1 = Generator(["H", "e", "l", "l", "o"]);
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());

//! Crud problem
// let students = [
//   { id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbk", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];
// const addUser = (fullName, age) => {
//   students = [...students, { id: students.length + 1, fullName, age }];
// };
// const deleteUser = (id) => {
//   students = students.filter((s) => s.id !== id);
// };
// deleteUser(5); // 4
// deleteUser(2); // 3
// addUser("Sardor Ibodov", 20); // 4
// addUser("Sardor Ibodov", 21);
// addUser("Sardor Ibodov", 22);
// deleteUser(3);
// console.log(students);
// deleteUser(4);
// console.log(students);

//! Solution
// let students = [
//   { id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbk", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];
// let length = students.length;
// function* IdGenerator() {
//   while (true) {
//     yield ++length;
//   }
// }
// let idGenerator = IdGenerator();
// const addUser = (fullName, age) => {
//   students = [...students, { id: idGenerator.next().value, fullName, age }];
// };
// const deleteUser = (id) => {
//   students = students.filter((s) => s.id !== id);
// };
// deleteUser(5); // 4
// deleteUser(2); // 3
// addUser("Sardor Ibodov", 20); // 4
// addUser("Sardor Ibodov", 21);
// addUser("Sardor Ibodov", 22);
// deleteUser(3);
// console.log(students);
// deleteUser(4);
// console.log(students);

//! for-of
// function* Generator1() {
//   yield "H";
//   yield "e";
//   yield "l";
//   yield "l";
//   yield "o";
// }
// let generator1 = Generator1();
// console.log(generator1);
// for (let item of generator1) {
//   console.log(item);
// }
