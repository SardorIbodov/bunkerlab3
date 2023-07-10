//! 1
// const isEqual = (str1, str2) => {
// 	arr1 = str1.split("").sort((a, b) => a.localeCompare(b)).join("");
// 	arr2 = str2.split("").sort((a, b) => a.localeCompare(b)).join("");
// 	return arr1 === arr2;
// }
// console.log(isEqual("web", "bwa"));
//! 2
// let str = "We66ra1n Acad4my";
// const findNumbers = (str) => {
//   let res = {};
//   for (let char of str) {
//     if (!isNaN(Number(char)) && char !== " ") {
//       res[char] ? res[char]++ : (res[char] = 1);
//     }
//   }
//   return res;
// };
// console.log(findNumbers(str));
//! 3
// let str = "webbraaiiin";
// const toZip = (str) => {
//   let count = "";
// 	let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
// 			count === "" ? count = 2 : count++;
//     } else {
// 			result += `${str[i]}${count}`;
// 			count = "";
// 		}
//   }
// 	return result;
// };
// console.log(toZip(str));
