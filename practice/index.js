const body = document.querySelector("body");
const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
);
image.style.cssText = `
	width: 200px;
`;
body.prepend(image);
