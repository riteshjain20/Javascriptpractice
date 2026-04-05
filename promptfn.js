
const prompt = require('prompt-sync')();
let name = prompt("What is your name?");
let num = parseInt(prompt('enter any number'));
console.log("Hello, " + name + "!");
console.log("You entered the number: " + num);
console.log(typeof num);