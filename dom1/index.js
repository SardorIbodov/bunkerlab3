//! DOM => Document Object Module
// console.log(window);
// console.log(document);
// document.title = "DOM | 1";
// console.log(document.title);
// console.log(document.location);

//! Node vs element
//! HTML tag => JS
//! Selector
// console.log(title);
// console.log(menu);
//! Node
// console.log(menu.childNodes);
//! Element
// console.log(menu.children);
//! Parent-child relationship

//! id
// console.log(fifth);
//! tag-name
// const listItem = document.getElementsByTagName("li");
// console.log(listItem);
// const titleText = document.getElementsByTagName("h1");
// console.log(titleText);
//! class
// const firstItem = document.getElementsByClassName("first");
// console.log(firstItem);
//! id
// const beshinchi = document.getElementById("fifth");
// console.log(beshinchi);
//! querySelector
// const listItem = document.querySelector("li");
// console.log(listItem);
//! querySelectorAll
// const listItems = document.querySelectorAll("li");
// console.log(listItems);
// const beshinchi = document.querySelector("#fifth");
// console.log(beshinchi);
// const firstItem = document.querySelector(".first");
// console.log(firstItem);

//! Parent child relationship
// console.log(document);
//! firstChild => birinchi bola elementi
// console.log(document.firstChild);
//! lastChild => oxirgi bola elementi
// console.log(document.lastChild.lastChild.firstElementChild);

//! firstChild => birinchi bola node ni olib beradi
//! firstElementChild => birinchi bola elementni(tagni) olib beradi
// const menu = document.querySelector("#menu");
// console.log(menu.firstChild, "node");
// console.log(menu.firstElementChild, "element");

//! parentElement, parentNode
// const title = document.querySelector("#first");
// console.log(title.parentElement);
// console.log(title.parentNode);

//! Sibling
// const three = document.querySelector("#three");
// console.log(three.previousElementSibling);
// console.log(three.nextElementSibling);
// console.log(three.nextSibling);
// console.log(three.previousSibling);

//! innerHTML, innerText, textContent
//! innerHTML => tag, space
//! innerText =>
//! textContent => space
// const content = document.querySelector("#text");
// console.log("innerHTML" ,content.innerHTML);
// console.log("innerText" ,content.innerText);
// console.log("textContent" ,content.textContent);
// content.innerHTML = "<a href='#'>Webbrain</a>";
// content.innerText = "<a href='#'>Webbrain</a>";
// content.textContent = "<a href='#'>Webbrain</a>";
// content.textContent = "Webbrain";

//! hidden
// const h1 = document.querySelector("h1");
// h1.hidden = true;
