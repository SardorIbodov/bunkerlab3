// const menu = document.querySelector("#menu");
//? 1
// menu.style.border = "1px solid red";
// menu.style.padding = "5px";
// menu.style.backgroundColor = "aqua";
// menu.style.listStyle = "none";
//? 2
// menu.style.cssText = `
// 	border: 1px solid red;
// 	padding: 5px;
// 	background-color: aqua;
// 	list-style: none
// `;

//! Attribute manipulation
// const link = document.querySelector("#link");
//? getAttribute
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("id"));
// let classes = link.getAttribute("class");
// classes += " link3";
//? setAttribute
// link.setAttribute("href", "https:google.com");
// link.setAttribute("class", classes);
//? removeAttribute
// link.removeAttribute("class");

//! Classlist
//? add
// link.classList.add("link3");
//? remove
// link.classList.remove("link1")
//? toogle
// link.classList.toggle("link1");

//! Element(Tag) yaratish
// const div = document.createElement("div");
// const menu = document.querySelector("#menu");
// div.style.cssText = `
// 	border: 1px solid red;
// 	background: green;
// `;
// const body = document.querySelector("body");
// div.innerText = "Webbrain";
//! Insertion
//? prepend()
// body.prepend(div);
// menu.prepend(div);
//? append()
// menu.append(div);
//? before()
// menu.before(div);
//? after()
// menu.after(div);

//? append() vs appendChild()
//! append() => parameter istalgancha || return ga hech nima qaytarmaydi
//! appendChild() => parameter 1ta    || return ga qo'shgan elementni qaytaradi
// const menu = document.querySelector("#menu");
// const div1 = document.createElement("div");
// div1.style.cssText = `
// 	padding: 5px;
// 	border: 1px solid red;
// 	background: green;
// `;
// const div2 = document.createElement("div");
// div2.style.cssText = `
// 	padding: 5px;
// 	border: 1px solid green;
// 	background: red;
// `;
// let a = menu.append(div1, div2);
// console.log(a);
// let b = menu.appendChild(div1, div2);
// console.log(b);

//! Geometry
// const box = document.querySelector(".box");
// console.log(box.offsetWidth, "offset");
// console.log(box.clientWidth, "client");
// console.log(box.offsetHeight, "offset h");
// console.log(box.clientHeight, "client h");
// console.log(box.getBoundingClientRect());
// console.log(box.scrollHeight);

// scroll
// box.scroll(0, 100);
// box.scroll(0, 100);
// scrollTo
// box.scrollTo(0, 20);
// box.scrollTo(0, 20);
// scrollBy
// box.scrollBy(0, 100);
// box.scrollBy(0, 100);
// box.scrollBy(0, 100);
