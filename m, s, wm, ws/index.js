//! Map() => non-primitive keys, size()
// let map = new Map();
// let obj = {};
// map.title = "academy"
// console.log(map, map.size);
// obj.title = "academy";
// console.log(obj);

//! set(), get(), has(), delete(), clear()
//? set(key, value)
// let arr = [1, 2, 3];
// let obj = { name: "w" };
// let func = () => {};
// map.set("title", "academy");
// map.set(true, "wba");
// map.set(2020, "webbrain");
// map.set(arr, "IT");
// map.set(obj, "Center");
// map.set(func, "some");
// console.log(map, map.size);
//? get(key)
// console.log(map.get("title"));
// console.log(map.get(true));
// console.log(map.get(2020));
// console.log(map.get(arr));
// console.log(map.get(obj));
// console.log(map.get(func));
// console.log(map.get("func"));
//? has(key)
// console.log(map.has("title"));
// console.log(map.has(arr));
// console.log(map.has("title"));
// console.log(map.has("titl"));
//? delete(key)
// map.delete("title");
// console.log(map);
//? clear()
// map.clear();
// console.log(map);

//! Iteration
//? keys()
// console.log(map.keys());
// //? 1
// for(let key of map.keys()) {
// 	console.log(key);
// }
// //? values()
// console.log(map.values());
// //? 1
// for(let value of map.values()) {
// 	console.log(value);
// }
//? entries()
// console.log(map.entries());
// //? 1
// for(let entry of map.entries()) {
// 	console.log(entry);
// }

//? forEach()
// map.forEach((v, k, m) => {
// 	console.log(v, k, m);
// })

//! map => object
// console.log(map);
// let obje = Object.fromEntries(map);
// console.log(obje);
// console.log(typeof map);

//! Set() => quicker, no duplicates, safety
// let set = new Set();
// console.log(set, set.size);

//! add(), has(), delete(), clear()
//? add(value)
// set.add("webbrain");
// set.add(true);
// set.add(1);
// set.add(true);
// set.add(1);
// console.log(set, set.size);
//? has(value)
// console.log(set.has(true));
// console.log(set.has(false));
// console.log(set.has("webbrain"));
//? delete(value)
// set.delete(true);
// console.log(set);
//? clear()
// set.clear();
// console.log(set);

//! Iteration
//? 1
// for(let value of set) {
// 	console.log(value);
// }
//? 2
// set.forEach((v) => console.log(v));

//! WeakMap()
// let weakMap = new WeakMap();
// let obj = { name: "wba" };
// let arr = [1, 2, 3];
// let func = () => {};
// weakMap.set(obj, "webbrain");
// weakMap.set(arr, "IT");
// weakMap.set(func, "center");
// weakMap.set(sym, "unique");
// console.log(weakMap);
// console.log(weakMap.get(obj));
// console.log(weakMap.get(arr));
// console.log(weakMap.get(func));

//! WeakSet()
// let weakSet = new WeakSet();
// let obj = { name: "wba" };
// let arr = [1, 2, 3];
// let func = () => {};
// weakSet.add(obj);
// weakSet.add(arr);
// weakSet.add(func);
// console.log(weakSet.has(obj));
// console.log(weakSet.has(arr));
// console.log(weakSet.has(func));