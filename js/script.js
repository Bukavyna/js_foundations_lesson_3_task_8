"use strict"

//Піднесення до степеня
/*

let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть степінь`);
let result = 1;
for (let i=1; i<=b; i++) {
	result = result * a;
}
document.write(`<h1>${result}</h1>`);

 */

//Піднесення до від'ємного степеня

let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть степінь`);
function power(a, b) {
	let result = 1;
	for(let i = 0; i > b; i--) {
		result *= a;
	}
	return 1 / result;
}
let result = power(a, b);
document.write(`<h1>${result}</h1>`);
