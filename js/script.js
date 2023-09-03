"use strict"

let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть степінь`);
let result = 1;
for (let i=1; i<=b; i++) {
	result = result * a;
}
document.write(`<h1>${result}</h1>`);