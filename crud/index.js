//! CRUD => Create + Read + Update + Delete
// const students = [
//   { id: 3, fullName: "Yaxyoyev Ashrafxon", age: 19 },
//   { id: 1, fullName: "Tursunmahammatov Khojiakbar", age: 16 },
//   { id: 2, fullName: "Najmiddinov Nodirbk", age: 20 },
//   { id: 5, fullName: "Abdullayev Nurullo", age: 22 },
//   { id: 4, fullName: "Abdurhamonov Abdurahim", age: 15 },
// ];

//! Read
//? 1
// const sorted = students.sort((a, b) => a.age - b.age);
// const sorted = students.sort((a, b) => b.age - a.age);
// const sorted = students.sort((a, b) => a.fullName.localeCompare(b.fullName));
// const sorted = students.sort((a, b) => b.fullName.localeCompare(a.fullName));
// console.log(sorted);
//? 2
// const search = (str) => students.filter(s => s.fullName.toLowerCase().includes(str.toLowerCase()));
// console.log(search("NO"));

//! Delete
// const deleteUser = (id) => {
// 	let result = students.filter(s => s.id !== id);
// 	return result.sort((a, b) => a.id - b.id);
// }
// console.log(deleteUser(2));

//! Create
// const addUser = (newUser) => {
// 	let result = [...students, {id: students.length + 1, ...newUser}];
// 	return result.sort((a, b) => a.id - b.id);
// }
// console.log(addUser({fullName: "Ibodov Sardor", age: 20}));

//! Update
//? 1
// const updateUser = (id, property) => {
//   return students.map((s) => {
//     return s.id === id ? { ...s, fullName: property } : s;
//   });
// };
// console.log(updateUser(2, "Najmiddinov Nodirbek"));
//? 2
// const updatedStudents = () => {
// 	return students.map(s => {
// 		return s.age >= 18 ? {...s, prava: true} : {...s, prava: false}
// 	})
// }
// console.log(updatedStudents());

// Removing duplicates
let str = "webbbraiiin accaddemmy";
// const removeDuplicate = (str) => {
// 	let result = "";
// 	for(let char of str) {
// 		if(!result.includes(char)) result+=char;
// 	}
// 	return result;
// }

// const removeDuplicate = str => str.split("").filter((e, i, a) => i === a.indexOf(e)).join("");
// console.log(removeDuplicate(str));