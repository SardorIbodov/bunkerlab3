//! Recursion => funksiyani o'z tanasida qayta ishlatish
//? 1
// const sum = (n) => {
// 	let res = 0;
// 	for(let i = 1; i <= n; i++) {
// 		res += i;
// 	}
// 	return res;
// }
// console.log(sum(10));
//? 2
// const sum = (n) => {
// 	if(n === 1) return 1;
//   return n + sum(n - 1);
// };
// 1 => 10 + sum(9)
// 2 => 10 + 9 + sum(8)
// ...
// ? => 10 + 9 + ... + 2 + 1
// console.log(sum(10));

//? 3
// const factorial = (n) => {
// 	if(n < 0) return "Musbat son kiriting!";
// 	if(n === 0) return 1;
// 	if(n === 1) return 1;
// 	return n * factorial(n - 1);
// }
// console.log(factorial(5));

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// const getTotalSalary = company => {
// 	if(Array.isArray(company)) {
// 		return company.reduce((v, c) => v + c.salary, 0);
// 	}
// 	else {
// 		let sum = 0;
// 		for(let child of Object.values(company)) {
// 			sum += getTotalSalary(child); // sum += getTotalSalary(sales) + getTotalSalary(development)
// 		} // sum += 1000 + 1600 + getTotalSalary(sites) + getTotalSalary(internals)
// 		// sum += 1000 + 1600 + 2000 + 1800 + 1300
// 		// sum += 7700
// 		return sum;
// 	}
// }
// console.log(getTotalSalary(company));
